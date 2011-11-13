smalltalk.addClass('SmackboneWelcome', smalltalk.SmackboneView, ['numRenders'], 'Smackbone-Examples');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_h1_", [unescape("Welcome%20to%20Smackbone%21")]);
smalltalk.send(html, "_p_", [smalltalk.send("This is a Smackbone view. It is similar to an Amber Widget in that you define its appearance by implementing renderOn: in your widget subclass. ", "__comma", [unescape("A%20SmackboneView%20can%20attach%20itself%20to%20a%20DOM%20element%2C%20and%20then%20be%20told%20to%20render%20whenever%20you%20want%20to%20update%20the%20user%27s%20view.")])]);
smalltalk.send(html, "_p_", ["Smackbone also provides a simple routing system so you can build apps that transition through different sections via url clicks"]);
smalltalk.send(html, "_p_", [unescape("Amber%20and%20Smackbone%20make%20it%20really%20easy%20to%20write%20automated%20tests%20for%20your%20Javascript%20code%2C%20whether%20it%27s%20models%2C%20routers%2C%20or%20views.")]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(){smalltalk.send(html, "_with_", ["Start the "]);(function($rec){smalltalk.send($rec, "_href_", [unescape("%23tutorial")]);return smalltalk.send($rec, "_with_", ["tutorial"]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [" or check out the "]);(function($rec){smalltalk.send($rec, "_href_", [unescape("%23examples")]);return smalltalk.send($rec, "_with_", ["examples"]);})(smalltalk.send(html, "_a", []));return smalltalk.send(html, "_with_", ["."]);})]);
return self;}
}),
smalltalk.SmackboneWelcome);



