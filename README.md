# Javascript SDK — SMIT. Store

## Core Features

- Fetch all categories, facets and products
- ...
- ...
- ...

### Supported browsers

- Chrome
- Firefox
- Edge
- Safari

## Getting started
...

```html
<script src="//cdn.smit.store/dist/{{ version }}/sdk.js?api={{ apiKey }}"></script>
```

### Recommedations

Add the following to first lines within your document head:

```html
<link rel="preconnect" href="https://api.smit.store" />
<link rel="preconnect" href="https://cdn.smit.store" />
```

The following can serve as fallback:

```html
<link rel="dns-prefetch" href="https://api.smit.store" />
<link rel="dns-prefetch" href="https://cdn.smit.store" />
```

### Installation
...

```shell
npm install --save @smitnet/smit-store-sdk
```

### Configuration

```html
<script type="text/javascript">
    var SomeNameForSDK = window.SmitStore.Build({
        // configuration options
    })

    SomeNameForSDK.Products.All().then(function(data) { /* do something with `data` */ })
<script>
```

## Documentation and references
...

### Rollup instead of webpack
The bundlers syntax-wise the same, but under the hood please read [The Why](https://rollupjs.org/guide/en/#the-why) on rollupjs.org.

## License
This repository is published under [MIT](LICENSE.md).

## Contribution

### Development

To start a new version:

```shell
npm version patch && npm run build
```

To start the LiveReload version you can use:

```shell
npm run start
```
