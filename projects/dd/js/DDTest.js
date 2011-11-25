smalltalk.addPackage('DDTest', []);
smalltalk.addClass('DDTest', smalltalk.TestCase, ['factory'], 'DDTest');
smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
category: 'not yet classified',
fn: function (){
var self=this;
self['@factory']=smalltalk.send((smalltalk.DDFactory || DDFactory), "_new", []);
return self;},
args: [],
source: unescape('setUp%0A%0A%09factory%20%3A%3D%20DDFactory%20new'),
messageSends: ["new"],
referencedClasses: ["DDFactory"]
}),
smalltalk.DDTest);



smalltalk.addClass('DDFactory', smalltalk.Object, ['participants', 'participant', 'members'], 'DDTest');
smalltalk.addMethod(
unescape('_participants'),
smalltalk.method({
selector: unescape('participants'),
category: 'not yet classified',
fn: function (){
var self=this;
return (($receiver = self['@participants']) == nil || $receiver == undefined) ? (function(){return self['@participants']=smalltalk.send((smalltalk.Participants || Participants), "_with_", [smalltalk.send((smalltalk.Array || Array), "_with_with_", [smalltalk.send(self, "_participant", []), smalltalk.send(self, "_participantB", [])])]);})() : $receiver;
return self;},
args: [],
source: unescape('participants%0A%0A%09%5E%20participants%20ifNil%3A%20%5B%20%0A%09%09participants%20%3A%3D%20Participants%20with%3A%20%28%20Array%20%0A%20%20%20%20%20%20%20%20%20%20%09%09with%3A%20self%20participant%0A%20%20%20%20%20%20%20%20%20%20%09%09with%3A%20self%20participantB%20%29%5D%0A%20%20%20%20%20%20%20%20%20'),
messageSends: ["ifNil:", "with:", "with:with:", "participant", "participantB"],
referencedClasses: ["Participants", "Array"]
}),
smalltalk.DDFactory);

smalltalk.addMethod(
unescape('_participant'),
smalltalk.method({
selector: unescape('participant'),
category: 'not yet classified',
fn: function (){
var self=this;
return (($receiver = self['@participant']) == nil || $receiver == undefined) ? (function(){return self['@participant']=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["Thokul Longclaw"]);})() : $receiver;
return self;},
args: [],
source: unescape('participant%0A%0A%09%5E%20participant%20ifNil%3A%20%5B%20participant%20%3A%3D%20Participant%20named%3A%20%27Thokul%20Longclaw%27%20%5D%0A%20%20%20%20%20%20%20%20%20'),
messageSends: ["ifNil:", "named:"],
referencedClasses: ["Participant"]
}),
smalltalk.DDFactory);

smalltalk.addMethod(
unescape('_participantB'),
smalltalk.method({
selector: unescape('participantB'),
category: 'not yet classified',
fn: function (){
var self=this;
return (($receiver = self['@participant']) == nil || $receiver == undefined) ? (function(){return self['@participant']=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["Asmedeus"]);})() : $receiver;
return self;},
args: [],
source: unescape('participantB%0A%0A%09%5E%20participant%20ifNil%3A%20%5B%20participant%20%3A%3D%20Participant%20named%3A%20%27Asmedeus%27%20%5D%0A%20%20%20%20%20%20%20%20%20'),
messageSends: ["ifNil:", "named:"],
referencedClasses: ["Participant"]
}),
smalltalk.DDFactory);



smalltalk.addClass('ParticipantViewTest', smalltalk.DDTest, [], 'DDTest');
smalltalk.addMethod(
unescape('_testDisplaysName'),
smalltalk.method({
selector: unescape('testDisplaysName'),
category: 'not yet classified',
fn: function (){
var self=this;
var model=nil;
var view=nil;
model=smalltalk.send(self['@factory'], "_participant", []);
view=smalltalk.send(smalltalk.send((smalltalk.ParticipantView || ParticipantView), "_on_", [model]), "_render", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "_includesSubString_", [smalltalk.send(model, "_name", [])])]);
return self;},
args: [],
source: unescape('testDisplaysName%0A%7C%20model%20view%20%7C%0A%0A%09model%20%3A%3D%20factory%20participant.%0A%09view%20%3A%3D%20%28%20ParticipantView%20on%3A%20model%20%29%20render.%0A%09self%20assert%3A%20%28%20view%20el%20text%20includesSubString%3A%20model%20name%20%29.'),
messageSends: ["participant", "render", "on:", "assert:", "includesSubString:", "text", "el", "name"],
referencedClasses: ["ParticipantView"]
}),
smalltalk.ParticipantViewTest);