smalltalk.addClass('SmackboneTutorial', smalltalk.SmackboneView, ['page'], 'Smackbone-Examples');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_h1_", ["Smackbone Tutorial"]);
smalltalk.send(self, "_perform_withArguments_", [smalltalk.send(smalltalk.send("renderPage", "__comma", [smalltalk.send(self['@page'], "_asString", [])]), "__comma", ["On:"]), [html]]);
smalltalk.send(self, "_renderNavLinksOn_", [html]);
return self;}
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
'_renderPage1On_',
smalltalk.method({
selector: 'renderPage1On:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", [smalltalk.send("This is a Smackbone view. It is similar to an Amber Widget in that you define its appearance by implementing renderOn: in your widget subclass. ", "__comma", [unescape("A%20SmackboneView%20can%20attach%20itself%20to%20a%20DOM%20element%2C%20and%20then%20be%20told%20to%20render%20whenever%20you%20want%20to%20update%20the%20user%27s%20view.")])]);
return self;}
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.SmackboneView);
self['@page']=(1);
return self;}
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
'_hasMorePages',
smalltalk.method({
selector: 'hasMorePages',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicAt_", [smalltalk.send(smalltalk.send("_renderPage", "__comma", [smalltalk.send(((($receiver = self['@page']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])), "_asString", [])]), "__comma", ["On_"])]), "_notNil", []);
return self;}
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
'_renderNavLinksOn_',
smalltalk.method({
selector: 'renderNavLinksOn:',
fn: function (html) {
var self=this;
((($receiver = smalltalk.send(self, "_hasPrevPages", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23tutorial-previous")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_previous", []);})]);return smalltalk.send($rec, "_with_", ["previous"]);})(smalltalk.send(html, "_a", []));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23tutorial-previous")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_previous", []);})]);return smalltalk.send($rec, "_with_", ["previous"]);})(smalltalk.send(html, "_a", []));})]));
smalltalk.send(html, "_with_", [" "]);
((($receiver = smalltalk.send(self, "_hasMorePages", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23tutorial-next")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_next", []);})]);return smalltalk.send($rec, "_with_", ["next"]);})(smalltalk.send(html, "_a", []));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23tutorial-next")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_next", []);})]);return smalltalk.send($rec, "_with_", ["next"]);})(smalltalk.send(html, "_a", []));})]));
return self;}
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
'_hasPrevPages',
smalltalk.method({
selector: 'hasPrevPages',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicAt_", [smalltalk.send(smalltalk.send("_renderPage", "__comma", [smalltalk.send(((($receiver = self['@page']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), "_asString", [])]), "__comma", ["On_"])]), "_notNil", []);
return self;}
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
'_renderPage2On_',
smalltalk.method({
selector: 'renderPage2On:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", ["Smackbone views are nifty things. They can show you the code that builds the page."]);
return self;}
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
'_next',
smalltalk.method({
selector: 'next',
fn: function () {
var self=this;
((($receiver = smalltalk.send(self, "_hasMorePages", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@page']=((($receiver = self['@page']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return self['@page']=((($receiver = self['@page']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]));
smalltalk.send(self, "_render", []);
return self;}
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
'_previous',
smalltalk.method({
selector: 'previous',
fn: function () {
var self=this;
smalltalk.send((smalltalk.Transcript || Transcript), "_show_", [unescape("called%20previous%21")]);
((($receiver = smalltalk.send(self, "_hasPrevPages", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@page']=((($receiver = self['@page']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return self['@page']=((($receiver = self['@page']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]));})]));
smalltalk.send(self, "_render", []);
return self;}
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
'_renderPage3On_',
smalltalk.method({
selector: 'renderPage3On:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", [unescape("Here%27s%20how%20I%20built%20the%20previous%20page%21")]);
smalltalk.send(smalltalk.send(self, "_el", []), "_append_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.SmackboneCodeView || SmackboneCodeView), "_onClass_method_", [(smalltalk.SmackboneTutorial || SmackboneTutorial), "renderPage2On:"]), "_render", []), "_el", [])]);
return self;}
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
'_renderPage4On_',
smalltalk.method({
selector: 'renderPage4On:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", [unescape("Here%27s%20how%20you%20can%20build%20the%20welcome%20page")]);
smalltalk.send(smalltalk.send(self, "_el", []), "_append_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.SmackboneCodeView || SmackboneCodeView), "_onClass_method_", [(smalltalk.SmackboneWelcome || SmackboneWelcome), "renderOn:"]), "_render", []), "_el", [])]);
return self;}
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
'_renderPage5On_',
smalltalk.method({
selector: 'renderPage5On:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", ["Amber lets you build HTML views programmatically. You can create links that execute a block of code when clicked. This block has access to javascript objects like window and document"]);
smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [smalltalk.send(smalltalk.send(html, "_pre", []), "_with_", [unescape("html%20a%20href%3A%20%27%23%27%3B%20onClick%3A%20%5B%20window%20alert%3A%20%27Smalltalk%20in%20the%20browser.%20Cool%21%27%5D%3B%20with%3A%20%27Click%20Here...%27%20.")])]);
smalltalk.send(html, "_p_", [(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [unescape("Smalltalk%20in%20the%20browser.%20Cool%21")]);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", ["Click Here..."]);})(smalltalk.send(html, "_a", []))]);
return self;}
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
'_renderPage6On_',
smalltalk.method({
selector: 'renderPage6On:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", [smalltalk.send(unescape("In%20addition%20to%20rendering%20views%20as%20a%20result%20of%20an%20onClick%3A%20handler%2C%20you%20can%20use%20routers%20to%20define%20a%20set%20of%20behaviors%20to%20perform%20when%20a%20user%20clicks%20a%20link.%20"), "__comma", [unescape("Your%20router%20subclass%20defines%20%23routes%20and%20maps%20a%20route%20to%20a%20method.")])]);
smalltalk.send(self['@el'], "_append_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.SmackboneCodeView || SmackboneCodeView), "_onClass_method_", [(smalltalk.SmackboneWelcomeRouter || SmackboneWelcomeRouter), "routes"]), "_render", []), "_el", [])]);
smalltalk.send(html, "_p_", [unescape("This%20sets%20up%20a%20route%20so%20that%20calling%20SmackboneHistory%20navigate%3A%20%27%27%20calls%20the%20welcome%20method%2C%20which%20tells%20a%20SmackboneWelcome%20view%20to%20render%20its%20nice%20welcome%20message%3A")]);
smalltalk.send(self['@el'], "_append_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.SmackboneCodeView || SmackboneCodeView), "_onClass_method_", [(smalltalk.SmackboneWelcomeRouter || SmackboneWelcomeRouter), "welcome"]), "_render", []), "_el", [])]);
smalltalk.send(self['@el'], "_append_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.SmackboneCodeView || SmackboneCodeView), "_onClass_method_", [(smalltalk.SmackboneWelcome || SmackboneWelcome), "renderOn:"]), "_render", []), "_el", [])]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(){smalltalk.send(html, "_with_", [unescape("That%27s%20it%20for%20now.%20You%20can%20head%20back%20to%20the%20")]);(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", ["welcome page"]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [" or take a look at some of the "]);(function($rec){smalltalk.send($rec, "_href_", [unescape("%23examples")]);return smalltalk.send($rec, "_with_", ["examples"]);})(smalltalk.send(html, "_a", []));return smalltalk.send(html, "_with_", [unescape(".%20Thanks%20for%20checking%20out%20Amber%20Smalltalk%20and%20Smackbone%21")]);})]);
return self;}
}),
smalltalk.SmackboneTutorial);



smalltalk.addClass('SmackboneWelcomeRouter', smalltalk.SmackboneRouter, ['welcome', 'tutorial', 'examples', 'counter', 'hello'], 'Smackbone-Examples');
smalltalk.addMethod(
'_routes',
smalltalk.method({
selector: 'routes',
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["", "welcome"]);smalltalk.send($rec, "_at_put_", ["tutorial", "tutorial"]);smalltalk.send($rec, "_at_put_", ["examples", "examples"]);smalltalk.send($rec, "_at_put_", ["counter", "counter"]);smalltalk.send($rec, "_at_put_", ["hello", "hello"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
'_domRoot',
smalltalk.method({
selector: 'domRoot',
fn: function () {
var self=this;
return smalltalk.send(unescape("%23smackbone-welcome"), "_asJQuery", []);
return self;}
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
'_welcome',
smalltalk.method({
selector: 'welcome',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_domRoot", []), "_empty", []), "_append_", [smalltalk.send(smalltalk.send(self['@welcome'], "_render", []), "_el", [])]);
return self;}
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
'_tutorial',
smalltalk.method({
selector: 'tutorial',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_domRoot", []), "_empty", []), "_append_", [smalltalk.send(smalltalk.send(self['@tutorial'], "_render", []), "_el", [])]);
return self;}
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function () {
var self=this;
self['@welcome']=smalltalk.send((smalltalk.SmackboneWelcome || SmackboneWelcome), "_new", []);
self['@tutorial']=smalltalk.send((smalltalk.SmackboneTutorial || SmackboneTutorial), "_new", []);
self['@examples']=smalltalk.send((smalltalk.SmackboneExampleListView || SmackboneExampleListView), "_new", []);
self['@counter']=smalltalk.send((smalltalk.SmackboneCounter || SmackboneCounter), "_new", []);
self['@hello']=smalltalk.send((smalltalk.SmackboneHello || SmackboneHello), "_new", []);
return self;}
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
'_tutorialNext',
smalltalk.method({
selector: 'tutorialNext',
fn: function () {
var self=this;
smalltalk.send(self['@tutorial'], "_next", []);
return self;}
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
'_tutorialPrevious',
smalltalk.method({
selector: 'tutorialPrevious',
fn: function () {
var self=this;
smalltalk.send(self['@tutorial'], "_previous", []);
return self;}
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
'_examples',
smalltalk.method({
selector: 'examples',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_domRoot", []), "_empty", []), "_append_", [smalltalk.send(smalltalk.send(self['@examples'], "_render", []), "_el", [])]);
return self;}
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
'_counter',
smalltalk.method({
selector: 'counter',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_domRoot", []), "_empty", []), "_append_", [smalltalk.send(smalltalk.send(self['@counter'], "_render", []), "_el", [])]);
return self;}
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
'_hello',
smalltalk.method({
selector: 'hello',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_domRoot", []), "_empty", []), "_append_", [smalltalk.send(smalltalk.send(self['@hello'], "_render", []), "_el", [])]);
return self;}
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
'_counterView',
smalltalk.method({
selector: 'counterView',
fn: function (){
var self=this;
return self['@counter'];
return self;}
}),
smalltalk.SmackboneWelcomeRouter);



smalltalk.addClass('SmackboneCodeView', smalltalk.SmackboneView, ['klass', 'methodName'], 'Smackbone-Examples');
smalltalk.addMethod(
'_klass_',
smalltalk.method({
selector: 'klass:',
fn: function (aClass) {
var self=this;
self['@klass']=aClass;
return self;}
}),
smalltalk.SmackboneCodeView);

smalltalk.addMethod(
'_methodName_',
smalltalk.method({
selector: 'methodName:',
fn: function (aString) {
var self=this;
self['@methodName']=aString;
return self;}
}),
smalltalk.SmackboneCodeView);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_h2_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@klass'], "_asString", []), "__comma", [unescape("%23")]), "__comma", [self['@methodName']])]);
smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [smalltalk.send(smalltalk.send(html, "_pre", []), "_with_", [smalltalk.send(smalltalk.send(self['@klass'], "_methodAt_", [self['@methodName']]), "_source", [])])]);
return self;}
}),
smalltalk.SmackboneCodeView);


smalltalk.addMethod(
'_onClass_method_',
smalltalk.method({
selector: 'onClass:method:',
fn: function (klass, methodName) {
var self=this;
return (function($rec){smalltalk.send($rec, "_klass_", [klass]);smalltalk.send($rec, "_methodName_", [methodName]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.SmackboneCodeView.klass);


smalltalk.addClass('SmackboneExampleListView', smalltalk.SmackboneView, [], 'Smackbone-Examples');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", ["Here are a few Smackbone examples to help get you started:"]);
smalltalk.send(html, "_ul_", [(function(){smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [unescape("%23counter")]);return smalltalk.send($rec, "_with_", ["SmackboneCounter"]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [unescape("%20-%20it%20has%20")]);return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [(smalltalk.SmackboneCounterTest || SmackboneCounterTest)]);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", [unescape("tests%21")]);})(smalltalk.send(html, "_a", []));})]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23hello")]);return smalltalk.send($rec, "_with_", ["SmackboneHello"]);})(smalltalk.send(html, "_a", []));})]);})]);
smalltalk.send(html, "_p_", [(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", ["Go back home..."]);})(smalltalk.send(html, "_a", []))]);
return self;}
}),
smalltalk.SmackboneExampleListView);



smalltalk.addClass('SmackboneCounter', smalltalk.SmackboneView, ['count'], 'Smackbone-Examples');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.SmackboneView);
self['@count']=(0);
return self;}
}),
smalltalk.SmackboneCounter);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_h1_", [smalltalk.send(self['@count'], "_asString", [])]);
(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(self, "_decrease", []);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", [unescape("--")]);})(smalltalk.send(html, "_a", []));
smalltalk.send(html, "_with_", [" "]);
(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(self, "_increase", []);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", [unescape("++")]);})(smalltalk.send(html, "_a", []));
smalltalk.send(html, "_p_", [(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [(smalltalk.SmackboneCounterTest || SmackboneCounterTest)]);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", ["See the tests"]);})(smalltalk.send(html, "_a", []))]);
smalltalk.send(html, "_p_", [(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", ["home"]);})(smalltalk.send(html, "_a", []))]);
return self;}
}),
smalltalk.SmackboneCounter);

smalltalk.addMethod(
'_decrease',
smalltalk.method({
selector: 'decrease',
fn: function () {
var self=this;
self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]));
smalltalk.send(self, "_render", []);
return self;}
}),
smalltalk.SmackboneCounter);

smalltalk.addMethod(
'_increase',
smalltalk.method({
selector: 'increase',
fn: function () {
var self=this;
self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
smalltalk.send(self, "_render", []);
return self;}
}),
smalltalk.SmackboneCounter);



smalltalk.addClass('SmackboneCounterTest', smalltalk.TestCase, [], 'Smackbone-Examples');
smalltalk.addMethod(
'_testCounterStartsAt0',
smalltalk.method({
selector: 'testCounterStartsAt0',
fn: function () {
var self=this;
var counter=nil;
counter=smalltalk.send((smalltalk.SmackboneCounter || SmackboneCounter), "_new", []);
smalltalk.send(self, "_assert_equals_", ["0", smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(counter, "_render", []), "_el", []), "_find_", ["h1"]), "_text", [])]);
return self;}
}),
smalltalk.SmackboneCounterTest);

smalltalk.addMethod(
'_testIncreaseAddsOne',
smalltalk.method({
selector: 'testIncreaseAddsOne',
fn: function () {
var self=this;
var counter=nil;
counter=smalltalk.send((smalltalk.SmackboneCounter || SmackboneCounter), "_new", []);
smalltalk.send(counter, "_increase", []);
smalltalk.send(self, "_assert_equals_", ["1", smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(counter, "_render", []), "_el", []), "_find_", ["h1"]), "_text", [])]);
return self;}
}),
smalltalk.SmackboneCounterTest);

smalltalk.addMethod(
'_testDecreaseSubtractsOne',
smalltalk.method({
selector: 'testDecreaseSubtractsOne',
fn: function () {
var self=this;
var counter=nil;
counter=smalltalk.send((smalltalk.SmackboneCounter || SmackboneCounter), "_new", []);
smalltalk.send(counter, "_decrease", []);
smalltalk.send(self, "_assert_equals_", [unescape("-1"), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(counter, "_render", []), "_el", []), "_find_", ["h1"]), "_text", [])]);
return self;}
}),
smalltalk.SmackboneCounterTest);



smalltalk.addClass('SmackboneHello', smalltalk.SmackboneView, ['personName'], 'Smackbone-Examples');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", [(function(){smalltalk.send(html, "_with_", [unescape("Hello%21")]);return (($receiver = self['@personName']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_renderNameFormOn_", [html]);})() : (function(){return smalltalk.send(self, "_renderHelloOn_", [html]);})();})]);
smalltalk.send(html, "_p_", [(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(self, "_render", []);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", ["refresh"]);})(smalltalk.send(html, "_a", []))]);
return self;}
}),
smalltalk.SmackboneHello);

