window.onload = function () {
  var lang_select = document.getElementById('lang_select');
  lang_select.onchange = function () {
    location.href = {
      'zh-cn': 'https://tiansh.github.io/yawf/zh-cn.html',
      'zh-tw': 'https://tiansh.github.io/yawf/zh-tw.html',
      'zh-hk': 'https://tiansh.github.io/yawf/zh-hk.html',
      'en': 'https://tiansh.github.io/yawf/en.html',
    }[lang_select.value] || '#';
  };
  var ua = navigator.userAgent;
  if (!ua.match(/^Mozilla\/5.0 \((.+); rv:([\d.]+)\) Gecko\/([\d]{8}) Firefox\/([\d.]+)$/))
    document.getElementById('checkFx').style.display = 'block';
};
