/*
Copyright 2013, KISSY UI Library v1.40dev
MIT Licensed
build time: May 30 01:37
*/
KISSY.add("editor/plugin/indent",function(c,d,e){function b(){}c.augment(b,{pluginRenderUI:function(a){e.init(a);a.addButton("indent",{tooltip:"\u589e\u52a0\u7f29\u8fdb\u91cf ",listeners:{click:function(){a.execCommand("indent");a.focus()}},mode:d.Mode.WYSIWYG_MODE})}});return b},{requires:["editor","./indent/cmd"]});