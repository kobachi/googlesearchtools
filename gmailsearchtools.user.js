// ==UserScript==
// @name        Google Search Tools
// @namespace   kobachi
// @include     https://www.google.co*/search?*
// @include     http://www.google.co*/search?*
// @version     0.1
// ==/UserScript==

(function(){
	function addCSSRules(){
		var s = document.createElement("style");
		s.innerHTML = [
			"em { color: #EE0000 !important; } "
		].join("\n");
		document.querySelector("head").appendChild(s);
	}

	function removeInjection(){
		Array.forEach(document.querySelectorAll("a[href^=http]"), function(a){
			a.onclick = function(){};
			a.removeAttribute("onclick", "");
			a.onmousedown = function(){};
			a.removeAttribute("onmousedown", "");
		});
	}

	document.addEventListener("DOMContentLoaded", function(){
		addCSSRules();
		removeInjection();
		document.body.addEventListener("DOMSubtreeModified", removeInjection);
	});
})();