smalltalk.addMethod(
'_renderNameFormOn_',
smalltalk.method({
selector: 'renderNameFormOn:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_with_", [unescape("%20I%20don%27t%20know%20you.%20What%27s%20your%20name%3F%20")]);
(function($rec){smalltalk.send($rec, "_class_", [unescape("person-name")]);return smalltalk.send($rec, "_type_", ["text"]);})(smalltalk.send(html, "_input", []));
smalltalk.send(html, "_with_", [" "]);
(function($rec){smalltalk.send($rec, "_type_", ["submit"]);smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(self, "_collectPersonName", []);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_value_", ["Continue"]);})(smalltalk.send(html, "_input", []));
return self;}
}),
smalltalk.SmackboneHello);

smalltalk.addMethod(
'_collectPersonName',
smalltalk.method({
selector: 'collectPersonName',
fn: function () {
var self=this;
self['@personName']=smalltalk.send(smalltalk.send(self['@el'], "_find_", [unescape("input.person-name")]), "_val", []);
smalltalk.send(self, "_render", []);
return self;}
}),
smalltalk.SmackboneHello);

smalltalk.addMethod(
'_renderHelloOn_',
smalltalk.method({
selector: 'renderHelloOn:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(unescape("%20It%27s%20nice%20to%20meet%20you%2C%20"), "__comma", [self['@personName']])]);
smalltalk.send(html, "_with_", [" "]);
(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(e){self['@personName']=nil;smalltalk.send(self, "_render", []);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", ["Forget about me"]);})(smalltalk.send(html, "_a", []));
return self;}
}),
smalltalk.SmackboneHello);



smalltalk.addClass('SmackboneTodo', smalltalk.SmackboneView, [], 'Smackbone-Examples');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_h1_", ["Smackbone Todo list"]);
return self;}
}),
smalltalk.SmackboneTodo);



