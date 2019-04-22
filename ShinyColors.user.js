// ==UserScript==
// @name         偶像大师ShinyColors汉化
// @namespace    https://github.com/biuuu/ShinyColors
// @version      0.0.1
// @description  none
// @author       biuuu
// @match        https://shinycolors.enza.fun/*
// @run-at       document-end
// @updateURL    https://biuuu.github.io/ShinyColors/ShinyColors.user.js
// @supportURL   https://github.com/biuuu/ShinyColors/issues
// ==/UserScript==
(function () {
  'use strict';

  var i = document.createElement('iframe');
  i.style.display = 'none';
  document.body.appendChild(i);
  window.console = i.contentWindow.console;

  var main = function main() {
    var phrases;
    var loadScenario;

    try {
      var modulePhrases = primJsp([], [], [4]);
      var moduleLoadScenario = primJsp([], [], [119]);
      phrases = modulePhrases.default._polyglot.phrases;
      loadScenario = moduleLoadScenario.default.load;

      if (!moduleLoadScenario.default['setErrorEvent'] || !moduleLoadScenario.default['_errorEvent'] || !moduleLoadScenario.default['_handleError']) {
        throw new Error('模块不匹配');
      }
    } catch (e) {
      console.error(e);
    }

    if (phrases) {
      for (var key in phrases) {
        phrases[key] = phrases[key].replace('アイドル', '爱抖露');
      }
    }
  };

  window.addEventListener('load', main);

}());
