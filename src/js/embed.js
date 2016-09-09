import iframeMessenger from 'guardian/iframe-messenger'
import embedHTML from './text/embed.html!text'


var windowObjectReference = null;
var src = null;

window.init = function init(el, config) {
    iframeMessenger.enableAutoResize();

     /* for instance http://videoplayback.parliamentlive.tv/Player/Index/3cfdcccc-7e7e-457a-87c7-5ed85d37fd8f?audioOnly=False&autoStart=True&statsEnabled=False*/
    src = decodeURI(getParameter("src"));

    var image = "default.png"
    if (src.startsWith("http://videoplayback.parliamentlive.tv")) {
        image = "parliamentlive.jpg"
    }

    el.innerHTML = embedHTML.replace(/%assetPath%/g, config.assetPath).replace(/%image%/g, image);


    var link = document.getElementById("interactive-popup-link");
    // TODO Add detection of safari and then update the target to blank

    link.href = src;

};


// TODO detect the viewport to set the size of the popup dynamically

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