smalltalk.addClass('ParticipantsViewTest', smalltalk.DDTest, [], 'DDTest');
smalltalk.addMethod(
unescape('_testDisplaysNames'),
smalltalk.method({
selector: unescape('testDisplaysNames'),
category: 'not yet classified',
fn: function (){
var self=this;
var collection=nil;
var view=nil;
collection=smalltalk.send(self['@factory'], "_participants", []);
view=smalltalk.send(smalltalk.send((smalltalk.ParticipantsView || ParticipantsView), "_on_", [collection]), "_render", []);
smalltalk.send(collection, "_do_", [(function(aParticipant){return smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "_includesSubString_", [smalltalk.send(aParticipant, "_name", [])])]);})]);
return self;},
args: [],
source: unescape('testDisplaysNames%0A%7C%20collection%20view%20%7C%0A%0A%09collection%20%3A%3D%20factory%20participants.%0A%09view%20%3A%3D%20%28%20ParticipantsView%20on%3A%20collection%20%29%20render.%0A%09collection%20%0A%09%09do%3A%20%5B%20%3AaParticipant%20%7C%20self%20assert%3A%20%28%20view%20el%20text%20includesSubString%3A%20aParticipant%20name%20%29%5D'),
messageSends: ["participants", "render", "on:", "do:", "assert:", "includesSubString:", "text", "el", "name"],
referencedClasses: ["ParticipantsView"]
}),
smalltalk.ParticipantsViewTest);



smalltalk.addClass('ParticipantTest', smalltalk.DDTest, [], 'DDTest');
smalltalk.addMethod(
unescape('_testIsNamed'),
smalltalk.method({
selector: unescape('testIsNamed'),
category: 'not yet classified',
fn: function (){
var self=this;
var model=nil;
var name=nil;
model=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["Thokul Longclaw"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(model, "_name", []), "__eq", ["Thokul Longclaw"])]);
return self;},
args: [],
source: unescape('testIsNamed%0A%7C%20model%20name%20%7C%0A%09%0A%09model%20%3A%3D%20Participant%20named%3A%20%27Thokul%20Longclaw%27.%0A%09self%20assert%3A%20model%20name%20%3D%20%27Thokul%20Longclaw%27.'),
messageSends: ["named:", "assert:", unescape("%3D"), "name"],
referencedClasses: ["Participant"]
}),
smalltalk.ParticipantTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
category: 'not yet classified',
fn: function (){
var self=this;
var a=nil;
var b=nil;
a=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["Thokul Longclaw"]);
b=smalltalk.send((smalltalk.Participant || Participant), "_named_", ["Thokul Longclaw"]);
smalltalk.send(self, "_assert_", [smalltalk.send(a, "__eq", [b])]);
return self;},
args: [],
source: unescape('testEquality%0A%7C%20a%20b%20%7C%0A%09%0A%09a%20%3A%3D%20Participant%20named%3A%20%27Thokul%20Longclaw%27.%0A%09b%20%3A%3D%20Participant%20named%3A%20%27Thokul%20Longclaw%27.%0A%09self%20assert%3A%20a%20%3D%20b.'),
messageSends: ["named:", "assert:", unescape("%3D")],
referencedClasses: ["Participant"]
}),
smalltalk.ParticipantTest);



smalltalk.addClass('ParticipantsTest', smalltalk.DDTest, [], 'DDTest');
smalltalk.addMethod(
unescape('_testMoveUp'),
smalltalk.method({
selector: unescape('testMoveUp'),
category: 'not yet classified',
fn: function (){
var self=this;
var participants=nil;
participants=smalltalk.send(self['@factory'], "_participants", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_first", []), "__eq", [smalltalk.send(self['@factory'], "_participant", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_second", []), "__eq", [smalltalk.send(self['@factory'], "_participantB", [])])]);
smalltalk.send(participants, "_moveUp_", [smalltalk.send(self['@factory'], "_participantB", [])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_first", []), "__eq", [smalltalk.send(self['@factory'], "_participantB", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_second", []), "__eq", [smalltalk.send(self['@factory'], "_participant", [])])]);
return self;},
args: [],
source: unescape('testMoveUp%0A%7C%20participants%20%7C%0A%09participants%20%3A%3D%20factory%20participants.%0A%09self%20assert%3A%20participants%20first%20%3D%20factory%20participant.%0A%09self%20assert%3A%20participants%20second%20%3D%20factory%20participantB.%0A%09participants%20moveUp%3A%20factory%20participantB.%0A%09self%20assert%3A%20participants%20first%20%3D%20factory%20participantB.%0A%09self%20assert%3A%20participants%20second%20%3D%20factory%20participant.%0A%09'),
messageSends: ["participants", "assert:", unescape("%3D"), "first", "participant", "second", "participantB", "moveUp:"],
referencedClasses: []
}),
smalltalk.ParticipantsTest);

