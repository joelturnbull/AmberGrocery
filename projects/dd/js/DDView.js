smalltalk.addPackage('DDView', []);
smalltalk.addClass('DDView', smalltalk.SmackboneView, ['model'], 'DDView');
smalltalk.addMethod(
unescape('_initializeOn_'),
smalltalk.method({
selector: unescape('initializeOn%3A'),
category: 'not yet classified',
fn: function (aModel){
var self=this;
self['@model']=aModel;
return self;},
args: ["aModel"],
source: unescape('initializeOn%3A%20aModel%0A%0A%09model%20%3A%3D%20aModel'),
messageSends: [],
referencedClasses: []
}),
smalltalk.DDView);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'not yet classified',
fn: function (aModel){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [aModel]);
return self;},
args: ["aModel"],
source: unescape('on%3A%20aModel%0A%0A%09%5E%20self%20new%20initializeOn%3A%20aModel'),
messageSends: ["initializeOn:", "new"],
referencedClasses: []
}),
smalltalk.DDView.klass);


smalltalk.addClass('ParticipantView', smalltalk.DDView, [], 'DDView');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(self['@model'], "_name", [])]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09html%20div%20with%3A%20model%20name'),
messageSends: ["with:", "div", "name"],
referencedClasses: []
}),
smalltalk.ParticipantView);



smalltalk.addClass('ParticipantsView', smalltalk.DDView, [], 'DDView');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
smalltalk.send(self['@model'], "_do_", [(function(aParticipant){return smalltalk.send(smalltalk.send((smalltalk.ParticipantView || ParticipantView), "_on_", [aParticipant]), "_renderOn_", [html]);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09model%20%0A%09%09do%3A%20%5B%20%3AaParticipant%20%7C%20%28%20ParticipantView%20on%3A%20aParticipant%20%29%20renderOn%3A%20html%20%5D'),
messageSends: ["do:", "renderOn:", "on:"],
referencedClasses: ["ParticipantView"]
}),
smalltalk.ParticipantsView);



