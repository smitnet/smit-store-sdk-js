class QueryHelper {
  getQueryParameter(name, url) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const rs = '[\\?&]' + name + '=([^&#]*)';
    const re = new RegExp(rs);
    const r = re.exec(url);
    return r == null ? null : r[1];
  }
}

export default QueryHelper;
