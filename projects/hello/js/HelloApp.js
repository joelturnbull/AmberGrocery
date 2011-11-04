smalltalk.addPackage('HelloApp', []);
smalltalk.addClass('Hello', smalltalk.Object, [], 'HelloApp');
smalltalk.addMethod(
unescape('_begin'),
smalltalk.method({
selector: unescape('begin'),
category: 'not yet classified',
fn: function () {
var self=this;
var msg=nil;
var button=nil;
var result=nil;
msg=unescape("Hello%20worldz%21");
result=smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [unescape("http%3A//127.0.0.1%3A5984/mycouchshop/_design/sandwiches/_view/sandwiches"), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"])])]);
button=smalltalk.send(unescape("%23sayHello"), "_asJQuery", []);
smalltalk.send(button, "_click_", [(function(){return smalltalk.send(button, "_after_", [smalltalk.send(smalltalk.send(unescape("%3Cp%3E"), "__comma", [smalltalk.send(result, "_name", [])]), "__comma", [unescape("%3C/p%3E")])]);})]);
return self;},
args: [],
source: unescape('begin%0A%22Makes%20me%20say%20hello%20to%20the%20user.%22%0A%0A%7C%20msg%20button%20result%20%7C%20%0Amsg%20%3A%3D%20%27Hello%20worldz%21%27.%0Aresult%20%3A%3D%20jQuery%0A%20%20%20%20%20%20ajax%3A%20%27http%3A//127.0.0.1%3A5984/mycouchshop/_design/sandwiches/_view/sandwiches%27%0A%20%20%20%20%20%20options%3A%20%23%7B%0A%20%20%20%20%20%20%20%20%27type%27%20-%3E%20%27GET%27.%0A%09%27dataType%27%20-%3E%27jsonp%27%0A%20%20%20%20%20%20%7D.%0Abutton%20%3A%3D%20%27%23sayHello%27%20asJQuery.%0Abutton%20click%3A%20%5Bbutton%20after%3A%20%27%3Cp%3E%27%20%2C%20result%20name%20%2C%20%27%3C/p%3E%27%5D.'),
messageSends: ["ajax:options:", unescape("-%3E"), "asJQuery", "click:", "after:", unescape("%2C"), "name"],
referencedClasses: []
}),
smalltalk.Hello);

smalltalk.addMethod(
unescape('_oldbegin'),
smalltalk.method({
selector: unescape('oldbegin'),
category: 'not yet classified',
fn: function () {
var self=this;
var msg=nil;
var button=nil;
msg=unescape("Hello%20worldz%21");
button=smalltalk.send(unescape("%23sayHello"), "_asJQuery", []);
smalltalk.send(button, "_click_", [(function(){return smalltalk.send(button, "_after_", [smalltalk.send(smalltalk.send(unescape("%3Cp%3E"), "__comma", [msg]), "__comma", [unescape("%3C/p%3E")])]);})]);
return self;},
args: [],
source: unescape('oldbegin%0A%22Makes%20me%20say%20hello%20to%20the%20user.%22%0A%0A%7C%20msg%20button%20%7C%20%0Amsg%20%3A%3D%20%27Hello%20worldz%21%27.%0Abutton%20%3A%3D%20%27%23sayHello%27%20asJQuery.%0Abutton%20click%3A%20%5Bbutton%20after%3A%20%27%3Cp%3E%27%20%2C%20msg%20%2C%20%27%3C/p%3E%27%5D.'),
messageSends: ["asJQuery", "click:", "after:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.Hello);



