export default (url, callback) => {
  const callbackName = '_callback_'.concat(Math.round(100000 * Math.random()));
  const script = document.createElement('script');
  window[callbackName] = (data) => {
    delete window[callbackName];
    document.body.removeChild(script);
    callback(data);
  };
  script.src = url.concat(url.indexOf('?') >= 0 ? '&' : '?').concat('callback=').concat(callbackName).concat('&format=jsonp');
  script.type = 'javascript';
  document.body.appendChild(script);
  return script.src;
};
