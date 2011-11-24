smalltalk.addClass('SmackboneViewTest', smalltalk.TestCase, [], 'Smackbone-Tests');
smalltalk.addMethod(
unescape('_testRenderSetsContentsOfEl'),
smalltalk.method({
selector: unescape('testRenderSetsContentsOfEl'),
category: 'not yet classified',
fn: function () {
var self=this;
var view=nil;
view=smalltalk.send((smalltalk.SmackboneTestStringRenderingView || SmackboneTestStringRenderingView), "_new", []);
smalltalk.send(self, "_assert_equals_", ["rendered", smalltalk.send(smalltalk.send(smalltalk.send(view, "_render", []), "_el", []), "_text", [])]);
return self;},
args: [],
source: unescape('testRenderSetsContentsOfEl%0A%09%7C%20view%20%7C%0A%09view%20%3A%3D%20SmackboneTestStringRenderingView%20new.%0A%09self%20assert%3A%20%27rendered%27%20equals%3A%20view%20render%20el%20text.'),
messageSends: ["new", "assert:equals:", "text", "el", "render"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.SmackboneViewTest);

smalltalk.addMethod(
unescape('_testContentsOfElAreEmpty'),
smalltalk.method({
selector: unescape('testContentsOfElAreEmpty'),
category: 'not yet classified',
fn: function () {
var self=this;
var view=nil;
view=smalltalk.send((smalltalk.SmackboneTestStringRenderingView || SmackboneTestStringRenderingView), "_new", []);
smalltalk.send(self, "_assert_equals_", ["", smalltalk.send(smalltalk.send(view, "_el", []), "_text", [])]);
return self;},
args: [],
source: unescape('testContentsOfElAreEmpty%0A%09%7C%20view%20%7C%0A%09view%20%3A%3D%20SmackboneTestStringRenderingView%20new.%0A%09self%20assert%3A%20%27%27%20equals%3A%20view%20el%20text.'),
messageSends: ["new", "assert:equals:", "text", "el"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.SmackboneViewTest);



smalltalk.addClass('SmackboneRouterTest', smalltalk.TestCase, [], 'Smackbone-Tests');
smalltalk.addMethod(
unescape('_testNavigateCallsAssociatedMethod'),
smalltalk.method({
selector: unescape('testNavigateCallsAssociatedMethod'),
category: 'not yet classified',
fn: function () {
var self=this;
var router=nil;
router=smalltalk.send((smalltalk.SmackboneTestSimpleRouter || SmackboneTestSimpleRouter), "_new", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(router, "_message", []), "__eq", [nil])]);
smalltalk.send(router, "_navigate_", ["another one"]);
smalltalk.send(self, "_assert_equals_", ["called anotherOne", smalltalk.send(router, "_message", [])]);
return self;},
args: [],
source: unescape('testNavigateCallsAssociatedMethod%0A%09%7C%20router%20%7C%0A%09router%20%3A%3D%20SmackboneTestSimpleRouter%20new.%0A%09self%20assert%3A%20%28router%20message%20%3D%20nil%29.%0A%09router%20navigate%3A%20%27another%20one%27.%0A%09self%20assert%3A%20%27called%20anotherOne%27%20equals%3A%20router%20message.'),
messageSends: ["new", "assert:", unescape("%3D"), "message", "navigate:", "assert:equals:"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.SmackboneRouterTest);

smalltalk.addMethod(
unescape('_testDoesRespondTo'),
smalltalk.method({
selector: unescape('testDoesRespondTo'),
category: 'not yet classified',
fn: function () {
var self=this;
var router=nil;
router=smalltalk.send((smalltalk.SmackboneTestSimpleRouter || SmackboneTestSimpleRouter), "_new", []);
smalltalk.send(self, "_assert_", [smalltalk.send(router, "_doesRespondTo_", [""])]);
smalltalk.send(self, "_assert_", [smalltalk.send(router, "_doesRespondTo_", ["another one"])]);
smalltalk.send(self, "_deny_", [smalltalk.send(router, "_doesRespondTo_", ["missing one"])]);
return self;},
args: [],
source: unescape('testDoesRespondTo%0A%09%7C%20router%20%7C%0A%09router%20%3A%3D%20SmackboneTestSimpleRouter%20new.%0A%09self%20assert%3A%20%28router%20doesRespondTo%3A%20%27%27%29.%0A%09self%20assert%3A%20%28router%20doesRespondTo%3A%20%27another%20one%27%29.%0A%09self%20deny%3A%20%28router%20doesRespondTo%3A%20%27missing%20one%27%29.'),
messageSends: ["new", "assert:", "doesRespondTo:", "deny:"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.SmackboneRouterTest);



smalltalk.addClass('SmackboneTestStringRenderingView', smalltalk.SmackboneView, [], 'Smackbone-Tests');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_with_", ["rendered"]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20with%3A%20%27rendered%27'),
messageSends: ["with:"],
referencedClasses: []
}),
smalltalk.SmackboneTestStringRenderingView);



smalltalk.addClass('SmackboneTestSimpleRouter', smalltalk.SmackboneRouter, ['message'], 'Smackbone-Tests');
smalltalk.addMethod(
unescape('_routes'),
smalltalk.method({
selector: unescape('routes'),
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Dictionary || Dictionary), "_with_with_with_", [smalltalk.send("", "__minus_gt", ["default"]), smalltalk.send("another one", "__minus_gt", ["anotherOne"]), smalltalk.send(unescape("funky-one"), "__minus_gt", ["funky"])]);
return self;},
args: [],
source: unescape('routes%0A%09%5E%20Dictionary%20with%3A%20%27%27%20-%3E%20%27default%27%20with%3A%20%27another%20one%27%20-%3E%20%27anotherOne%27%20with%3A%20%27funky-one%27%20-%3E%20%27funky%27'),
messageSends: ["with:with:with:", unescape("-%3E")],
referencedClasses: [smalltalk.Dictionary]
}),
smalltalk.SmackboneTestSimpleRouter);

smalltalk.addMethod(
unescape('_default'),
smalltalk.method({
selector: unescape('default'),
category: 'not yet classified',
fn: function () {
var self=this;
self['@message']="called default";
return self;},
args: [],
source: unescape('default%0A%09message%20%3A%3D%20%27called%20default%27.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneTestSimpleRouter);

smalltalk.addMethod(
unescape('_message'),
smalltalk.method({
selector: unescape('message'),
category: 'not yet classified',
fn: function () {
var self=this;
return self['@message'];
return self;},
args: [],
source: unescape('message%0A%09%5E%20message'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneTestSimpleRouter);

smalltalk.addMethod(
unescape('_anotherOne'),
smalltalk.method({
selector: unescape('anotherOne'),
category: 'not yet classified',
fn: function () {
var self=this;
self['@message']="called anotherOne";
return self;},
args: [],
source: unescape('anotherOne%0A%09message%20%3A%3D%20%27called%20anotherOne%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneTestSimpleRouter);

smalltalk.addMethod(
unescape('_funky'),
smalltalk.method({
selector: unescape('funky'),
category: 'not yet classified',
fn: function () {
var self=this;
self['@message']="called funky";
return self;},
args: [],
source: unescape('funky%0A%09message%20%3A%3D%20%27called%20funky%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneTestSimpleRouter);



smalltalk.addClass('SmackboneHistorianTest', smalltalk.TestCase, [], 'Smackbone-Tests');
smalltalk.addMethod(
unescape('_testStartNavigatesToDefaultOnRoutes'),
smalltalk.method({
selector: unescape('testStartNavigatesToDefaultOnRoutes'),
category: 'not yet classified',
fn: function () {
var self=this;
var historian=nil;
var router=nil;
historian=smalltalk.send((smalltalk.SmackboneHistorian || SmackboneHistorian), "_new", []);
router=smalltalk.send((smalltalk.SmackboneTestSimpleRouter || SmackboneTestSimpleRouter), "_new", []);
smalltalk.send(historian, "_addRoute_", [router]);
smalltalk.send(historian, "_start", []);
smalltalk.send(self, "_assert_equals_", ["called default", smalltalk.send(router, "_message", [])]);
return self;},
args: [],
source: unescape('testStartNavigatesToDefaultOnRoutes%0A%09%7C%20historian%20router%20%7C%0A%09historian%20%3A%3D%20SmackboneHistorian%20new.%0A%09router%20%3A%3D%20SmackboneTestSimpleRouter%20new.%0A%09historian%20addRoute%3A%20router.%0A%09historian%20start.%0A%09self%20assert%3A%20%27called%20default%27%20equals%3A%20router%20message.'),
messageSends: ["new", "addRoute:", "start", "assert:equals:", "message"],
referencedClasses: [smalltalk.SmackboneHistorian,smalltalk.SmackboneTestSimpleRouter]
}),
smalltalk.SmackboneHistorianTest);

smalltalk.addMethod(
unescape('_testNavigateSkipsRoutesThatDontRespond'),
smalltalk.method({
selector: unescape('testNavigateSkipsRoutesThatDontRespond'),
category: 'not yet classified',
fn: function () {
var self=this;
var historian=nil;
var router=nil;
historian=smalltalk.send((smalltalk.SmackboneHistorian || SmackboneHistorian), "_new", []);
router=smalltalk.send((smalltalk.SmackboneTestSimpleRouter || SmackboneTestSimpleRouter), "_new", []);
smalltalk.send(historian, "_addRoute_", [router]);
smalltalk.send(historian, "_start", []);
smalltalk.send(historian, "_navigate_", ["missing one"]);
smalltalk.send(self, "_assert_equals_", ["called default", smalltalk.send(router, "_message", [])]);
return self;},
args: [],
source: unescape('testNavigateSkipsRoutesThatDontRespond%0A%09%7C%20historian%20router%20%7C%0A%09historian%20%3A%3D%20SmackboneHistorian%20new.%0A%09router%20%3A%3D%20SmackboneTestSimpleRouter%20new.%0A%09historian%20addRoute%3A%20router.%0A%09historian%20start.%0A%09historian%20navigate%3A%20%27missing%20one%27.%0A%09self%20assert%3A%20%27called%20default%27%20equals%3A%20router%20message.'),
messageSends: ["new", "addRoute:", "start", "navigate:", "assert:equals:", "message"],
referencedClasses: [smalltalk.SmackboneHistorian,smalltalk.SmackboneTestSimpleRouter]
}),
smalltalk.SmackboneHistorianTest);

smalltalk.addMethod(
unescape('_testDoesNotNavigateUntilStartIsCalled'),
smalltalk.method({
selector: unescape('testDoesNotNavigateUntilStartIsCalled'),
category: 'not yet classified',
fn: function () {
var self=this;
var historian=nil;
var router=nil;
historian=smalltalk.send((smalltalk.SmackboneHistorian || SmackboneHistorian), "_new", []);
router=smalltalk.send((smalltalk.SmackboneTestSimpleRouter || SmackboneTestSimpleRouter), "_new", []);
smalltalk.send(historian, "_addRoute_", [router]);
smalltalk.send(historian, "_navigate_", ["another one"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(router, "_message", []), "__eq", [nil])]);
return self;},
args: [],
source: unescape('testDoesNotNavigateUntilStartIsCalled%0A%09%7C%20historian%20router%20%7C%0A%09historian%20%3A%3D%20SmackboneHistorian%20new.%0A%09router%20%3A%3D%20SmackboneTestSimpleRouter%20new.%0A%09historian%20addRoute%3A%20router.%0A%09historian%20navigate%3A%20%27another%20one%27.%0A%09self%20assert%3A%20%28router%20message%20%3D%20nil%29.'),
messageSends: ["new", "addRoute:", "navigate:", "assert:", unescape("%3D"), "message"],
referencedClasses: [smalltalk.SmackboneHistorian,smalltalk.SmackboneTestSimpleRouter]
}),
smalltalk.SmackboneHistorianTest);

smalltalk.addMethod(
unescape('_testNavigateCallsAssociatedRoutes'),
smalltalk.method({
selector: unescape('testNavigateCallsAssociatedRoutes'),
category: 'not yet classified',
fn: function () {
var self=this;
var historian=nil;
var router=nil;
historian=smalltalk.send((smalltalk.SmackboneHistorian || SmackboneHistorian), "_new", []);
router=smalltalk.send((smalltalk.SmackboneTestSimpleRouter || SmackboneTestSimpleRouter), "_new", []);
smalltalk.send(historian, "_addRoute_", [router]);
smalltalk.send(historian, "_start", []);
smalltalk.send(historian, "_navigate_", ["another one"]);
smalltalk.send(self, "_assert_equals_", ["called anotherOne", smalltalk.send(router, "_message", [])]);
return self;},
args: [],
source: unescape('testNavigateCallsAssociatedRoutes%0A%09%7C%20historian%20router%20%7C%0A%09historian%20%3A%3D%20SmackboneHistorian%20new.%0A%09router%20%3A%3D%20SmackboneTestSimpleRouter%20new.%0A%09historian%20addRoute%3A%20router.%0A%09historian%20start.%0A%09historian%20navigate%3A%20%27another%20one%27.%0A%09self%20assert%3A%20%27called%20anotherOne%27%20equals%3A%20router%20message.'),
messageSends: ["new", "addRoute:", "start", "navigate:", "assert:equals:", "message"],
referencedClasses: [smalltalk.SmackboneHistorian,smalltalk.SmackboneTestSimpleRouter]
}),
smalltalk.SmackboneHistorianTest);

smalltalk.addMethod(
unescape('_testHandleHashChangedNavigates'),
smalltalk.method({
selector: unescape('testHandleHashChangedNavigates'),
category: 'not yet classified',
fn: function () {
var self=this;
var historian=nil;
var router=nil;
historian=smalltalk.send((smalltalk.SmackboneTestHistorianWithFakeWindow || SmackboneTestHistorianWithFakeWindow), "_new", []);
router=smalltalk.send((smalltalk.SmackboneTestSimpleRouter || SmackboneTestSimpleRouter), "_new", []);
smalltalk.send(historian, "_addRoute_", [router]);
smalltalk.send(historian, "_start", []);
smalltalk.send(smalltalk.send(historian, "_window", []), "_hash_", [unescape("%23funky-one")]);
smalltalk.send(historian, "_handleHashChanged", []);
smalltalk.send(self, "_assert_equals_", ["called funky", smalltalk.send(router, "_message", [])]);
return self;},
args: [],
source: unescape('testHandleHashChangedNavigates%0A%09%7C%20historian%20router%20%7C%0A%09historian%20%3A%3D%20SmackboneTestHistorianWithFakeWindow%20new.%0A%09router%20%3A%3D%20SmackboneTestSimpleRouter%20new.%0A%09historian%20addRoute%3A%20router.%0A%09historian%20start.%0A%09historian%20window%20hash%3A%20%27%23funky-one%27.%0A%09historian%20handleHashChanged.%0A%09self%20assert%3A%20%27called%20funky%27%20equals%3A%20router%20message.'),
messageSends: ["new", "addRoute:", "start", "hash:", "window", "handleHashChanged", "assert:equals:", "message"],
referencedClasses: [smalltalk.nil,smalltalk.SmackboneTestSimpleRouter]
}),
smalltalk.SmackboneHistorianTest);

smalltalk.addMethod(
unescape('_testNavigateToViewBypassingRouter'),
smalltalk.method({
selector: unescape('testNavigateToViewBypassingRouter'),
category: 'not yet classified',
fn: function () {
var self=this;
var history=nil;
var view=nil;
view=smalltalk.send((smalltalk.SmackboneTestStringRenderingView || SmackboneTestStringRenderingView), "_new", []);
history=smalltalk.send((smalltalk.SmackboneHistorian || SmackboneHistorian), "_new", []);
smalltalk.send(history, "_routeView_to_", [view, "gogogo"]);
smalltalk.send(history, "_start", []);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "__eq", ["rendered"])]);
smalltalk.send(history, "_navigate_", ["gogogo"]);
smalltalk.send(self, "_assert_equals_", ["rendered", smalltalk.send(smalltalk.send(view, "_el", []), "_text", [])]);
return self;},
args: [],
source: unescape('testNavigateToViewBypassingRouter%0A%09%7C%20history%20view%20%7C%0A%09view%20%3A%3D%20SmackboneTestStringRenderingView%20new.%0A%09history%20%3A%3D%20SmackboneHistorian%20new.%0A%09history%20routeView%3A%20view%20to%3A%20%27gogogo%27.%0A%09history%20start.%0A%09self%20deny%3A%20%28view%20el%20text%20%3D%20%27rendered%27%29.%0A%09history%20navigate%3A%20%27gogogo%27.%0A%09self%20assert%3A%20%27rendered%27%20equals%3A%20view%20el%20text.'),
messageSends: ["new", "routeView:to:", "start", "deny:", unescape("%3D"), "text", "el", "navigate:", "assert:equals:"],
referencedClasses: [smalltalk.SmackboneTestStringRenderingView,smalltalk.SmackboneHistorian]
}),
smalltalk.SmackboneHistorianTest);

smalltalk.addMethod(
unescape('_testStartNavigatesToWindowHash'),
smalltalk.method({
selector: unescape('testStartNavigatesToWindowHash'),
category: 'not yet classified',
fn: function () {
var self=this;
var historian=nil;
var router=nil;
historian=smalltalk.send((smalltalk.SmackboneTestHistorianWithFakeWindow || SmackboneTestHistorianWithFakeWindow), "_new", []);
router=smalltalk.send((smalltalk.SmackboneTestSimpleRouter || SmackboneTestSimpleRouter), "_new", []);
smalltalk.send(historian, "_addRoute_", [router]);
smalltalk.send(smalltalk.send(historian, "_window", []), "_hash_", [unescape("%23funky-one")]);
smalltalk.send(historian, "_start", []);
smalltalk.send(self, "_assert_equals_", ["called funky", smalltalk.send(router, "_message", [])]);
return self;},
args: [],
source: unescape('testStartNavigatesToWindowHash%0A%09%7C%20historian%20router%20%7C%0A%09historian%20%3A%3D%20SmackboneTestHistorianWithFakeWindow%20new.%0A%09router%20%3A%3D%20SmackboneTestSimpleRouter%20new.%0A%09historian%20addRoute%3A%20router.%0A%09historian%20window%20hash%3A%20%27%23funky-one%27.%0A%09historian%20start.%0A%09self%20assert%3A%20%27called%20funky%27%20equals%3A%20router%20message.'),
messageSends: ["new", "addRoute:", "hash:", "window", "start", "assert:equals:", "message"],
referencedClasses: [smalltalk.nil,smalltalk.SmackboneTestSimpleRouter]
}),
smalltalk.SmackboneHistorianTest);



smalltalk.addClass('SmackboneTestFakeWindow', smalltalk.Object, ['hash'], 'Smackbone-Tests');
smalltalk.addMethod(
unescape('_hash_'),
smalltalk.method({
selector: unescape('hash%3A'),
category: 'not yet classified',
fn: function (aString) {
var self=this;
self['@hash']=aString;
return self;},
args: ["aString"],
source: unescape('hash%3A%20aString%0A%09hash%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneTestFakeWindow);

smalltalk.addMethod(
unescape('_hash'),
smalltalk.method({
selector: unescape('hash'),
category: 'not yet classified',
fn: function () {
var self=this;
return self['@hash'];
return self;},
args: [],
source: unescape('hash%0A%09%5E%20hash'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneTestFakeWindow);

smalltalk.addMethod(
unescape('_location'),
smalltalk.method({
selector: unescape('location'),
category: 'not yet classified',
fn: function () {
var self=this;

return self;},
args: [],
source: unescape('location%0A%09'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneTestFakeWindow);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function () {
var self=this;
self['@hash']="";
return self;},
args: [],
source: unescape('initialize%0A%09hash%20%3A%3D%20%27%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneTestFakeWindow);



smalltalk.addClass('SmackboneTestHistorianWithFakeWindow', smalltalk.SmackboneHistorian, ['fakeWindow'], 'Smackbone-Tests');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.SmackboneHistorian);
self['@fakeWindow']=smalltalk.send((smalltalk.SmackboneTestFakeWindow || SmackboneTestFakeWindow), "_new", []);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09fakeWindow%20%3A%3D%20SmackboneTestFakeWindow%20new.'),
messageSends: ["initialize", "new"],
referencedClasses: [smalltalk.SmackboneTestFakeWindow]
}),
smalltalk.SmackboneTestHistorianWithFakeWindow);

smalltalk.addMethod(
unescape('_window'),
smalltalk.method({
selector: unescape('window'),
category: 'not yet classified',
fn: function () {
var self=this;
return self['@fakeWindow'];
return self;},
args: [],
source: unescape('window%0A%09%5E%20fakeWindow'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneTestHistorianWithFakeWindow);



smalltalk.addClass('SmackboneViewRouterTest', smalltalk.TestCase, [], 'Smackbone-Tests');
smalltalk.addMethod(
unescape('_testDoesRespondTo'),
smalltalk.method({
selector: unescape('testDoesRespondTo'),
category: 'not yet classified',
fn: function () {
var self=this;
var router=nil;
var view=nil;
view=smalltalk.send((smalltalk.SmackboneTestStringRenderingView || SmackboneTestStringRenderingView), "_new", []);
router=smalltalk.send((smalltalk.SmackboneViewRouter || SmackboneViewRouter), "_view_route_", [view, "chicken"]);
smalltalk.send(self, "_assert_", [smalltalk.send(router, "_doesRespondTo_", ["chicken"])]);
smalltalk.send(self, "_deny_", [smalltalk.send(router, "_doesRespondTo_", ["turkey"])]);
return self;},
args: [],
source: unescape('testDoesRespondTo%0A%09%7C%20router%20view%20%7C%0A%09view%20%3A%3D%20SmackboneTestStringRenderingView%20new.%0A%09router%20%3A%3D%20SmackboneViewRouter%20view%3A%20view%20route%3A%20%27chicken%27.%0A%09self%20assert%3A%20%28router%20doesRespondTo%3A%20%27chicken%27%29.%0A%09self%20deny%3A%20%28router%20doesRespondTo%3A%20%27turkey%27%29.%0A'),
messageSends: ["new", "view:route:", "assert:", "doesRespondTo:", "deny:"],
referencedClasses: [smalltalk.SmackboneTestStringRenderingView,smalltalk.SmackboneViewRouter]
}),
smalltalk.SmackboneViewRouterTest);

smalltalk.addMethod(
unescape('_testNavigatePerformsRender'),
smalltalk.method({
selector: unescape('testNavigatePerformsRender'),
category: 'not yet classified',
fn: function () {
var self=this;
var router=nil;
var view=nil;
view=smalltalk.send((smalltalk.SmackboneTestStringRenderingView || SmackboneTestStringRenderingView), "_new", []);
router=smalltalk.send((smalltalk.SmackboneViewRouter || SmackboneViewRouter), "_view_route_", [view, "chicken"]);
smalltalk.send(router, "_navigate_", ["chicken"]);
smalltalk.send(self, "_assert_equals_", ["rendered", smalltalk.send(smalltalk.send(view, "_el", []), "_text", [])]);
return self;},
args: [],
source: unescape('testNavigatePerformsRender%0A%09%7C%20router%20view%20%7C%0A%09view%20%3A%3D%20SmackboneTestStringRenderingView%20new.%0A%09router%20%3A%3D%20SmackboneViewRouter%20view%3A%20view%20route%3A%20%27chicken%27.%0A%09router%20navigate%3A%20%27chicken%27.%0A%09self%20assert%3A%20%27rendered%27%20equals%3A%20view%20el%20text.%0A'),
messageSends: ["new", "view:route:", "navigate:", "assert:equals:", "text", "el"],
referencedClasses: [smalltalk.SmackboneTestStringRenderingView,smalltalk.SmackboneViewRouter]
}),
smalltalk.SmackboneViewRouterTest);

smalltalk.addMethod(
unescape('_testNavigateToDifferentRouteSkipsRender'),
smalltalk.method({
selector: unescape('testNavigateToDifferentRouteSkipsRender'),
category: 'not yet classified',
fn: function () {
var self=this;
var router=nil;
var view=nil;
view=smalltalk.send((smalltalk.SmackboneTestStringRenderingView || SmackboneTestStringRenderingView), "_new", []);
router=smalltalk.send((smalltalk.SmackboneViewRouter || SmackboneViewRouter), "_view_route_", [view, "chicken"]);
smalltalk.send(router, "_navigate_", ["turkey"]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "__eq", ["rendered"])]);
return self;},
args: [],
source: unescape('testNavigateToDifferentRouteSkipsRender%0A%09%7C%20router%20view%20%7C%0A%09view%20%3A%3D%20SmackboneTestStringRenderingView%20new.%0A%09router%20%3A%3D%20SmackboneViewRouter%20view%3A%20view%20route%3A%20%27chicken%27.%0A%09router%20navigate%3A%20%27turkey%27.%0A%09self%20deny%3A%20%28view%20el%20text%20%3D%20%27rendered%27%29.%0A'),
messageSends: ["new", "view:route:", "navigate:", "deny:", unescape("%3D"), "text", "el"],
referencedClasses: [smalltalk.SmackboneTestStringRenderingView,smalltalk.SmackboneViewRouter]
}),
smalltalk.SmackboneViewRouterTest);



smalltalk.addClass('CorysCanvasTest', smalltalk.TestCase, [], 'Smackbone-Tests');
smalltalk.addMethod(
unescape('_testNewCanvasIsNotReadyForDrawing'),
smalltalk.method({
selector: unescape('testNewCanvasIsNotReadyForDrawing'),
category: 'not yet classified',
fn: function (){
var self=this;
var canvas=nil;
canvas=smalltalk.send((smalltalk.CorysCanvas || CorysCanvas), "_new", []);
smalltalk.send(self, "_deny_", [smalltalk.send(canvas, "_isReadyForDrawing", [])]);
return self;},
args: [],
source: unescape('testNewCanvasIsNotReadyForDrawing%0A%09%7C%20canvas%20%7C%0A%09canvas%20%3A%3D%20CorysCanvas%20new.%0A%09self%20deny%3A%20canvas%20isReadyForDrawing.'),
messageSends: ["new", "deny:", "isReadyForDrawing"],
referencedClasses: []
}),
smalltalk.CorysCanvasTest);

smalltalk.addMethod(
unescape('_testCanvasIsNotReadyForDrawingAfterOneClick'),
smalltalk.method({
selector: unescape('testCanvasIsNotReadyForDrawingAfterOneClick'),
category: 'not yet classified',
fn: function (){
var self=this;
var canvas=nil;
canvas=smalltalk.send((smalltalk.CorysCanvas || CorysCanvas), "_new", []);
smalltalk.send(canvas, "_click_", [smalltalk.send((smalltalk.Point || Point), "_x_y_", [(10), (25)])]);
smalltalk.send(self, "_deny_", [smalltalk.send(canvas, "_isReadyForDrawing", [])]);
return self;},
args: [],
source: unescape('testCanvasIsNotReadyForDrawingAfterOneClick%0A%09%7C%20canvas%20%7C%0A%09canvas%20%3A%3D%20CorysCanvas%20new.%0A%09canvas%20click%3A%20%28Point%20x%3A%2010%20y%3A%2025%29.%0A%09self%20deny%3A%20canvas%20isReadyForDrawing.'),
messageSends: ["new", "click:", "x:y:", "deny:", "isReadyForDrawing"],
referencedClasses: [smalltalk.CorysCanvas,smalltalk.Point]
}),
smalltalk.CorysCanvasTest);

smalltalk.addMethod(
unescape('_testCanvasIsReadyForDrawingAfterTwoClicks'),
smalltalk.method({
selector: unescape('testCanvasIsReadyForDrawingAfterTwoClicks'),
category: 'not yet classified',
fn: function (){
var self=this;
var canvas=nil;
canvas=smalltalk.send((smalltalk.CorysCanvas || CorysCanvas), "_new", []);
smalltalk.send(canvas, "_click_", [smalltalk.send((smalltalk.Point || Point), "_x_y_", [(10), (25)])]);
smalltalk.send(canvas, "_click_", [smalltalk.send((smalltalk.Point || Point), "_x_y_", [(10), (250)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(canvas, "_isReadyForDrawing", [])]);
return self;},
args: [],
source: unescape('testCanvasIsReadyForDrawingAfterTwoClicks%0A%09%7C%20canvas%20%7C%0A%09canvas%20%3A%3D%20CorysCanvas%20new.%0A%09canvas%20click%3A%20%28Point%20x%3A%2010%20y%3A%2025%29.%0A%09canvas%20click%3A%20%28Point%20x%3A%2010%20y%3A%20250%29.%0A%09self%20assert%3A%20canvas%20isReadyForDrawing.'),
messageSends: ["new", "click:", "x:y:", "assert:", "isReadyForDrawing"],
referencedClasses: [smalltalk.CorysCanvas,smalltalk.Point]
}),
smalltalk.CorysCanvasTest);

smalltalk.addMethod(
unescape('_testDrawOnCallsDrawLineWithStartAndEndPoints'),
smalltalk.method({
selector: unescape('testDrawOnCallsDrawLineWithStartAndEndPoints'),
category: 'not yet classified',
fn: function (){
var self=this;
var canvas=nil;
var view=nil;
var startPoint=nil;
var endPoint=nil;
startPoint=smalltalk.send((smalltalk.Point || Point), "_x_y_", [(10), (25)]);
endPoint=smalltalk.send((smalltalk.Point || Point), "_x_y_", [(10), (250)]);
canvas=smalltalk.send((smalltalk.CorysCanvas || CorysCanvas), "_new", []);
smalltalk.send(canvas, "_click_", [startPoint]);
smalltalk.send(canvas, "_click_", [endPoint]);
view=smalltalk.send((smalltalk.TestReportingView || TestReportingView), "_new", []);
smalltalk.send(canvas, "_drawOn_", [view]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(view, "_start", []), "__eq", [startPoint])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(view, "_end", []), "__eq", [endPoint])]);
return self;},
args: [],
source: unescape('testDrawOnCallsDrawLineWithStartAndEndPoints%0A%09%7C%20canvas%20view%20startPoint%20endPoint%20%7C%0A%09startPoint%20%3A%3D%20Point%20x%3A%2010%20y%3A%2025.%20%0A%09endPoint%20%3A%3D%20Point%20x%3A%2010%20y%3A%20250.%0A%09canvas%20%3A%3D%20CorysCanvas%20new.%0A%09canvas%20click%3A%20startPoint.%0A%09canvas%20click%3A%20endPoint.%0A%09view%20%3A%3D%20TestReportingView%20new.%0A%09canvas%20drawOn%3A%20view.%0A%09self%20assert%3A%20%28view%20start%20%3D%20startPoint%29.%0A%09self%20assert%3A%20%28view%20end%20%3D%20endPoint%29.'),
messageSends: ["x:y:", "new", "click:", "drawOn:", "assert:", unescape("%3D"), "start", "end"],
referencedClasses: [smalltalk.Point,smalltalk.CorysCanvas]
}),
smalltalk.CorysCanvasTest);



smalltalk.addClass('TestReportingView', smalltalk.Object, ['start', 'end'], 'Smackbone-Tests');
smalltalk.addMethod(
unescape('_drawLineFrom_to_'),
smalltalk.method({
selector: unescape('drawLineFrom%3Ato%3A'),
category: 'not yet classified',
fn: function (startPoint, endPoint){
var self=this;
self['@start']=startPoint;
self['@end']=endPoint;
return self;},
args: ["startPoint", "endPoint"],
source: unescape('drawLineFrom%3A%20startPoint%20to%3A%20endPoint%0A%09start%20%3A%3D%20startPoint.%0A%09end%20%3A%3D%20endPoint.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestReportingView);

smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@start'];
return self;},
args: [],
source: unescape('start%0A%09%5E%20start'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestReportingView);

smalltalk.addMethod(
unescape('_end'),
smalltalk.method({
selector: unescape('end'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@end'];
return self;},
args: [],
source: unescape('end%0A%09%5E%20end'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TestReportingView);



