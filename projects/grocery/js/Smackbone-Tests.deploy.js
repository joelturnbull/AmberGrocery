smalltalk.addClass('SmackboneViewTest', smalltalk.TestCase, [], 'Smackbone-Tests');
smalltalk.addMethod(
'_testRenderSetsContentsOfEl',
smalltalk.method({
selector: 'testRenderSetsContentsOfEl',
fn: function () {
var self=this;
var view=nil;
view=smalltalk.send((smalltalk.SmackboneTestStringRenderingView || SmackboneTestStringRenderingView), "_new", []);
smalltalk.send(self, "_assert_equals_", ["rendered", smalltalk.send(smalltalk.send(smalltalk.send(view, "_render", []), "_el", []), "_text", [])]);
return self;}
}),
smalltalk.SmackboneViewTest);

smalltalk.addMethod(
'_testContentsOfElAreEmpty',
smalltalk.method({
selector: 'testContentsOfElAreEmpty',
fn: function () {
var self=this;
var view=nil;
view=smalltalk.send((smalltalk.SmackboneTestStringRenderingView || SmackboneTestStringRenderingView), "_new", []);
smalltalk.send(self, "_assert_equals_", ["", smalltalk.send(smalltalk.send(view, "_el", []), "_text", [])]);
return self;}
}),
smalltalk.SmackboneViewTest);



smalltalk.addClass('SmackboneRouterTest', smalltalk.TestCase, [], 'Smackbone-Tests');
smalltalk.addMethod(
'_testNavigateCallsAssociatedMethod',
smalltalk.method({
selector: 'testNavigateCallsAssociatedMethod',
fn: function () {
var self=this;
var router=nil;
router=smalltalk.send((smalltalk.SmackboneTestSimpleRouter || SmackboneTestSimpleRouter), "_new", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(router, "_message", []), "__eq", [nil])]);
smalltalk.send(router, "_navigate_", ["another one"]);
smalltalk.send(self, "_assert_equals_", ["called anotherOne", smalltalk.send(router, "_message", [])]);
return self;}
}),
smalltalk.SmackboneRouterTest);

smalltalk.addMethod(
'_testDoesRespondTo',
smalltalk.method({
selector: 'testDoesRespondTo',
fn: function () {
var self=this;
var router=nil;
router=smalltalk.send((smalltalk.SmackboneTestSimpleRouter || SmackboneTestSimpleRouter), "_new", []);
smalltalk.send(self, "_assert_", [smalltalk.send(router, "_doesRespondTo_", [""])]);
smalltalk.send(self, "_assert_", [smalltalk.send(router, "_doesRespondTo_", ["another one"])]);
smalltalk.send(self, "_deny_", [smalltalk.send(router, "_doesRespondTo_", ["missing one"])]);
return self;}
}),
smalltalk.SmackboneRouterTest);



smalltalk.addClass('SmackboneTestStringRenderingView', smalltalk.SmackboneView, [], 'Smackbone-Tests');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
var self=this;
smalltalk.send(html, "_with_", ["rendered"]);
return self;}
}),
smalltalk.SmackboneTestStringRenderingView);



smalltalk.addClass('SmackboneTestSimpleRouter', smalltalk.SmackboneRouter, ['message'], 'Smackbone-Tests');
smalltalk.addMethod(
'_routes',
smalltalk.method({
selector: 'routes',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Dictionary || Dictionary), "_with_with_with_", [smalltalk.send("", "__minus_gt", ["default"]), smalltalk.send("another one", "__minus_gt", ["anotherOne"]), smalltalk.send(unescape("funky-one"), "__minus_gt", ["funky"])]);
return self;}
}),
smalltalk.SmackboneTestSimpleRouter);

smalltalk.addMethod(
'_default',
smalltalk.method({
selector: 'default',
fn: function () {
var self=this;
self['@message']="called default";
return self;}
}),
smalltalk.SmackboneTestSimpleRouter);

smalltalk.addMethod(
'_message',
smalltalk.method({
selector: 'message',
fn: function () {
var self=this;
return self['@message'];
return self;}
}),
smalltalk.SmackboneTestSimpleRouter);

smalltalk.addMethod(
'_anotherOne',
smalltalk.method({
selector: 'anotherOne',
fn: function () {
var self=this;
self['@message']="called anotherOne";
return self;}
}),
smalltalk.SmackboneTestSimpleRouter);

smalltalk.addMethod(
'_funky',
smalltalk.method({
selector: 'funky',
fn: function () {
var self=this;
self['@message']="called funky";
return self;}
}),
smalltalk.SmackboneTestSimpleRouter);



