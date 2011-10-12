/*
 Copyright (c) 2010, Yahoo! Inc. All rights reserved.
 Code licensed under the BSD License:
 http://developer.yahoo.com/yui/license.html
 version: 3.3.0
 build: 3167
 */
YUI.add("widget-uievents",function(g){var f="boundingBox",e=g.Widget,d="render",a=g.Lang,c=":",b=g.Widget._uievts=g.Widget._uievts||{};g.mix(e.prototype,{_destroyUIEvents:function(){var h=g.stamp(this,true);g.each(b,function(j,i){if(j.instances[h]){delete j.instances[h];if(g.Object.isEmpty(j.instances)){j.handle.detach();if(b[i]){delete b[i];}}}});},UI_EVENTS:g.Node.DOM_EVENTS,_getUIEventNode:function(){return this.get(f);},_createUIEvent:function(i){var l=this._getUIEventNode(),h=(g.stamp(l)+i),k=b[h],j;if(!k){j=l.delegate(i,function(m){var n=e.getByNode(this);n.fire(m.type,{domEvent:m});},"."+g.Widget.getClassName());b[h]=k={instances:{},handle:j};}k.instances[g.stamp(this)]=1;},_getUIEvent:function(j){if(a.isString(j)){var k=this.parseType(j)[1],h,i;if(k){h=k.indexOf(c);if(h>-1){k=k.substring(h+c.length);}if(this.UI_EVENTS[k]){i=k;}}return i;}},_initUIEvent:function(i){var j=this._getUIEvent(i),h=this._uiEvtsInitQueue||{};if(j&&!h[j]){this._uiEvtsInitQueue=h[j]=1;this.after(d,function(){this._createUIEvent(j);delete this._uiEvtsInitQueue[j];});}},on:function(h){this._initUIEvent(h);return e.superclass.on.apply(this,arguments);},publish:function(i,h){var j=this._getUIEvent(i);if(j&&h&&h.defaultFn){this._initUIEvent(j);}return e.superclass.publish.apply(this,arguments);}},true);},"3.3.0",{requires:["widget-base","node-event-delegate"]});
