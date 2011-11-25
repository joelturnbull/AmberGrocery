smalltalk.addPackage('DDTest', []);
smalltalk.addClass('DDTest', smalltalk.TestCase, ['factory'], 'DDTest');
smalltalk.addMethod(
'_setUp',
smalltalk.method({
selector: 'setUp',
fn: function (){
var self=this;
self['@factory']=smalltalk.send((smalltalk.DDFactory || DDFactory), "_new", []);
return self;}
}),
smalltalk.DDTest);



smalltalk.addClass('DDFactory', smalltalk.Object, ['participants', 'participant', 'members'], 'DDTest');
smalltalk.addMethod(
'_participants',
smalltalk.method({
selector: 'participants',
fn: function (){
var self=this;
return (($receiver = self['@participants']) == nil || $receiver == undefined) ? (function(){return self['@participants']=smalltalk.send((smalltalk.Participants || Participants), "_with_", [smalltalk.send((smalltalk.Array || Array), "_with_with_", [smalltalk.send(self, "_participant", []), smalltalk.send(self, "_participantB", [])])]);})() : $receiver;
return self;}
}),
smalltalk.DDFactory);

smalltalk.addMethod(
'_participant',
smalltalk.method({
selector: 'participant',
fn: function (){
var self=this;
return (($receiver = self['@participant']) == nil || $receiver == undefined) ? (function(){return self['@participant']=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["Thokul Longclaw"]);})() : $receiver;
return self;}
}),
smalltalk.DDFactory);

smalltalk.addMethod(
'_participantB',
smalltalk.method({
selector: 'participantB',
fn: function (){
var self=this;
return (($receiver = self['@participant']) == nil || $receiver == undefined) ? (function(){return self['@participant']=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["Asmedeus"]);})() : $receiver;
return self;}
}),
smalltalk.DDFactory);



smalltalk.addClass('ParticipantViewTest', smalltalk.DDTest, [], 'DDTest');
smalltalk.addMethod(
'_testDisplaysName',
smalltalk.method({
selector: 'testDisplaysName',
fn: function (){
var self=this;
var model=nil;
var view=nil;
model=smalltalk.send(self['@factory'], "_participant", []);
view=smalltalk.send(smalltalk.send((smalltalk.ParticipantView || ParticipantView), "_on_", [model]), "_render", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "_includesSubString_", [smalltalk.send(model, "_name", [])])]);
return self;}
}),
smalltalk.ParticipantViewTest);



smalltalk.addClass('ParticipantsViewTest', smalltalk.DDTest, [], 'DDTest');
smalltalk.addMethod(
'_testDisplaysNames',
smalltalk.method({
selector: 'testDisplaysNames',
fn: function (){
var self=this;
var collection=nil;
var view=nil;
collection=smalltalk.send(self['@factory'], "_participants", []);
view=smalltalk.send(smalltalk.send((smalltalk.ParticipantsView || ParticipantsView), "_on_", [collection]), "_render", []);
smalltalk.send(collection, "_do_", [(function(aParticipant){return smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "_includesSubString_", [smalltalk.send(aParticipant, "_name", [])])]);})]);
return self;}
}),
smalltalk.ParticipantsViewTest);



smalltalk.addClass('ParticipantTest', smalltalk.DDTest, [], 'DDTest');
smalltalk.addMethod(
'_testIsNamed',
smalltalk.method({
selector: 'testIsNamed',
fn: function (){
var self=this;
var model=nil;
var name=nil;
model=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["Thokul Longclaw"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(model, "_name", []), "__eq", ["Thokul Longclaw"])]);
return self;}
}),
smalltalk.ParticipantTest);

smalltalk.addMethod(
'_testEquality',
smalltalk.method({
selector: 'testEquality',
fn: function (){
var self=this;
var a=nil;
var b=nil;
a=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["Thokul Longclaw"]);
b=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["Thokul Longclaw"]);
smalltalk.send(self, "_assert_", [smalltalk.send(a, "__eq", [b])]);
return self;}
}),
smalltalk.ParticipantTest);



smalltalk.addClass('ParticipantsTest', smalltalk.DDTest, [], 'DDTest');
smalltalk.addMethod(
'_testMoveUp',
smalltalk.method({
selector: 'testMoveUp',
fn: function (){
var self=this;
var participants=nil;
participants=smalltalk.send(self['@factory'], "_participants", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_first", []), "__eq", [smalltalk.send(self['@factory'], "_participant", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_second", []), "__eq", [smalltalk.send(self['@factory'], "_participantB", [])])]);
smalltalk.send(participants, "_moveUp_", [smalltalk.send(self['@factory'], "_participantB", [])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_first", []), "__eq", [smalltalk.send(self['@factory'], "_participantB", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_second", []), "__eq", [smalltalk.send(self['@factory'], "_participant", [])])]);
return self;}
}),
smalltalk.ParticipantsTest);

smalltalk.addMethod(
'_testMoveUpFirst',
smalltalk.method({
selector: 'testMoveUpFirst',
fn: function (){
var self=this;
var participants=nil;
participants=smalltalk.send(self['@factory'], "_participants", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_first", []), "__eq", [smalltalk.send(self['@factory'], "_participant", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_second", []), "__eq", [smalltalk.send(self['@factory'], "_participantB", [])])]);
smalltalk.send(participants, "_moveUp_", [smalltalk.send(self['@factory'], "_participant", [])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_first", []), "__eq", [smalltalk.send(self['@factory'], "_participantB", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_second", []), "__eq", [smalltalk.send(self['@factory'], "_participant", [])])]);
return self;}
}),
smalltalk.ParticipantsTest);

smalltalk.addMethod(
'_testMoveUpMiddle',
smalltalk.method({
selector: 'testMoveUpMiddle',
fn: function (){
var self=this;
var participants=nil;
var a=nil;
var b=nil;
var c=nil;
var d=nil;
var e=nil;
participants=smalltalk.send((smalltalk.Participants || Participants), "_new", []);
a=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["a"]);
b=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["b"]);
c=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["c"]);
d=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["d"]);
e=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["e"]);
(function($rec){smalltalk.send($rec, "_add_", [a]);smalltalk.send($rec, "_add_", [b]);smalltalk.send($rec, "_add_", [c]);smalltalk.send($rec, "_add_", [d]);return smalltalk.send($rec, "_add_", [e]);})(participants);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_first", []), "__eq", [a])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_second", []), "__eq", [b])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_last", []), "__eq", [e])]);
smalltalk.send(participants, "_moveUp_", [c]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_first", []), "__eq", [a])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_second", []), "__eq", [c])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_last", []), "__eq", [e])]);
return self;}
}),
smalltalk.ParticipantsTest);

smalltalk.addMethod(
'_testNew',
smalltalk.method({
selector: 'testNew',
fn: function (){
var self=this;
var model=nil;
model=smalltalk.send((smalltalk.Participants || Participants), "_new", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(model, "_participants", []), "_isEmpty", [])]);
return self;}
}),
smalltalk.ParticipantsTest);