smalltalk.addClass('SmackboneHistorianTest', smalltalk.TestCase, [], 'Smackbone-Tests');
smalltalk.addMethod(
'_testStartNavigatesToDefaultOnRoutes',
smalltalk.method({
selector: 'testStartNavigatesToDefaultOnRoutes',
fn: function () {
var self=this;
var historian=nil;
var router=nil;
historian=smalltalk.send((smalltalk.SmackboneHistorian || SmackboneHistorian), "_new", []);
router=smalltalk.send((smalltalk.SmackboneTestSimpleRouter || SmackboneTestSimpleRouter), "_new", []);
smalltalk.send(historian, "_addRoute_", [router]);
smalltalk.send(historian, "_start", []);
smalltalk.send(self, "_assert_equals_", ["called default", smalltalk.send(router, "_message", [])]);
return self;}
}),
smalltalk.SmackboneHistorianTest);

smalltalk.addMethod(
'_testNavigateSkipsRoutesThatDontRespond',
smalltalk.method({
selector: 'testNavigateSkipsRoutesThatDontRespond',
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
return self;}
}),
smalltalk.SmackboneHistorianTest);

smalltalk.addMethod(
'_testDoesNotNavigateUntilStartIsCalled',
smalltalk.method({
selector: 'testDoesNotNavigateUntilStartIsCalled',
fn: function () {
var self=this;
var historian=nil;
var router=nil;
historian=smalltalk.send((smalltalk.SmackboneHistorian || SmackboneHistorian), "_new", []);
router=smalltalk.send((smalltalk.SmackboneTestSimpleRouter || SmackboneTestSimpleRouter), "_new", []);
smalltalk.send(historian, "_addRoute_", [router]);
smalltalk.send(historian, "_navigate_", ["another one"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(router, "_message", []), "__eq", [nil])]);
return self;}
}),
smalltalk.SmackboneHistorianTest);

smalltalk.addMethod(
'_testNavigateCallsAssociatedRoutes',
smalltalk.method({
selector: 'testNavigateCallsAssociatedRoutes',
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
return self;}
}),
smalltalk.SmackboneHistorianTest);

smalltalk.addMethod(
'_testHandleHashChangedNavigates',
smalltalk.method({
selector: 'testHandleHashChangedNavigates',
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
return self;}
}),
smalltalk.SmackboneHistorianTest);

smalltalk.addMethod(
'_testNavigateToViewBypassingRouter',
smalltalk.method({
selector: 'testNavigateToViewBypassingRouter',
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
return self;}
}),
smalltalk.SmackboneHistorianTest);

smalltalk.addMethod(
'_testStartNavigatesToWindowHash',
smalltalk.method({
selector: 'testStartNavigatesToWindowHash',
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
return self;}
}),
smalltalk.SmackboneHistorianTest);



smalltalk.addClass('SmackboneTestFakeWindow', smalltalk.Object, ['hash'], 'Smackbone-Tests');
smalltalk.addMethod(
'_hash_',
smalltalk.method({
selector: 'hash:',
fn: function (aString) {
var self=this;
self['@hash']=aString;
return self;}
}),
smalltalk.SmackboneTestFakeWindow);

smalltalk.addMethod(
'_hash',
smalltalk.method({
selector: 'hash',
fn: function () {
var self=this;
return self['@hash'];
return self;}
}),
smalltalk.SmackboneTestFakeWindow);

smalltalk.addMethod(
'_location',
smalltalk.method({
selector: 'location',
fn: function () {
var self=this;

return self;}
}),
smalltalk.SmackboneTestFakeWindow);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function () {
var self=this;
self['@hash']="";
return self;}
}),
smalltalk.SmackboneTestFakeWindow);



smalltalk.addClass('SmackboneTestHistorianWithFakeWindow', smalltalk.SmackboneHistorian, ['fakeWindow'], 'Smackbone-Tests');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.SmackboneHistorian);
self['@fakeWindow']=smalltalk.send((smalltalk.SmackboneTestFakeWindow || SmackboneTestFakeWindow), "_new", []);
return self;}
}),
smalltalk.SmackboneTestHistorianWithFakeWindow);

smalltalk.addMethod(
'_window',
smalltalk.method({
selector: 'window',
fn: function () {
var self=this;
return self['@fakeWindow'];
return self;}
}),
smalltalk.SmackboneTestHistorianWithFakeWindow);



smalltalk.addClass('SmackboneViewRouterTest', smalltalk.TestCase, [], 'Smackbone-Tests');
smalltalk.addMethod(
'_testDoesRespondTo',
smalltalk.method({
selector: 'testDoesRespondTo',
fn: function () {
var self=this;
var router=nil;
var view=nil;
view=smalltalk.send((smalltalk.SmackboneTestStringRenderingView || SmackboneTestStringRenderingView), "_new", []);
router=smalltalk.send((smalltalk.SmackboneViewRouter || SmackboneViewRouter), "_view_route_", [view, "chicken"]);
smalltalk.send(self, "_assert_", [smalltalk.send(router, "_doesRespondTo_", ["chicken"])]);
smalltalk.send(self, "_deny_", [smalltalk.send(router, "_doesRespondTo_", ["turkey"])]);
return self;}
}),
smalltalk.SmackboneViewRouterTest);