smalltalk.addClass('CorysCanvas', smalltalk.Object, ['startPoint', 'endPoint'], 'Smackbone-Examples');
smalltalk.addMethod(
'_isReadyForDrawing',
smalltalk.method({
selector: 'isReadyForDrawing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@startPoint'], "_notNil", []), "_and_", [(function(){return smalltalk.send(self['@endPoint'], "_notNil", []);})]);
return self;}
}),
smalltalk.CorysCanvas);

smalltalk.addMethod(
'_click_',
smalltalk.method({
selector: 'click:',
fn: function (aPoint){
var self=this;
(($receiver = self['@startPoint']) == nil || $receiver == undefined) ? (function(){return self['@startPoint']=aPoint;})() : (function(){return self['@endPoint']=aPoint;})();
return self;}
}),
smalltalk.CorysCanvas);

smalltalk.addMethod(
'_drawOn_',
smalltalk.method({
selector: 'drawOn:',
fn: function (view){
var self=this;
smalltalk.send(view, "_drawLineFrom_to_", [self['@startPoint'], self['@endPoint']]);
return self;}
}),
smalltalk.CorysCanvas);



smalltalk.addClass('Html5Drawer', smalltalk.Object, ['canvas'], 'Smackbone-Examples');
smalltalk.addMethod(
'_drawLineFrom_to_',
smalltalk.method({
selector: 'drawLineFrom:to:',
fn: function (start, end){
var self=this;

return self;}
}),
smalltalk.Html5Drawer);



