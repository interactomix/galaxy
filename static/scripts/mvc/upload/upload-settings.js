define(["utils/utils"],function(){return Backbone.View.extend({options:{class_check:"upload-icon-button fa fa-check-square-o",class_uncheck:"upload-icon-button fa fa-square-o"},initialize:function(a){this.app=a;var b=this;this.setElement(this._template()),this.model=this.app.model,this.$("#upload-space-to-tab").on("click",function(){b._switchState("#upload-space-to-tab","space_to_tab")}),this.$("#upload-to-posix-lines").on("click",function(){b._switchState("#upload-to-posix-lines","to_posix_lines")}),this.render()},render:function(){this._renderState("#upload-space-to-tab",this.model.get("space_to_tab")),this._renderState("#upload-to-posix-lines",this.model.get("to_posix_lines"));var a=this.$("#upload-settings-cover");this.model.get("enabled")?a.hide():a.show()},_switchState:function(a,b){if(this.model.get("enabled")){var c=!this.model.get(b);this.model.set(b,c),this._renderState(a,c)}},_renderState:function(a,b){var c=this.$(a);c.removeClass(),c.addClass(b?this.options.class_check:this.options.class_uncheck)},_template:function(){return'<div class="upload-settings" style="position: relative;"><div id="upload-settings-cover" class="upload-settings-cover"/><table class="ui-table-striped"><tbody><tr><td><div id="upload-space-to-tab"/></td><td>Convert spaces to tabs</td></tr><tr><td><div id="upload-to-posix-lines"/></td><td>Use POSIX standard</td></tr></tbody></table></div>'}})});
//# sourceMappingURL=../../../maps/mvc/upload/upload-settings.js.map