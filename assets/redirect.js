(function () {
  "use strict";

  var currentPath = window.location.pathname;

  var isHome =
    currentPath === "/" ||
    currentPath === "/index.html" ||
    currentPath === "/index.php" ||
    currentPath === "";

  if (!isHome) {
    var homeUrl = window.location.protocol + "//" + window.location.host + "/";

    if (window.location.replace) {
      window.location.replace(homeUrl);
    } else {
      window.location.href = homeUrl;
    }
  }
})();
