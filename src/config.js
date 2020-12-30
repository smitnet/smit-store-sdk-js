import pkg from '../package.json';
import LocalStorageAdapter from './adapters/storage/localstorage';

class Config {
  constructor(options) {
    const {
      storage,
      apiKey,
      hostname,
      protocol,
      currency,
      language,
      version,
      headers,
      addCartClass,
      throwExceptions,
      isDebug,
    } = options;

    // storage
    this.storage = storage || new LocalStorageAdapter();

    // request
    this.apiKey = apiKey || null;
    this.headers = headers || {};
    this.protocol = protocol || 'https';
    this.hostname = hostname || 'api.smit.store';
    this.version = version || 'v1';
    this.resource = null;

    // localization
    this.currency = currency || 'EUR';
    this.language = language || 'nl';

    // browser
    this.addCartClass = addCartClass || 'add-cart';

    // metadata
    this.sdk = {
      version: pkg.version,
      language: 'JS',
      environment: 'none',
      exceptions: throwExceptions || true,
      isDebug: isDebug || false,
    };

    if (!this.protocol) {
      throw new Error('Missing "protocol" from configuration options');
    }

    if (!this.hostname) {
      throw new Error('Missing "hostname" from configuration options');
    }

    this.requestBaseUrl = `${this.protocol}://${this.hostname}/api/${this.version}`;
  }
}

export default Config;
