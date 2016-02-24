define(["libs/underscore","libs/backbone","mvc/base-mvc","mvc/user/user-model","utils/metrics-logger","utils/add-logging","utils/localization"],function(a,b,c,d,e,f,g){function h(a,b){var c=this;return c._init(a||{},b||{})}f(h,"GalaxyApp");var i="galaxy:debug",j=i+":namespaces",k=!1;try{k="true"==localStorage.getItem(i)}catch(l){console.log(g("localStorage not available for debug flag retrieval"))}return h.prototype._init=function(c,d){var e=this;return a.extend(e,b.Events),k&&(e.logger=console,console.debug("debugging galaxy:","options:",c,"bootstrapped:",d)),e._processOptions(c),e.root=c.root||"/",e._initConfig(c.config||{}),e._patchGalaxy(window.Galaxy),e._initLogger(e.options.loggerOptions||{}),e.debug("GalaxyApp.options: ",e.options),e.debug("GalaxyApp.config: ",e.config),e.debug("GalaxyApp.logger: ",e.logger),e._initLocale(),e.debug("GalaxyApp.localize: ",e.localize),e.config=c.config||{},e.debug("GalaxyApp.config: ",e.config),e._initUser(c.user||{}),e.debug("GalaxyApp.user: ",e.user),e._setUpListeners(),e.trigger("ready",e),e},h.prototype.defaultOptions={patchExisting:!0,root:"/"},h.prototype._processOptions=function(a){var b=this,c=b.defaultOptions;b.options={};for(var d in c)c.hasOwnProperty(d)&&(b.options[d]=a.hasOwnProperty(d)?a[d]:c[d]);return b},h.prototype._initConfig=function(a){var b=this;return b.config=a,b.config.debug=k||b.config.debug,b},h.prototype._patchGalaxy=function(a){var b=this;if(b.options.patchExisting&&a)for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])},h.prototype._initLogger=function(a){var b=this;if(b.config.debug){a.consoleLogger=a.consoleLogger||console,a.consoleLevel=a.consoleLevel||e.MetricsLogger.ALL;try{a.consoleNamespaceWhitelist=localStorage.getItem(j).split(",")}catch(d){}}return b.logger=new e.MetricsLogger(a),b.emit={},["log","debug","info","warn","error","metric"].map(function(a){b.emit[a]=function(){b.logger.emit(a,arguments[0],Array.prototype.slice.call(arguments,1))}}),b.config.debug&&(c.LoggableMixin.logger=b.logger),b},h.prototype._initLocale=function(a){var b=this;return b.debug("_initLocale:",a),b.localize=g,window._l=b.localize,b},h.prototype._initUser=function(a){var b=this;return b.debug("_initUser:",a),b.user=new d.User(a),b.user.logger=b.logger,b},h.prototype._setUpListeners=function(){var a=this;return a.lastAjax={},$(document).bind("ajaxSend",function(b,c,d){var e=d.data;try{e=JSON.parse(e)}catch(f){}a.lastAjax={url:location.href.slice(0,-1)+d.url,data:e}}),a},h.prototype.debugging=function(a){var b=this;try{if(void 0===a)return"true"===localStorage.getItem(i);if(a)return localStorage.setItem(i,!0),!0;localStorage.removeItem(i),b.debuggingNamespaces(null)}catch(c){console.log(g("localStorage not available for debug flag retrieval"))}return!1},h.prototype.debuggingNamespaces=function(a){var b=this;try{if(void 0===a){var c=localStorage.getItem(j);return"string"==typeof c?c.split(","):[]}null===a?localStorage.removeItem(j):localStorage.setItem(j,a);var d=b.debuggingNamespaces();return b.logger&&(b.logger.options.consoleNamespaceWhitelist=d),d}catch(e){console.log(g("localStorage not available for debug namespace retrieval"))}},h.prototype.toString=function(){var a=this.user?this.user.get("email")||"(anonymous)":"uninitialized";return"GalaxyApp("+a+")"},{GalaxyApp:h}});
//# sourceMappingURL=../maps/galaxy.js.map