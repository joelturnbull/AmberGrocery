smalltalk.addClass('SmackboneView', smalltalk.Widget, ['el'], 'Smackbone');
smalltalk.addMethod(
unescape('_render'),
smalltalk.method({
selector: unescape('render'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(self['@el'], "_empty", []);
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [self['@el']])]);
return self;},
args: [],
source: unescape('render%0A%09el%20empty.%0A%09self%20renderOn%3A%20%28HTMLCanvas%20onJQuery%3A%20el%29.'),
messageSends: ["empty", "renderOn:", "onJQuery:"],
referencedClasses: [smalltalk.HTMLCanvas]
}),
smalltalk.SmackboneView);

smalltalk.addMethod(
unescape('_el'),
smalltalk.method({
selector: unescape('el'),
category: 'not yet classified',
fn: function () {
var self=this;
return self['@el'];
return self;},
args: [],
source: unescape('el%0A%09%5E%20el'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneView);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
self['@el']=smalltalk.send(unescape("%3Cdiv%3E"), "_asJQuery", []);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09el%20%3A%3D%20%27%3Cdiv%3E%27%20asJQuery.'),
messageSends: ["initialize", "asJQuery"],
referencedClasses: []
}),
smalltalk.SmackboneView);



smalltalk.addClass('SmackboneRouter', smalltalk.Object, [], 'Smackbone');
smalltalk.addMethod(
unescape('_navigate_'),
smalltalk.method({
selector: unescape('navigate%3A'),
category: 'not yet classified',
fn: function (aString) {
var self=this;
smalltalk.send(self, "_perform_", [smalltalk.send(smalltalk.send(self, "_routes", []), "_at_", [aString])]);
return self;},
args: ["aString"],
source: unescape('navigate%3A%20aString%0A%09self%20perform%3A%20%28self%20routes%20at%3A%20aString%29.'),
messageSends: ["perform:", "at:", "routes"],
referencedClasses: []
}),
smalltalk.SmackboneRouter);

smalltalk.addMethod(
unescape('_doesRespondTo_'),
smalltalk.method({
selector: unescape('doesRespondTo%3A'),
category: 'not yet classified',
fn: function (aString) {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_routes", []), "_keys", []), "_includes_", [aString]);
return self;},
args: ["aString"],
source: unescape('doesRespondTo%3A%20aString%0A%09%5E%20self%20routes%20keys%20includes%3A%20aString.'),
messageSends: ["includes:", "keys", "routes"],
referencedClasses: []
}),
smalltalk.SmackboneRouter);


smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
category: 'not yet classified',
fn: function () {
var self=this;

return self;},
args: [],
source: unescape('start'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneRouter.klass);


smalltalk.addClass('SmackboneHistorian', smalltalk.Object, ['routes', 'started'], 'Smackbone');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function () {
var self=this;
self['@routes']=smalltalk.send((smalltalk.Array || Array), "_new", []);
self['@started']=false;
return self;},
args: [],
source: unescape('initialize%0A%09routes%20%3A%3D%20Array%20new.%20%22Array%20because%20Set%20does%20not%20support%20select%3A%20right%20now.%20Will%20be%20converted%20into%20a%20Set%20later.%20Don%27t%20rely%20on%20ordering%21%22%0A%09started%20%3A%3D%20false.'),
messageSends: ["new"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.SmackboneHistorian);

smalltalk.addMethod(
unescape('_addRoute_'),
smalltalk.method({
selector: unescape('addRoute%3A'),
category: 'not yet classified',
fn: function (aRoute) {
var self=this;
smalltalk.send(self['@routes'], "_add_", [aRoute]);
return self;},
args: ["aRoute"],
source: unescape('addRoute%3A%20aRoute%0A%09routes%20add%3A%20aRoute'),
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.SmackboneHistorian);

smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
category: 'not yet classified',
fn: function () {
var self=this;
self['@started']=true;
smalltalk.send(self, "_navigate_", [smalltalk.send(self, "_location", [])]);
return self;},
args: [],
source: unescape('start%0A%09started%20%3A%3D%20true.%0A%09self%20navigate%3A%20self%20location.'),
messageSends: ["navigate:", "location"],
referencedClasses: []
}),
smalltalk.SmackboneHistorian);