smalltalk.addMethod(
unescape('_testMoveUpFirst'),
smalltalk.method({
selector: unescape('testMoveUpFirst'),
category: 'not yet classified',
fn: function (){
var self=this;
var participants=nil;
participants=smalltalk.send(self['@factory'], "_participants", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_first", []), "__eq", [smalltalk.send(self['@factory'], "_participant", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_second", []), "__eq", [smalltalk.send(self['@factory'], "_participantB", [])])]);
smalltalk.send(participants, "_moveUp_", [smalltalk.send(self['@factory'], "_participant", [])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_first", []), "__eq", [smalltalk.send(self['@factory'], "_participantB", [])])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(participants, "_second", []), "__eq", [smalltalk.send(self['@factory'], "_participant", [])])]);
return self;},
args: [],
source: unescape('testMoveUpFirst%0A%7C%20participants%20%7C%0A%09participants%20%3A%3D%20factory%20participants.%0A%09self%20assert%3A%20participants%20first%20%3D%20factory%20participant.%0A%09self%20assert%3A%20participants%20second%20%3D%20factory%20participantB.%0A%09participants%20moveUp%3A%20factory%20participant.%0A%09self%20assert%3A%20participants%20first%20%3D%20factory%20participantB.%0A%09self%20assert%3A%20participants%20second%20%3D%20factory%20participant.%0A%09'),
messageSends: ["participants", "assert:", unescape("%3D"), "first", "participant", "second", "participantB", "moveUp:"],
referencedClasses: []
}),
smalltalk.ParticipantsTest);

smalltalk.addMethod(
unescape('_testMoveUpMiddle'),
smalltalk.method({
selector: unescape('testMoveUpMiddle'),
category: 'not yet classified',
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
return self;},
args: [],
source: unescape('testMoveUpMiddle%0A%7C%20participants%20a%20b%20c%20d%20e%20%7C%0A%09participants%20%3A%3D%20Participants%20new.%0A%09a%20%3A%3D%20Participant%20named%3A%20%27a%27.%0A%09b%20%3A%3D%20Participant%20named%3A%20%27b%27.%0A%09c%20%3A%3D%20Participant%20named%3A%20%27c%27.%0A%09d%20%3A%3D%20Participant%20named%3A%20%27d%27.%0A%09e%20%3A%3D%20Participant%20named%3A%20%27e%27.%0A%09participants%20add%3A%20a%3B%20add%3A%20b%3B%20add%3A%20c%3B%20add%3A%20d%3B%20add%3A%20e.%0A%09self%20assert%3A%20participants%20first%20%3D%20a.%0A%09self%20assert%3A%20participants%20second%20%3D%20b.%0A%09self%20assert%3A%20participants%20last%20%3D%20e.%0A%09participants%20moveUp%3A%20c.%0A%09self%20assert%3A%20participants%20first%20%3D%20a.%0A%09self%20assert%3A%20participants%20second%20%3D%20c.%0A%09self%20assert%3A%20participants%20last%20%3D%20e.'),
messageSends: ["new", "named:", "add:", "assert:", unescape("%3D"), "first", "second", "last", "moveUp:"],
referencedClasses: ["Participants", "Participant"]
}),
smalltalk.ParticipantsTest);

smalltalk.addMethod(
unescape('_testNew'),
smalltalk.method({
selector: unescape('testNew'),
category: 'not yet classified',
fn: function (){
var self=this;
var model=nil;
model=smalltalk.send((smalltalk.Participants || Participants), "_new", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(model, "_participants", []), "_isEmpty", [])]);
return self;},
args: [],
source: unescape('testNew%0A%7C%20model%20%7C%0A%09model%20%3A%3D%20Participants%20new.%0A%09self%20assert%3A%20model%20participants%20isEmpty.'),
messageSends: ["new", "assert:", "isEmpty", "participants"],
referencedClasses: ["Participants"]
}),
smalltalk.ParticipantsTest);



