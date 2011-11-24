smalltalk.addPackage('DDView', []);
smalltalk.addClass('DDView', smalltalk.SmackboneView, ['model'], 'DDView');
smalltalk.addMethod(
'_initializeOn_',
smalltalk.method({
selector: 'initializeOn:',
fn: function (aModel){
var self=this;
self['@model']=aModel;
return self;}
}),
smalltalk.DDView);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aModel){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [aModel]);
return self;}
}),
smalltalk.DDView.klass);


smalltalk.addClass('ParticipantView', smalltalk.DDView, [], 'DDView');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(self['@model'], "_name", [])]);
return self;}
}),
smalltalk.ParticipantView);



smalltalk.addClass('ParticipantsView', smalltalk.DDView, [], 'DDView');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
smalltalk.send(self['@model'], "_do_", [(function(aParticipant){return smalltalk.send(smalltalk.send((smalltalk.ParticipantView || ParticipantView), "_on_", [aParticipant]), "_renderOn_", [html]);})]);
return self;}
}),
smalltalk.ParticipantsView);