smalltalk.addMethod(
unescape('_navigate_'),
smalltalk.method({
selector: unescape('navigate%3A'),
category: 'not yet classified',
fn: function (aString) {
var self=this;
try{smalltalk.send((smalltalk.Transcript || Transcript), "_show_", [smalltalk.send("navigating to ", "__comma", [aString])]);
((($receiver = self['@started']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_navigate_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_navigate_', fn: function(){return self}})})();})]));
smalltalk.send(smalltalk.send(smalltalk.send(self['@routes'], "_select_", [(function(route){return smalltalk.send(route, "_doesRespondTo_", [aString]);})]), "_asSet", []), "_do_", [(function(route){return smalltalk.send(route, "_navigate_", [aString]);})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_navigate_'){return e.fn()} throw(e)}},
args: ["aString"],
source: unescape('navigate%3A%20aString%0A%09Transcript%20show%3A%20%27navigating%20to%20%27%2C%20aString.%0A%09started%20ifFalse%3A%20%5B%20%5E%20self%20%5D.%0A%09%28routes%20select%3A%20%5B%20%3Aroute%20%7C%20route%20doesRespondTo%3A%20aString%20%5D%29%20asSet%20do%3A%20%5B%20%3Aroute%20%7C%20route%20navigate%3A%20aString%20%5D'),
messageSends: ["show:", unescape("%2C"), "ifFalse:", "do:", "asSet", "select:", "doesRespondTo:", "navigate:"],
referencedClasses: [smalltalk.Transcript]
}),
smalltalk.SmackboneHistorian);

smalltalk.addMethod(
unescape('_handleHashChanged'),
smalltalk.method({
selector: unescape('handleHashChanged'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(self, "_navigate_", [smalltalk.send(self, "_location", [])]);
return self;},
args: [],
source: unescape('handleHashChanged%0A%09self%20navigate%3A%20self%20location.'),
messageSends: ["navigate:", "location"],
referencedClasses: []
}),
smalltalk.SmackboneHistorian);

smalltalk.addMethod(
unescape('_window'),
smalltalk.method({
selector: unescape('window'),
category: 'not yet classified',
fn: function () {
var self=this;
return (typeof window == 'undefined' ? nil : window);
return self;},
args: [],
source: unescape('window%0A%09%5E%20window'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneHistorian);

smalltalk.addMethod(
unescape('_routeView_to_'),
smalltalk.method({
selector: unescape('routeView%3Ato%3A'),
category: 'not yet classified',
fn: function (aView, aString) {
var self=this;
smalltalk.send(self, "_addRoute_", [smalltalk.send((smalltalk.SmackboneViewRouter || SmackboneViewRouter), "_view_route_", [aView, aString])]);
return self;},
args: ["aView", "aString"],
source: unescape('routeView%3A%20aView%20to%3A%20aString%0A%09self%20addRoute%3A%20%28SmackboneViewRouter%20view%3A%20aView%20route%3A%20aString%29.'),
messageSends: ["addRoute:", "view:route:"],
referencedClasses: []
}),
smalltalk.SmackboneHistorian);

smalltalk.addMethod(
unescape('_location'),
smalltalk.method({
selector: unescape('location'),
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_window", []), "_location", []), "_hash", []), "_replace_with_", [unescape("%23"), ""]);
return self;},
args: [],
source: unescape('location%0A%09%5E%20self%20window%20location%20hash%20replace%3A%20%27%23%27%20with%3A%20%27%27'),
messageSends: ["replace:with:", "hash", "location", "window"],
referencedClasses: []
}),
smalltalk.SmackboneHistorian);



smalltalk.addClass('SmackboneViewRouter', smalltalk.SmackboneRouter, [], 'Smackbone');
smalltalk.addMethod(
unescape('_doesRespondTo_'),
smalltalk.method({
selector: unescape('doesRespondTo%3A'),
category: 'not yet classified',
fn: function (aString) {
var self=this;
return smalltalk.send(self['@route'], "__eq", [aString]);
return self;},
args: ["aString"],
source: unescape('doesRespondTo%3A%20aString%0A%09%5E%20route%20%3D%20aString.'),
messageSends: [unescape("%3D")],
referencedClasses: []
}),
smalltalk.SmackboneViewRouter);

smalltalk.addMethod(
unescape('_navigate_'),
smalltalk.method({
selector: unescape('navigate%3A'),
category: 'not yet classified',
fn: function (aString) {
var self=this;
try{((($receiver = smalltalk.send(aString, "__eq", [self['@route']])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_navigate_', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_navigate_', fn: function(){return false}})})();})]));
smalltalk.send(self['@view'], "_render", []);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_navigate_'){return e.fn()} throw(e)}},
args: ["aString"],
source: unescape('navigate%3A%20aString%0A%09%28aString%20%3D%20route%29%20ifFalse%3A%20%5B%20%5E%20false%20%5D.%0A%09view%20render.'),
messageSends: ["ifFalse:", unescape("%3D"), "render"],
referencedClasses: []
}),
smalltalk.SmackboneViewRouter);

smalltalk.addMethod(
unescape('_view_'),
smalltalk.method({
selector: unescape('view%3A'),
category: 'not yet classified',
fn: function (aView) {
var self=this;
self['@view']=aView;
return self;},
args: ["aView"],
source: unescape('view%3A%20aView%0A%09view%20%3A%3D%20aView.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneViewRouter);

smalltalk.addMethod(
unescape('_route_'),
smalltalk.method({
selector: unescape('route%3A'),
category: 'not yet classified',
fn: function (aString) {
var self=this;
self['@route']=aString;
return self;},
args: ["aString"],
source: unescape('route%3A%20aString%0A%09route%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneViewRouter);


smalltalk.addMethod(
unescape('_view_route_'),
smalltalk.method({
selector: unescape('view%3Aroute%3A'),
category: 'not yet classified',
fn: function (aView, aString) {
var self=this;
return (function($rec){smalltalk.send($rec, "_view_", [aView]);smalltalk.send($rec, "_route_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aView", "aString"],
source: unescape('view%3A%20aView%20route%3A%20aString%0A%09%5E%20self%20new%20view%3A%20aView%3B%20route%3A%20aString%3B%20yourself.'),
messageSends: ["view:", "route:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.SmackboneViewRouter.klass);


