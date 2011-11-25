smalltalk.addPackage('DDModel', []);
smalltalk.addClass('Participant', smalltalk.Object, ['name'], 'DDModel');
smalltalk.addMethod(
unescape('_initializeNamed_'),
smalltalk.method({
selector: unescape('initializeNamed%3A'),
category: 'not yet classified',
fn: function (aName){
var self=this;
self['@name']=aName;
return self;},
args: ["aName"],
source: unescape('initializeNamed%3A%20aName%0A%09name%20%3A%3D%20aName'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Participant);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@name'];
return self;},
args: [],
source: unescape('name%0A%09%5E%20name'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Participant);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'not yet classified',
fn: function (aModel){
var self=this;
return smalltalk.send(smalltalk.send(aModel, "_isKindOf_", [smalltalk.send(self, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(aModel, "_name", []), "__eq", [smalltalk.send(self, "_name", [])]);})]);
return self;},
args: ["aModel"],
source: unescape('%3D%20aModel%0A%0A%09%5E%20%28%20aModel%20isKindOf%3A%20self%20class%20%29%20%0A%09%09and%3A%20%5B%20aModel%20name%20%3D%20self%20name%20%5D'),
messageSends: ["and:", "isKindOf:", "class", unescape("%3D"), "name"],
referencedClasses: []
}),
smalltalk.Participant);


smalltalk.addMethod(
unescape('_named_'),
smalltalk.method({
selector: unescape('named%3A'),
category: 'not yet classified',
fn: function (aName){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeNamed_", [aName]);
return self;},
args: ["aName"],
source: unescape('named%3A%20aName%0A%0A%09%5E%20self%20new%20initializeNamed%3A%20aName'),
messageSends: ["initializeNamed:", "new"],
referencedClasses: []
}),
smalltalk.Participant.klass);


smalltalk.addClass('Participants', smalltalk.Object, ['collection'], 'DDModel');
smalltalk.addMethod(
unescape('_initializeWith_'),
smalltalk.method({
selector: unescape('initializeWith%3A'),
category: 'not yet classified',
fn: function (aCollection){
var self=this;
self['@collection']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('initializeWith%3A%20aCollection%0A%0A%09collection%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
category: 'not yet classified',
fn: function (aBlock){
var self=this;
return smalltalk.send(self['@collection'], "_do_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('do%3A%20aBlock%0A%0A%09%5E%20collection%20do%3A%20aBlock'),
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_first'),
smalltalk.method({
selector: unescape('first'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_first", []);
return self;},
args: [],
source: unescape('first%20%0A%09%5E%20collection%20first'),
messageSends: ["first"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_second'),
smalltalk.method({
selector: unescape('second'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_second", []);
return self;},
args: [],
source: unescape('second%20%0A%09%5E%20collection%20second'),
messageSends: ["second"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_moveUp_'),
smalltalk.method({
selector: unescape('moveUp%3A'),
category: 'not yet classified',
fn: function (anElement){
var self=this;
var index=nil;
var theRest=nil;
index=smalltalk.send(self['@collection'], "_indexOf_", [anElement]);
smalltalk.send(self['@collection'], "_remove_", [anElement]);
theRest=smalltalk.send(self['@collection'], "_removeFrom_to_", [((($receiver = index).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), smalltalk.send(self['@collection'], "_size", [])]);
smalltalk.send(self['@collection'], "_add_", [anElement]);
smalltalk.send(self['@collection'], "_add_", [theRest]);
return self;},
args: ["anElement"],
source: unescape('moveUp%3A%20anElement%0A%7C%20index%20theRest%20%7C%0A%09index%20%3A%3D%20collection%20indexOf%3A%20anElement.%0A%09collection%20remove%3A%20anElement.%0A%09theRest%20%3A%3D%20collection%20removeFrom%3A%20%28%20index%20-%201%20%29%20to%3A%20collection%20size.%0A%09collection%20add%3A%20anElement.%0A%09collection%20add%3A%20theRest.'),
messageSends: ["indexOf:", "remove:", "removeFrom:to:", unescape("-"), "size", "add:"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'not yet classified',
fn: function (anElement){
var self=this;
smalltalk.send(self['@collection'], "_add_", [anElement]);
return self;},
args: ["anElement"],
source: unescape('add%3A%20anElement%0A%09collection%20add%3A%20anElement'),
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_participants'),
smalltalk.method({
selector: unescape('participants'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@collection'];
return self;},
args: [],
source: unescape('participants%0A%0A%09%5E%20collection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Participants);

smalltalk.addMethod(
unescape('_last'),
smalltalk.method({
selector: unescape('last'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(self['@collection'], "_last", []);
return self;},
args: [],
source: unescape('last%0A%09%5E%20collection%20last'),
messageSends: ["last"],
referencedClasses: []
}),
smalltalk.Participants);


smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
category: 'not yet classified',
fn: function (aCollection){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initializeWith_", [aCollection]);
return self;},
args: ["aCollection"],
source: unescape('with%3A%20aCollection%0A%0A%09%5E%20self%20basicNew%20initializeWith%3A%20aCollection'),
messageSends: ["initializeWith:", "basicNew"],
referencedClasses: []
}),
smalltalk.Participants.klass);

smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(self, "_with_", [smalltalk.send((smalltalk.Array || Array), "_new", [])]);
return self;},
args: [],
source: unescape('new%0A%0A%09%5E%20self%20with%3A%20Array%20new.'),
messageSends: ["with:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Participants.klass);


