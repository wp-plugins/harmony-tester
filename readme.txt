=== Harmony Tester ===
Contributors: neverweep
Tags: filter,replace,harmony,keyword,obfuscate,和谐,敏感词,过滤,混淆,替换
Requires at least: 3.0
Tested up to: 3.5
Stable tag: 1.30

Harmony Tester is for highlighting and replacing keywords (for mainland China). 和谐测试器是一个用来高亮和替换敏感词汇的插件

== Description ==

= 和谐测试器 =
**内置敏感词汇库**

三个使用BASE64加密的敏感词汇库和一个自定义敏感词汇库，敏感词汇库收集自网络，严禁使用敏感词汇库从事违法活动！

**编辑界面高亮敏感词汇**

用户可以在编辑文档时对敏感词汇进行高亮，不同的敏感词汇会被标记上不同的颜色

**自动替换文章和评论内容**

* 在文章、评论更新时替换：节省资源
* 在文章、评论被请求显示时替换：不改变原始内容

**使用特定词汇语替换**

* 将敏感词汇替换为特定字符，或者直接删除所有敏感词汇
* 将敏感词汇混淆，如将“你好世界”混淆为“你囧好囧世囧界”
* 自定义词库支持正则表达式替换
* 可以指定某个敏感词替换为特定单词，优先权高于全局设定

= Harmony Tester =
**Built-in Keywords libraries**

3 built-in base64-encoded keywords libraries for mainland China and 1 custom keywords library. Keywords are collected in web.

**Highlight Keywords In Edit Screen**

User can check the content in edit screen. Keywords will be highlighted in different colors.

**Replace Keywords Automatically**

* Replace keywords when a post, page or comment is updated.
* Replace keywords when a post, page or comment is requested to display.

**Replace Keywords By A Certain Pattern**

* Replace keywords by a certain pattern or delete them in the content.
* Obfuscate keywords. eg. "Hello" => "H\*e\*l\*l\*o"
* Regular expression is supported in custom keyword library.
* You can identify a word you want to replace every single keyword in custom keyword library with.


> Blog: [http://xiaoxia.de/](http://xiaoxia.de/)

> Logs: [http://xiaoxia.de/2012/12/harmony-tester/](http://xiaoxia.de/2012/12/harmony-tester/)

== Installation ==

= 中文 =
1. 上传 `harmony-tester` 到 `/wp-content/plugins/` 目录
1. 在WordPress插件菜单激活
1. 对插件进行设置
1. 编辑文章时，点击上方“显示选项”，选择和谐测试器，然后点击“检查”

= English =
1. Upload `harmony-tester` directory to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Set up Harmony Tester
1. Edit screen: Click "Display Settings" and check "Harmony Tester", then click "Test"

= library-convertor.html =
这个工具可以将敏感词汇库和文本之间互相转换

This is a tool to convert Keywords Library between BASE64 and TEXT

== Frequently Asked Questions ==

Nothing

== Screenshots ==

1. Edit
2. Option

== Changelog ==


= 1.30 =
New: Uninstall function

Update: Keywords libraries updated. Replace post title, comment author name and wp_title.

Fix: Some bugs. Regular Expression.

= 1.20 =
New: Regular Expression.

= 1.10 =
New: Obfuscate keywords.

Update: Keywords libraries updated.

= 1.00 =
First Version.

== Upgrade Notice == 

Nothing