smalltalk.addMethod(
'_testNavigatePerformsRender',
smalltalk.method({
selector: 'testNavigatePerformsRender',
fn: function () {
var self=this;
var router=nil;
var view=nil;
view=smalltalk.send((smalltalk.SmackboneTestStringRenderingView || SmackboneTestStringRenderingView), "_new", []);
router=smalltalk.send((smalltalk.SmackboneViewRouter || SmackboneViewRouter), "_view_route_", [view, "chicken"]);
smalltalk.send(router, "_navigate_", ["chicken"]);
smalltalk.send(self, "_assert_equals_", ["rendered", smalltalk.send(smalltalk.send(view, "_el", []), "_text", [])]);
return self;}
}),
smalltalk.SmackboneViewRouterTest);

smalltalk.addMethod(
'_testNavigateToDifferentRouteSkipsRender',
smalltalk.method({
selector: 'testNavigateToDifferentRouteSkipsRender',
fn: function () {
var self=this;
var router=nil;
var view=nil;
view=smalltalk.send((smalltalk.SmackboneTestStringRenderingView || SmackboneTestStringRenderingView), "_new", []);
router=smalltalk.send((smalltalk.SmackboneViewRouter || SmackboneViewRouter), "_view_route_", [view, "chicken"]);
smalltalk.send(router, "_navigate_", ["turkey"]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "__eq", ["rendered"])]);
return self;}
}),
smalltalk.SmackboneViewRouterTest);



smalltalk.addClass('CorysCanvasTest', smalltalk.TestCase, [], 'Smackbone-Tests');
smalltalk.addMethod(
'_testNewCanvasIsNotReadyForDrawing',
smalltalk.method({
selector: 'testNewCanvasIsNotReadyForDrawing',
fn: function (){
var self=this;
var canvas=nil;
canvas=smalltalk.send((smalltalk.CorysCanvas || CorysCanvas), "_new", []);
smalltalk.send(self, "_deny_", [smalltalk.send(canvas, "_isReadyForDrawing", [])]);
return self;}
}),
smalltalk.CorysCanvasTest);

smalltalk.addMethod(
'_testCanvasIsNotReadyForDrawingAfterOneClick',
smalltalk.method({
selector: 'testCanvasIsNotReadyForDrawingAfterOneClick',
fn: function (){
var self=this;
var canvas=nil;
canvas=smalltalk.send((smalltalk.CorysCanvas || CorysCanvas), "_new", []);
smalltalk.send(canvas, "_click_", [smalltalk.send((smalltalk.Point || Point), "_x_y_", [(10), (25)])]);
smalltalk.send(self, "_deny_", [smalltalk.send(canvas, "_isReadyForDrawing", [])]);
return self;}
}),
smalltalk.CorysCanvasTest);

smalltalk.addMethod(
'_testCanvasIsReadyForDrawingAfterTwoClicks',
smalltalk.method({
selector: 'testCanvasIsReadyForDrawingAfterTwoClicks',
fn: function (){
var self=this;
var canvas=nil;
canvas=smalltalk.send((smalltalk.CorysCanvas || CorysCanvas), "_new", []);
smalltalk.send(canvas, "_click_", [smalltalk.send((smalltalk.Point || Point), "_x_y_", [(10), (25)])]);
smalltalk.send(canvas, "_click_", [smalltalk.send((smalltalk.Point || Point), "_x_y_", [(10), (250)])]);
smalltalk.send(self, "_assert_", [smalltalk.send(canvas, "_isReadyForDrawing", [])]);
return self;}
}),
smalltalk.CorysCanvasTest);

smalltalk.addMethod(
'_testDrawOnCallsDrawLineWithStartAndEndPoints',
smalltalk.method({
selector: 'testDrawOnCallsDrawLineWithStartAndEndPoints',
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
return self;}
}),
smalltalk.CorysCanvasTest);



smalltalk.addClass('TestReportingView', smalltalk.Object, ['start', 'end'], 'Smackbone-Tests');
smalltalk.addMethod(
'_drawLineFrom_to_',
smalltalk.method({
selector: 'drawLineFrom:to:',
fn: function (startPoint, endPoint){
var self=this;
self['@start']=startPoint;
self['@end']=endPoint;
return self;}
}),
smalltalk.TestReportingView);

smalltalk.addMethod(
'_start',
smalltalk.method({
selector: 'start',
fn: function (){
var self=this;
return self['@start'];
return self;}
}),
smalltalk.TestReportingView);

smalltalk.addMethod(
'_end',
smalltalk.method({
selector: 'end',
fn: function (){
var self=this;
return self['@end'];
return self;}
}),
smalltalk.TestReportingView);



