smalltalk.addPackage('HelloApp', []);
smalltalk.addClass('Hello', smalltalk.Object, [], 'HelloApp');
smalltalk.addMethod(
'_begin',
smalltalk.method({
selector: 'begin',
fn: function () {
var self=this;
var msg=nil;
var button=nil;
var result=nil;
msg=unescape("Hello%20worldz%21");
result=smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [unescape("http%3A//127.0.0.1%3A5984/mycouchshop/_design/sandwiches/_view/sandwiches"), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"])])]);
button=smalltalk.send(unescape("%23sayHello"), "_asJQuery", []);
smalltalk.send(button, "_click_", [(function(){return smalltalk.send(button, "_after_", [smalltalk.send(smalltalk.send(unescape("%3Cp%3E"), "__comma", [smalltalk.send(result, "_name", [])]), "__comma", [unescape("%3C/p%3E")])]);})]);
return self;}
}),
smalltalk.Hello);

smalltalk.addMethod(
'_oldbegin',
smalltalk.method({
selector: 'oldbegin',
fn: function () {
var self=this;
var msg=nil;
var button=nil;
msg=unescape("Hello%20worldz%21");
button=smalltalk.send(unescape("%23sayHello"), "_asJQuery", []);
smalltalk.send(button, "_click_", [(function(){return smalltalk.send(button, "_after_", [smalltalk.send(smalltalk.send(unescape("%3Cp%3E"), "__comma", [msg]), "__comma", [unescape("%3C/p%3E")])]);})]);
return self;}
}),
smalltalk.Hello);



