smalltalk.addPackage('DDModel', []);
smalltalk.addClass('Participant', smalltalk.Object, ['name'], 'DDModel');
smalltalk.addMethod(
'_initializeNamed_',
smalltalk.method({
selector: 'initializeNamed:',
fn: function (aName){
var self=this;
self['@name']=aName;
return self;}
}),
smalltalk.Participant);

smalltalk.addMethod(
'_name',
smalltalk.method({
selector: 'name',
fn: function (){
var self=this;
return self['@name'];
return self;}
}),
smalltalk.Participant);

smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
fn: function (aModel){
var self=this;
return smalltalk.send(smalltalk.send(aModel, "_isKindOf_", [smalltalk.send(self, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(aModel, "_name", []), "__eq", [smalltalk.send(self, "_name", [])]);})]);
return self;}
}),
smalltalk.Participant);


smalltalk.addMethod(
'_named_',
smalltalk.method({
selector: 'named:',
fn: function (aName){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeNamed_", [aName]);
return self;}
}),
smalltalk.Participant.klass);


smalltalk.addClass('Participants', smalltalk.Object, ['collection'], 'DDModel');
smalltalk.addMethod(
'_initializeWith_',
smalltalk.method({
selector: 'initializeWith:',
fn: function (aCollection){
var self=this;
self['@collection']=aCollection;
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
fn: function (aBlock){
var self=this;
return smalltalk.send(self['@collection'], "_do_", [aBlock]);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_first',
smalltalk.method({
selector: 'first',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_first", []);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_second',
smalltalk.method({
selector: 'second',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_second", []);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_moveUp_',
smalltalk.method({
selector: 'moveUp:',
fn: function (anElement){
var self=this;
var index=nil;
var theRest=nil;
index=smalltalk.send(self['@collection'], "_indexOf_", [anElement]);
smalltalk.send(self['@collection'], "_remove_", [anElement]);
theRest=smalltalk.send(self['@collection'], "_removeFrom_to_", [((($receiver = index).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), smalltalk.send(self['@collection'], "_size", [])]);
smalltalk.send(self['@collection'], "_add_", [anElement]);
smalltalk.send(self['@collection'], "_add_", [theRest]);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
fn: function (anElement){
var self=this;
smalltalk.send(self['@collection'], "_add_", [anElement]);
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_participants',
smalltalk.method({
selector: 'participants',
fn: function (){
var self=this;
return self['@collection'];
return self;}
}),
smalltalk.Participants);

smalltalk.addMethod(
'_last',
smalltalk.method({
selector: 'last',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_last", []);
return self;}
}),
smalltalk.Participants);


smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
fn: function (aCollection){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initializeWith_", [aCollection]);
return self;}
}),
smalltalk.Participants.klass);

smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
fn: function (){
var self=this;
return smalltalk.send(self, "_with_", [smalltalk.send((smalltalk.Array || Array), "_new", [])]);
return self;}
}),
smalltalk.Participants.klass);


