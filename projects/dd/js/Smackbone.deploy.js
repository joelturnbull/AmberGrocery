smalltalk.addClass('SmackboneView', smalltalk.Widget, ['el'], 'Smackbone');
smalltalk.addMethod(
'_render',
smalltalk.method({
selector: 'render',
fn: function () {
var self=this;
smalltalk.send(self['@el'], "_empty", []);
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [self['@el']])]);
return self;}
}),
smalltalk.SmackboneView);

smalltalk.addMethod(
'_el',
smalltalk.method({
selector: 'el',
fn: function () {
var self=this;
return self['@el'];
return self;}
}),
smalltalk.SmackboneView);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
self['@el']=smalltalk.send(unescape("%3Cdiv%3E"), "_asJQuery", []);
return self;}
}),
smalltalk.SmackboneView);



smalltalk.addClass('SmackboneRouter', smalltalk.Object, [], 'Smackbone');
smalltalk.addMethod(
'_navigate_',
smalltalk.method({
selector: 'navigate:',
fn: function (aString) {
var self=this;
smalltalk.send(self, "_perform_", [smalltalk.send(smalltalk.send(self, "_routes", []), "_at_", [aString])]);
return self;}
}),
smalltalk.SmackboneRouter);

smalltalk.addMethod(
'_doesRespondTo_',
smalltalk.method({
selector: 'doesRespondTo:',
fn: function (aString) {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_routes", []), "_keys", []), "_includes_", [aString]);
return self;}
}),
smalltalk.SmackboneRouter);


smalltalk.addMethod(
'_start',
smalltalk.method({
selector: 'start',
fn: function () {
var self=this;

return self;}
}),
smalltalk.SmackboneRouter.klass);


smalltalk.addClass('SmackboneHistorian', smalltalk.Object, ['routes', 'started'], 'Smackbone');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function () {
var self=this;
self['@routes']=smalltalk.send((smalltalk.Array || Array), "_new", []);
self['@started']=false;
return self;}
}),
smalltalk.SmackboneHistorian);

smalltalk.addMethod(
'_addRoute_',
smalltalk.method({
selector: 'addRoute:',
fn: function (aRoute) {
var self=this;
smalltalk.send(self['@routes'], "_add_", [aRoute]);
return self;}
}),
smalltalk.SmackboneHistorian);

smalltalk.addMethod(
'_start',
smalltalk.method({
selector: 'start',
fn: function () {
var self=this;
self['@started']=true;
smalltalk.send(self, "_navigate_", [smalltalk.send(self, "_location", [])]);
return self;}
}),
smalltalk.SmackboneHistorian);

smalltalk.addMethod(
'_navigate_',
smalltalk.method({
selector: 'navigate:',
fn: function (aString) {
var self=this;
try{smalltalk.send((smalltalk.Transcript || Transcript), "_show_", [smalltalk.send("navigating to ", "__comma", [aString])]);
((($receiver = self['@started']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_navigate_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_navigate_', fn: function(){return self}})})();})]));
smalltalk.send(smalltalk.send(smalltalk.send(self['@routes'], "_select_", [(function(route){return smalltalk.send(route, "_doesRespondTo_", [aString]);})]), "_asSet", []), "_do_", [(function(route){return smalltalk.send(route, "_navigate_", [aString]);})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_navigate_'){return e.fn()} throw(e)}}
}),
smalltalk.SmackboneHistorian);

smalltalk.addMethod(
'_handleHashChanged',
smalltalk.method({
selector: 'handleHashChanged',
fn: function () {
var self=this;
smalltalk.send(self, "_navigate_", [smalltalk.send(self, "_location", [])]);
return self;}
}),
smalltalk.SmackboneHistorian);

smalltalk.addMethod(
'_window',
smalltalk.method({
selector: 'window',
fn: function () {
var self=this;
return (typeof window == 'undefined' ? nil : window);
return self;}
}),
smalltalk.SmackboneHistorian);

smalltalk.addMethod(
'_routeView_to_',
smalltalk.method({
selector: 'routeView:to:',
fn: function (aView, aString) {
var self=this;
smalltalk.send(self, "_addRoute_", [smalltalk.send((smalltalk.SmackboneViewRouter || SmackboneViewRouter), "_view_route_", [aView, aString])]);
return self;}
}),
smalltalk.SmackboneHistorian);

smalltalk.addMethod(
'_location',
smalltalk.method({
selector: 'location',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_window", []), "_location", []), "_hash", []), "_replace_with_", [unescape("%23"), ""]);
return self;}
}),
smalltalk.SmackboneHistorian);



smalltalk.addClass('SmackboneViewRouter', smalltalk.SmackboneRouter, [], 'Smackbone');
smalltalk.addMethod(
'_doesRespondTo_',
smalltalk.method({
selector: 'doesRespondTo:',
fn: function (aString) {
var self=this;
return smalltalk.send(self['@route'], "__eq", [aString]);
return self;}
}),
smalltalk.SmackboneViewRouter);

smalltalk.addMethod(
'_navigate_',
smalltalk.method({
selector: 'navigate:',
fn: function (aString) {
var self=this;
try{((($receiver = smalltalk.send(aString, "__eq", [self['@route']])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_navigate_', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_navigate_', fn: function(){return false}})})();})]));
smalltalk.send(self['@view'], "_render", []);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_navigate_'){return e.fn()} throw(e)}}
}),
smalltalk.SmackboneViewRouter);

smalltalk.addMethod(
'_view_',
smalltalk.method({
selector: 'view:',
fn: function (aView) {
var self=this;
self['@view']=aView;
return self;}
}),
smalltalk.SmackboneViewRouter);

smalltalk.addMethod(
'_route_',
smalltalk.method({
selector: 'route:',
fn: function (aString) {
var self=this;
self['@route']=aString;
return self;}
}),
smalltalk.SmackboneViewRouter);


smalltalk.addMethod(
'_view_route_',
smalltalk.method({
selector: 'view:route:',
fn: function (aView, aString) {
var self=this;
return (function($rec){smalltalk.send($rec, "_view_", [aView]);smalltalk.send($rec, "_route_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.SmackboneViewRouter.klass);


