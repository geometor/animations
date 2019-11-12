// https://stackoverflow.com/questions/23218174/how-do-i-save-export-an-svg-file-after-creating-an-svg-with-d3-js-ie-safari-an

export function saveSvg(svgEl, name) {

    var newSvg = svgEl.cloneNode(true);

    var style = document.createElement("style");
    
    // WebKit hack :(
  	style.appendChild(document.createTextNode(""));
    newSvg.appendChild(style);

    let ruleList = document.styleSheets[1].cssRules;

    for (let rule of ruleList) {
      // console.log(rule.selectorText);
      style.innerHTML += rule.cssText;
    }


    newSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    var svgData = newSvg.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';

    var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);

    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}




function dumpComputedStyles(id) {
  var styleList = [
    "visibility",
    "opacity",
    "stroke",
    "strokeWidth",
    "fill",
    "fillOpacity"
  ]

  var element = $(id).get(0);

  var out = "";
  var elementStyle = element.style;
  var computedStyle = window.getComputedStyle(element, null);

  for (prop in styleList) {
    var propValue = computedStyle.getPropertyValue(styleList[prop]);
    // out += "  " + styleList[prop] + " = '" + propValue + "'\n";
    out += "  " + styleList[prop] + " = '" + getStyle(element, styleList[prop]) + "'\n";
  }

  // console.log("fill: " + document.defaultView.getComputedStyle(element, null).getPropertyValue("fill"));


  console.log(id + ": " + out)

  console.log("stroke: " + element.style.stroke)

  var len = 0; //cs.length;


  // console.log(style+" : "+ cs.getPropertyValue(style));
  //
  // for (var i=0;i<len;i++) {
  //
  //   var style = cs[i];
  //   console.log(style+" : "+cs.getPropertyValue(style));
  // }
  //
}

function getStyle(oElm, strCssRule) {
  var strValue = "";
  if (document.defaultView && document.defaultView.getComputedStyle) {
    strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
  } else if (oElm.currentStyle) {
    strCssRule = strCssRule.replace(/\-(\w)/g, function(strMatch, p1) {
      return p1.toUpperCase();
    });
    strValue = oElm.currentStyle[strCssRule];
  }
  return strValue;
}
