import iframeMessenger from 'guardian/iframe-messenger'
import embedHTML from './text/embed.html!text'


var windowObjectReference = null;
var src = null;

window.init = function init(el, config) {
    iframeMessenger.enableAutoResize();

     /* for instance http://videoplayback.parliamentlive.tv/Player/Index/3cfdcccc-7e7e-457a-87c7-5ed85d37fd8f */
    src = decodeURI(getParameter("src"));

    var image = "default.png";

    /* if you want to add more specific images for a specific target, do it here*/
    if (src.startsWith("http://videoplayback.parliamentlive.tv")) {
        image = "parliamentlive.jpg";
        
        /* we automatically start the livestream */
        if (src.indexOf('?') > -1) {
            src = src + "&";
        } else {
            src = src + "?";
        }
        src = src + "audioOnly=False&autoStart=True&statsEnabled=False";
    }

    el.innerHTML = embedHTML.replace(/%assetPath%/g, config.assetPath).replace(/%image%/g, image);


    var link = document.getElementById("interactive-popup-link");
    
    /* 
       On iOS, webview or standalone browser, we open a new tab rather than a popup window as popup
       will fail silently in webview.
        
       See https://stackoverflow.com/questions/9038625/detect-if-device-is-ios for iOs detection logic.
    */
    var iOs = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (iOs) {
        link.target="_blank";
    }

    link.href = src;

};
/*
  See Best Practices section on https://developer.mozilla.org/en-US/docs/Web/API/Window/open 
*/
window.popup = function popup(strUrl, strWindowName) {
    if(windowObjectReference == null || windowObjectReference.closed) {
        windowObjectReference = window.open(
            strUrl, strWindowName,'toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes,width=600,height=400'
        );
    } else {
        windowObjectReference.focus();
    }
}

function getParameter(paramName) {
  var searchString = window.location.search.substring(1),
      i, val, params = searchString.split("&");

  for (i=0;i<params.length;i++) {
    val = params[i].split("=");
    if (val[0] == paramName) {
      return val[1];
    }
  }
  return null;
}