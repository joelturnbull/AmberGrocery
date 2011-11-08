smalltalk.addClass('SmackboneWelcome', smalltalk.SmackboneView, ['numRenders'], 'Smackbone-Examples');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_h1_", [unescape("Welcome%20to%20Smackbone%21")]);
smalltalk.send(html, "_p_", [smalltalk.send("This is a Smackbone view. It is similar to an Amber Widget in that you define its appearance by implementing renderOn: in your widget subclass. ", "__comma", [unescape("A%20SmackboneView%20can%20attach%20itself%20to%20a%20DOM%20element%2C%20and%20then%20be%20told%20to%20render%20whenever%20you%20want%20to%20update%20the%20user%27s%20view.")])]);
smalltalk.send(html, "_p_", ["Smackbone also provides a simple routing system so you can build apps that transition through different sections via url clicks"]);
smalltalk.send(html, "_p_", [unescape("Amber%20and%20Smackbone%20make%20it%20really%20easy%20to%20write%20automated%20tests%20for%20your%20Javascript%20code%2C%20whether%20it%27s%20models%2C%20routers%2C%20or%20views.")]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(){smalltalk.send(html, "_with_", ["Start the "]);(function($rec){smalltalk.send($rec, "_href_", [unescape("%23tutorial")]);return smalltalk.send($rec, "_with_", ["tutorial"]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [" or check out the "]);(function($rec){smalltalk.send($rec, "_href_", [unescape("%23examples")]);return smalltalk.send($rec, "_with_", ["examples"]);})(smalltalk.send(html, "_a", []));return smalltalk.send(html, "_with_", ["."]);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20h1%3A%20%27Welcome%20to%20Smackbone%21%27.%0A%09html%20p%3A%20%28%27This%20is%20a%20Smackbone%20view.%20It%20is%20similar%20to%20an%20Amber%20Widget%20in%20that%20you%20define%20its%20appearance%20by%20implementing%20renderOn%3A%20in%20your%20widget%20subclass.%20%27%20%2C%0A%09%09%27A%20SmackboneView%20can%20attach%20itself%20to%20a%20DOM%20element%2C%20and%20then%20be%20told%20to%20render%20whenever%20you%20want%20to%20update%20the%20user%27%27s%20view.%27%29.%0A%09html%20p%3A%20%27Smackbone%20also%20provides%20a%20simple%20routing%20system%20so%20you%20can%20build%20apps%20that%20transition%20through%20different%20sections%20via%20url%20clicks%27.%0A%09html%20p%3A%20%27Amber%20and%20Smackbone%20make%20it%20really%20easy%20to%20write%20automated%20tests%20for%20your%20Javascript%20code%2C%20whether%20it%27%27s%20models%2C%20routers%2C%20or%20views.%27.%0A%09html%20p%20with%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20html%20with%3A%20%27Start%20the%20%27.%0A%20%20%20%20%20%20%20%20%20%20html%20a%20href%3A%20%27%23tutorial%27%3B%20with%3A%20%27tutorial%27.%0A%20%20%20%20%20%20%20%20%20%20html%20with%3A%20%27%20or%20check%20out%20the%20%27.%0A%20%20%20%20%20%20%20%20%20%20html%20a%20href%3A%20%27%23examples%27%3B%20with%3A%20%27examples%27.%0A%20%20%20%20%20%20%20%20%20%20html%20with%3A%20%27.%27.%20%5D.'),
messageSends: ["h1:", "p:", unescape("%2C"), "with:", "p", "href:", "a"],
referencedClasses: []
}),
smalltalk.SmackboneWelcome);



smalltalk.addClass('SmackboneTutorial', smalltalk.SmackboneView, ['page'], 'Smackbone-Examples');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_h1_", ["Smackbone Tutorial"]);
smalltalk.send(self, "_perform_withArguments_", [smalltalk.send(smalltalk.send("renderPage", "__comma", [smalltalk.send(self['@page'], "_asString", [])]), "__comma", ["On:"]), [html]]);
smalltalk.send(self, "_renderNavLinksOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20h1%3A%20%27Smackbone%20Tutorial%27.%0A%09self%20perform%3A%20%27renderPage%27%20%2C%20page%20asString%20%2C%20%27On%3A%27%20withArguments%3A%20%7Bhtml%7D.%0A%09self%20renderNavLinksOn%3A%20html.'),
messageSends: ["h1:", "perform:withArguments:", unescape("%2C"), "asString", "renderNavLinksOn:"],
referencedClasses: []
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
unescape('_renderPage1On_'),
smalltalk.method({
selector: unescape('renderPage1On%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", [smalltalk.send("This is a Smackbone view. It is similar to an Amber Widget in that you define its appearance by implementing renderOn: in your widget subclass. ", "__comma", [unescape("A%20SmackboneView%20can%20attach%20itself%20to%20a%20DOM%20element%2C%20and%20then%20be%20told%20to%20render%20whenever%20you%20want%20to%20update%20the%20user%27s%20view.")])]);
return self;},
args: ["html"],
source: unescape('renderPage1On%3A%20html%0A%09html%20p%3A%20%28%27This%20is%20a%20Smackbone%20view.%20It%20is%20similar%20to%20an%20Amber%20Widget%20in%20that%20you%20define%20its%20appearance%20by%20implementing%20renderOn%3A%20in%20your%20widget%20subclass.%20%27%20%2C%0A%09%09%27A%20SmackboneView%20can%20attach%20itself%20to%20a%20DOM%20element%2C%20and%20then%20be%20told%20to%20render%20whenever%20you%20want%20to%20update%20the%20user%27%27s%20view.%27%29.'),
messageSends: ["p:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.SmackboneView);
self['@page']=(1);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09page%20%3A%3D%201.'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
unescape('_hasMorePages'),
smalltalk.method({
selector: unescape('hasMorePages'),
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicAt_", [smalltalk.send(smalltalk.send("_renderPage", "__comma", [smalltalk.send(((($receiver = self['@page']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])), "_asString", [])]), "__comma", ["On_"])]), "_notNil", []);
return self;},
args: [],
source: unescape('hasMorePages%0A%09%5E%20%28self%20basicAt%3A%20%20%27_renderPage%27%20%2C%20%28page%20+%201%29%20asString%20%2C%20%27On_%27%29%20notNil.%20'),
messageSends: ["notNil", "basicAt:", unescape("%2C"), "asString", unescape("+")],
referencedClasses: []
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
unescape('_renderNavLinksOn_'),
smalltalk.method({
selector: unescape('renderNavLinksOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
((($receiver = smalltalk.send(self, "_hasPrevPages", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23tutorial-previous")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_previous", []);})]);return smalltalk.send($rec, "_with_", ["previous"]);})(smalltalk.send(html, "_a", []));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23tutorial-previous")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_previous", []);})]);return smalltalk.send($rec, "_with_", ["previous"]);})(smalltalk.send(html, "_a", []));})]));
smalltalk.send(html, "_with_", [" "]);
((($receiver = smalltalk.send(self, "_hasMorePages", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23tutorial-next")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_next", []);})]);return smalltalk.send($rec, "_with_", ["next"]);})(smalltalk.send(html, "_a", []));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23tutorial-next")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_next", []);})]);return smalltalk.send($rec, "_with_", ["next"]);})(smalltalk.send(html, "_a", []));})]));
return self;},
args: ["html"],
source: unescape('renderNavLinksOn%3A%20html%0A%09self%20hasPrevPages%20ifTrue%3A%20%5B%20html%20a%20href%3A%20%27%23tutorial-previous%27%3B%20onClick%3A%20%5B%20self%20previous%20%5D%3B%20with%3A%20%27previous%27%20%5D.%0A%09html%20with%3A%20%27%20%27.%0A%09self%20hasMorePages%20ifTrue%3A%20%5B%20html%20a%20href%3A%20%27%23tutorial-next%27%3B%20onClick%3A%20%5B%20self%20next%20%5D%3B%20with%3A%20%27next%27%20%5D.%0A'),
messageSends: ["ifTrue:", "hasPrevPages", "href:", "onClick:", "previous", "with:", "a", "hasMorePages", "next"],
referencedClasses: []
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
unescape('_hasPrevPages'),
smalltalk.method({
selector: unescape('hasPrevPages'),
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicAt_", [smalltalk.send(smalltalk.send("_renderPage", "__comma", [smalltalk.send(((($receiver = self['@page']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), "_asString", [])]), "__comma", ["On_"])]), "_notNil", []);
return self;},
args: [],
source: unescape('hasPrevPages%0A%09%5E%20%28self%20basicAt%3A%20%20%27_renderPage%27%20%2C%20%28page%20-%201%29%20asString%20%2C%20%27On_%27%29%20notNil.%20'),
messageSends: ["notNil", "basicAt:", unescape("%2C"), "asString", unescape("-")],
referencedClasses: []
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
unescape('_renderPage2On_'),
smalltalk.method({
selector: unescape('renderPage2On%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", ["Smackbone views are nifty things. They can show you the code that builds the page."]);
return self;},
args: ["html"],
source: unescape('renderPage2On%3A%20html%0A%09html%20p%3A%20%27Smackbone%20views%20are%20nifty%20things.%20They%20can%20show%20you%20the%20code%20that%20builds%20the%20page.%27.'),
messageSends: ["p:"],
referencedClasses: []
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
unescape('_next'),
smalltalk.method({
selector: unescape('next'),
category: 'not yet classified',
fn: function () {
var self=this;
((($receiver = smalltalk.send(self, "_hasMorePages", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@page']=((($receiver = self['@page']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return self['@page']=((($receiver = self['@page']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]));
smalltalk.send(self, "_render", []);
return self;},
args: [],
source: unescape('next%0A%09self%20hasMorePages%20ifTrue%3A%20%5B%20page%20%3A%3D%20page%20+%201.%20%5D.%0A%09self%20render.'),
messageSends: ["ifTrue:", "hasMorePages", unescape("+"), "render"],
referencedClasses: []
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
unescape('_previous'),
smalltalk.method({
selector: unescape('previous'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send((smalltalk.Transcript || Transcript), "_show_", [unescape("called%20previous%21")]);
((($receiver = smalltalk.send(self, "_hasPrevPages", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@page']=((($receiver = self['@page']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return self['@page']=((($receiver = self['@page']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]));})]));
smalltalk.send(self, "_render", []);
return self;},
args: [],
source: unescape('previous%0A%09Transcript%20show%3A%20%27called%20previous%21%27.%0A%09self%20hasPrevPages%20ifTrue%3A%20%5B%20page%20%3A%3D%20page%20-%201.%20%5D.%0A%09self%20render.'),
messageSends: ["show:", "ifTrue:", "hasPrevPages", unescape("-"), "render"],
referencedClasses: [smalltalk.Transcript]
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
unescape('_renderPage3On_'),
smalltalk.method({
selector: unescape('renderPage3On%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", [unescape("Here%27s%20how%20I%20built%20the%20previous%20page%21")]);
smalltalk.send(smalltalk.send(self, "_el", []), "_append_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.SmackboneCodeView || SmackboneCodeView), "_onClass_method_", [(smalltalk.SmackboneTutorial || SmackboneTutorial), "renderPage2On:"]), "_render", []), "_el", [])]);
return self;},
args: ["html"],
source: unescape('renderPage3On%3A%20html%0A%09html%20p%3A%20%27Here%27%27s%20how%20I%20built%20the%20previous%20page%21%27.%0A%09self%20el%20append%3A%20%28SmackboneCodeView%20onClass%3A%20SmackboneTutorial%20method%3A%20%27renderPage2On%3A%27%29%20render%20el.'),
messageSends: ["p:", "append:", "el", "render", "onClass:method:"],
referencedClasses: [smalltalk.nil,smalltalk.SmackboneTutorial]
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
unescape('_renderPage4On_'),
smalltalk.method({
selector: unescape('renderPage4On%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", [unescape("Here%27s%20how%20you%20can%20build%20the%20welcome%20page")]);
smalltalk.send(smalltalk.send(self, "_el", []), "_append_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.SmackboneCodeView || SmackboneCodeView), "_onClass_method_", [(smalltalk.SmackboneWelcome || SmackboneWelcome), "renderOn:"]), "_render", []), "_el", [])]);
return self;},
args: ["html"],
source: unescape('renderPage4On%3A%20html%0A%09html%20p%3A%20%27Here%27%27s%20how%20you%20can%20build%20the%20welcome%20page%27.%0A%09self%20el%20append%3A%20%28SmackboneCodeView%20onClass%3A%20SmackboneWelcome%20method%3A%20%27renderOn%3A%27%29%20render%20el.'),
messageSends: ["p:", "append:", "el", "render", "onClass:method:"],
referencedClasses: [smalltalk.nil,smalltalk.SmackboneWelcome]
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
unescape('_renderPage5On_'),
smalltalk.method({
selector: unescape('renderPage5On%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", ["Amber lets you build HTML views programmatically. You can create links that execute a block of code when clicked. This block has access to javascript objects like window and document"]);
smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [smalltalk.send(smalltalk.send(html, "_pre", []), "_with_", [unescape("html%20a%20href%3A%20%27%23%27%3B%20onClick%3A%20%5B%20window%20alert%3A%20%27Smalltalk%20in%20the%20browser.%20Cool%21%27%5D%3B%20with%3A%20%27Click%20Here...%27%20.")])]);
smalltalk.send(html, "_p_", [(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [unescape("Smalltalk%20in%20the%20browser.%20Cool%21")]);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", ["Click Here..."]);})(smalltalk.send(html, "_a", []))]);
return self;},
args: ["html"],
source: unescape('renderPage5On%3A%20html%0A%09html%20p%3A%20%27Amber%20lets%20you%20build%20HTML%20views%20programmatically.%20You%20can%20create%20links%20that%20execute%20a%20block%20of%20code%20when%20clicked.%20This%20block%20has%20access%20to%20javascript%20objects%20like%20window%20and%20document%27.%0A%09html%20code%20with%3A%20%28html%20pre%20with%3A%20%27html%20a%20href%3A%20%27%27%23%27%27%3B%20onClick%3A%20%5B%20window%20alert%3A%20%27%27Smalltalk%20in%20the%20browser.%20Cool%21%27%27%5D%3B%20with%3A%20%27%27Click%20Here...%27%27%20.%27%29.%0A%09html%20p%3A%20%28html%20a%20href%3A%20%27%23%27%3B%20onClick%3A%20%5B%20%3Ae%20%7C%20window%20alert%3A%20%27Smalltalk%20in%20the%20browser.%20Cool%21%27.%20e%20preventDefault%20%5D%3B%20with%3A%20%27Click%20Here...%27%29.'),
messageSends: ["p:", "with:", "code", "pre", "href:", "onClick:", "alert:", "preventDefault", "a"],
referencedClasses: []
}),
smalltalk.SmackboneTutorial);

smalltalk.addMethod(
unescape('_renderPage6On_'),
smalltalk.method({
selector: unescape('renderPage6On%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", [smalltalk.send(unescape("In%20addition%20to%20rendering%20views%20as%20a%20result%20of%20an%20onClick%3A%20handler%2C%20you%20can%20use%20routers%20to%20define%20a%20set%20of%20behaviors%20to%20perform%20when%20a%20user%20clicks%20a%20link.%20"), "__comma", [unescape("Your%20router%20subclass%20defines%20%23routes%20and%20maps%20a%20route%20to%20a%20method.")])]);
smalltalk.send(self['@el'], "_append_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.SmackboneCodeView || SmackboneCodeView), "_onClass_method_", [(smalltalk.SmackboneWelcomeRouter || SmackboneWelcomeRouter), "routes"]), "_render", []), "_el", [])]);
smalltalk.send(html, "_p_", [unescape("This%20sets%20up%20a%20route%20so%20that%20calling%20SmackboneHistory%20navigate%3A%20%27%27%20calls%20the%20welcome%20method%2C%20which%20tells%20a%20SmackboneWelcome%20view%20to%20render%20its%20nice%20welcome%20message%3A")]);
smalltalk.send(self['@el'], "_append_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.SmackboneCodeView || SmackboneCodeView), "_onClass_method_", [(smalltalk.SmackboneWelcomeRouter || SmackboneWelcomeRouter), "welcome"]), "_render", []), "_el", [])]);
smalltalk.send(self['@el'], "_append_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.SmackboneCodeView || SmackboneCodeView), "_onClass_method_", [(smalltalk.SmackboneWelcome || SmackboneWelcome), "renderOn:"]), "_render", []), "_el", [])]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(){smalltalk.send(html, "_with_", [unescape("That%27s%20it%20for%20now.%20You%20can%20head%20back%20to%20the%20")]);(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", ["welcome page"]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [" or take a look at some of the "]);(function($rec){smalltalk.send($rec, "_href_", [unescape("%23examples")]);return smalltalk.send($rec, "_with_", ["examples"]);})(smalltalk.send(html, "_a", []));return smalltalk.send(html, "_with_", [unescape(".%20Thanks%20for%20checking%20out%20Amber%20Smalltalk%20and%20Smackbone%21")]);})]);
return self;},
args: ["html"],
source: unescape('renderPage6On%3A%20html%0A%09html%20p%3A%20%27In%20addition%20to%20rendering%20views%20as%20a%20result%20of%20an%20onClick%3A%20handler%2C%20you%20can%20use%20routers%20to%20define%20a%20set%20of%20behaviors%20to%20perform%20when%20a%20user%20clicks%20a%20link.%20%27%20%2C%0A%09%09%09%27Your%20router%20subclass%20defines%20%23routes%20and%20maps%20a%20route%20to%20a%20method.%27.%0A%09el%20append%3A%20%28SmackboneCodeView%20onClass%3A%20SmackboneWelcomeRouter%20method%3A%20%27routes%27%29%20render%20el.%0A%0A%09html%20p%3A%20%27This%20sets%20up%20a%20route%20so%20that%20calling%20SmackboneHistory%20navigate%3A%20%27%27%27%27%20calls%20the%20welcome%20method%2C%20which%20tells%20a%20SmackboneWelcome%20view%20to%20render%20its%20nice%20welcome%20message%3A%27.%0A%09el%20append%3A%20%28SmackboneCodeView%20onClass%3A%20SmackboneWelcomeRouter%20method%3A%20%27welcome%27%29%20render%20el.%0A%09el%20append%3A%20%28SmackboneCodeView%20onClass%3A%20SmackboneWelcome%20method%3A%20%27renderOn%3A%27%29%20render%20el.%0A%0A%09html%20p%20with%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20html%20with%3A%20%27That%27%27s%20it%20for%20now.%20You%20can%20head%20back%20to%20the%20%27.%0A%20%20%20%20%20%20%20%20%20%20html%20a%20href%3A%20%27%23%27%3B%20with%3A%20%27welcome%20page%27.%0A%20%20%20%20%20%20%20%20%20%20html%20with%3A%20%27%20or%20take%20a%20look%20at%20some%20of%20the%20%27.%0A%20%20%20%20%20%20%20%20%20%20html%20a%20href%3A%20%27%23examples%27%3B%20with%3A%20%27examples%27.%0A%20%20%20%20%20%20%20%20%20%20html%20with%3A%20%27.%20Thanks%20for%20checking%20out%20Amber%20Smalltalk%20and%20Smackbone%21%27.%20%5D'),
messageSends: ["p:", unescape("%2C"), "append:", "el", "render", "onClass:method:", "with:", "p", "href:", "a"],
referencedClasses: [smalltalk.nil,smalltalk.nil,smalltalk.SmackboneWelcome]
}),
smalltalk.SmackboneTutorial);



smalltalk.addClass('SmackboneWelcomeRouter', smalltalk.SmackboneRouter, ['welcome', 'tutorial', 'examples', 'counter', 'hello'], 'Smackbone-Examples');
smalltalk.addMethod(
unescape('_routes'),
smalltalk.method({
selector: unescape('routes'),
category: 'not yet classified',
fn: function () {
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["", "welcome"]);smalltalk.send($rec, "_at_put_", ["tutorial", "tutorial"]);smalltalk.send($rec, "_at_put_", ["examples", "examples"]);smalltalk.send($rec, "_at_put_", ["counter", "counter"]);smalltalk.send($rec, "_at_put_", ["hello", "hello"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('routes%0A%09%5E%20%28Dictionary%20new%29%0A%09%09at%3A%20%27%27%20put%3A%20%27welcome%27%3B%0A%09%09at%3A%20%27tutorial%27%20put%3A%20%27tutorial%27%3B%0A%09%09at%3A%20%27examples%27%20put%3A%20%27examples%27%3B%0A%09%09at%3A%20%27counter%27%20put%3A%20%27counter%27%3B%0A%09%09at%3A%20%27hello%27%20put%3A%20%27hello%27%3B%0A%09%09yourself.'),
messageSends: ["at:put:", "yourself", "new"],
referencedClasses: [smalltalk.Dictionary]
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
unescape('_domRoot'),
smalltalk.method({
selector: unescape('domRoot'),
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.send(unescape("%23smackbone-welcome"), "_asJQuery", []);
return self;},
args: [],
source: unescape('domRoot%0A%09%5E%20%27%23smackbone-welcome%27%20asJQuery'),
messageSends: ["asJQuery"],
referencedClasses: []
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
unescape('_welcome'),
smalltalk.method({
selector: unescape('welcome'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_domRoot", []), "_empty", []), "_append_", [smalltalk.send(smalltalk.send(self['@welcome'], "_render", []), "_el", [])]);
return self;},
args: [],
source: unescape('welcome%0A%09self%20domRoot%20empty%20append%3A%20welcome%20render%20el.'),
messageSends: ["append:", "empty", "domRoot", "el", "render"],
referencedClasses: []
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
unescape('_tutorial'),
smalltalk.method({
selector: unescape('tutorial'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_domRoot", []), "_empty", []), "_append_", [smalltalk.send(smalltalk.send(self['@tutorial'], "_render", []), "_el", [])]);
return self;},
args: [],
source: unescape('tutorial%0A%09self%20domRoot%20empty%20append%3A%20tutorial%20render%20el.'),
messageSends: ["append:", "empty", "domRoot", "el", "render"],
referencedClasses: []
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function () {
var self=this;
self['@welcome']=smalltalk.send((smalltalk.SmackboneWelcome || SmackboneWelcome), "_new", []);
self['@tutorial']=smalltalk.send((smalltalk.SmackboneTutorial || SmackboneTutorial), "_new", []);
self['@examples']=smalltalk.send((smalltalk.SmackboneExampleListView || SmackboneExampleListView), "_new", []);
self['@counter']=smalltalk.send((smalltalk.SmackboneCounter || SmackboneCounter), "_new", []);
self['@hello']=smalltalk.send((smalltalk.SmackboneHello || SmackboneHello), "_new", []);
return self;},
args: [],
source: unescape('initialize%0A%09welcome%20%3A%3D%20SmackboneWelcome%20new.%0A%09tutorial%20%3A%3D%20SmackboneTutorial%20new.%0A%09examples%20%3A%3D%20SmackboneExampleListView%20new.%0A%09counter%20%3A%3D%20SmackboneCounter%20new.%0A%09hello%20%3A%3D%20SmackboneHello%20new.'),
messageSends: ["new"],
referencedClasses: [smalltalk.SmackboneWelcome,smalltalk.SmackboneTutorial,smalltalk.nil,smalltalk.nil]
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
unescape('_tutorialNext'),
smalltalk.method({
selector: unescape('tutorialNext'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(self['@tutorial'], "_next", []);
return self;},
args: [],
source: unescape('tutorialNext%0A%09tutorial%20next.'),
messageSends: ["next"],
referencedClasses: []
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
unescape('_tutorialPrevious'),
smalltalk.method({
selector: unescape('tutorialPrevious'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(self['@tutorial'], "_previous", []);
return self;},
args: [],
source: unescape('tutorialPrevious%0A%09tutorial%20previous.'),
messageSends: ["previous"],
referencedClasses: []
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
unescape('_examples'),
smalltalk.method({
selector: unescape('examples'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_domRoot", []), "_empty", []), "_append_", [smalltalk.send(smalltalk.send(self['@examples'], "_render", []), "_el", [])]);
return self;},
args: [],
source: unescape('examples%0A%09self%20domRoot%20empty%20append%3A%20examples%20render%20el.'),
messageSends: ["append:", "empty", "domRoot", "el", "render"],
referencedClasses: []
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
unescape('_counter'),
smalltalk.method({
selector: unescape('counter'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_domRoot", []), "_empty", []), "_append_", [smalltalk.send(smalltalk.send(self['@counter'], "_render", []), "_el", [])]);
return self;},
args: [],
source: unescape('counter%0A%09self%20domRoot%20empty%20append%3A%20counter%20render%20el.'),
messageSends: ["append:", "empty", "domRoot", "el", "render"],
referencedClasses: []
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
unescape('_hello'),
smalltalk.method({
selector: unescape('hello'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_domRoot", []), "_empty", []), "_append_", [smalltalk.send(smalltalk.send(self['@hello'], "_render", []), "_el", [])]);
return self;},
args: [],
source: unescape('hello%0A%09self%20domRoot%20empty%20append%3A%20hello%20render%20el.'),
messageSends: ["append:", "empty", "domRoot", "el", "render"],
referencedClasses: []
}),
smalltalk.SmackboneWelcomeRouter);

smalltalk.addMethod(
unescape('_counterView'),
smalltalk.method({
selector: unescape('counterView'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@counter'];
return self;},
args: [],
source: unescape('counterView%0A%09%5E%20counter'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneWelcomeRouter);



smalltalk.addClass('SmackboneCodeView', smalltalk.SmackboneView, ['klass', 'methodName'], 'Smackbone-Examples');
smalltalk.addMethod(
unescape('_klass_'),
smalltalk.method({
selector: unescape('klass%3A'),
category: 'not yet classified',
fn: function (aClass) {
var self=this;
self['@klass']=aClass;
return self;},
args: ["aClass"],
source: unescape('klass%3A%20aClass%0A%09klass%20%3A%3D%20aClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneCodeView);

smalltalk.addMethod(
unescape('_methodName_'),
smalltalk.method({
selector: unescape('methodName%3A'),
category: 'not yet classified',
fn: function (aString) {
var self=this;
self['@methodName']=aString;
return self;},
args: ["aString"],
source: unescape('methodName%3A%20aString%0A%09methodName%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmackboneCodeView);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_h2_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@klass'], "_asString", []), "__comma", [unescape("%23")]), "__comma", [self['@methodName']])]);
smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [smalltalk.send(smalltalk.send(html, "_pre", []), "_with_", [smalltalk.send(smalltalk.send(self['@klass'], "_methodAt_", [self['@methodName']]), "_source", [])])]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20h2%3A%20klass%20asString%20%2C%20%27%23%27%20%2C%20methodName.%0A%09html%20code%20with%3A%20%28html%20pre%20with%3A%20%28klass%20methodAt%3A%20methodName%29%20source%29.'),
messageSends: ["h2:", unescape("%2C"), "asString", "with:", "code", "pre", "source", "methodAt:"],
referencedClasses: []
}),
smalltalk.SmackboneCodeView);


smalltalk.addMethod(
unescape('_onClass_method_'),
smalltalk.method({
selector: unescape('onClass%3Amethod%3A'),
category: 'not yet classified',
fn: function (klass, methodName) {
var self=this;
return (function($rec){smalltalk.send($rec, "_klass_", [klass]);smalltalk.send($rec, "_methodName_", [methodName]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["klass", "methodName"],
source: unescape('onClass%3A%20klass%20method%3A%20methodName%0A%09%5E%20self%20new%20klass%3A%20klass%3B%20methodName%3A%20methodName%3B%20yourself.'),
messageSends: ["klass:", "methodName:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.SmackboneCodeView.klass);


smalltalk.addClass('SmackboneExampleListView', smalltalk.SmackboneView, [], 'Smackbone-Examples');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", ["Here are a few Smackbone examples to help get you started:"]);
smalltalk.send(html, "_ul_", [(function(){smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [unescape("%23counter")]);return smalltalk.send($rec, "_with_", ["SmackboneCounter"]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [unescape("%20-%20it%20has%20")]);return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [(smalltalk.SmackboneCounterTest || SmackboneCounterTest)]);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", [unescape("tests%21")]);})(smalltalk.send(html, "_a", []));})]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23hello")]);return smalltalk.send($rec, "_with_", ["SmackboneHello"]);})(smalltalk.send(html, "_a", []));})]);})]);
smalltalk.send(html, "_p_", [(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", ["Go back home..."]);})(smalltalk.send(html, "_a", []))]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20p%3A%20%27Here%20are%20a%20few%20Smackbone%20examples%20to%20help%20get%20you%20started%3A%27.%0A%09html%20ul%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20html%20li%20with%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20html%20a%20href%3A%20%27%23counter%27%3B%20with%3A%20%27SmackboneCounter%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20html%20with%3A%20%27%20-%20it%20has%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%28html%20a%20href%3A%20%27%23%27%3B%20onClick%3A%20%5B%20%3Ae%20%7C%20Browser%20openOn%3A%20SmackboneCounterTest.%20e%20preventDefault%20%5D%3B%20with%3A%20%27tests%21%27%29%20%5D.%0A%20%20%20%20%20%20%20%20%20%20html%20li%20with%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20html%20a%20href%3A%20%27%23hello%27%3B%20with%3A%20%27SmackboneHello%27%20%5D%20%5D.%0A%09html%20p%3A%20%28html%20a%20href%3A%20%27%23%27%3B%20with%3A%20%27Go%20back%20home...%27%29.'),
messageSends: ["p:", "ul:", "with:", "li", "href:", "a", "onClick:", "openOn:", "preventDefault"],
referencedClasses: [smalltalk.Browser,smalltalk.nil]
}),
smalltalk.SmackboneExampleListView);



smalltalk.addClass('SmackboneCounter', smalltalk.SmackboneView, ['count'], 'Smackbone-Examples');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.SmackboneView);
self['@count']=(0);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09count%20%3A%3D%200.'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.SmackboneCounter);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_h1_", [smalltalk.send(self['@count'], "_asString", [])]);
(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(self, "_decrease", []);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", [unescape("--")]);})(smalltalk.send(html, "_a", []));
smalltalk.send(html, "_with_", [" "]);
(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(self, "_increase", []);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", [unescape("++")]);})(smalltalk.send(html, "_a", []));
smalltalk.send(html, "_p_", [(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [(smalltalk.SmackboneCounterTest || SmackboneCounterTest)]);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", ["See the tests"]);})(smalltalk.send(html, "_a", []))]);
smalltalk.send(html, "_p_", [(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);return smalltalk.send($rec, "_with_", ["home"]);})(smalltalk.send(html, "_a", []))]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20h1%3A%20count%20asString.%0A%09html%20a%20href%3A%20%27%23%27%3B%20onClick%3A%20%5B%20%3Ae%20%7C%20self%20decrease.%20e%20preventDefault.%20%5D%3B%20with%3A%20%27--%27.%0A%09html%20with%3A%20%27%20%27.%0A%09html%20a%20href%3A%20%27%23%27%3B%20onClick%3A%20%5B%20%3Ae%20%7C%20self%20increase.%20e%20preventDefault%20%5D%3B%20with%3A%20%27++%27.%0A%09html%20p%3A%20%28html%20a%20href%3A%20%27%23%27%3B%20onClick%3A%20%5B%20%3Ae%20%7C%20Browser%20openOn%3A%20SmackboneCounterTest.%20e%20preventDefault%20%5D%3B%20with%3A%20%27See%20the%20tests%27%29.%0A%09html%20p%3A%20%28html%20a%20href%3A%20%27%23%27%3B%20with%3A%20%27home%27%29.'),
messageSends: ["h1:", "asString", "href:", "onClick:", "decrease", "preventDefault", "with:", "a", "increase", "p:", "openOn:"],
referencedClasses: [smalltalk.Browser,smalltalk.nil]
}),
smalltalk.SmackboneCounter);

smalltalk.addMethod(
unescape('_decrease'),
smalltalk.method({
selector: unescape('decrease'),
category: 'not yet classified',
fn: function () {
var self=this;
self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]));
smalltalk.send(self, "_render", []);
return self;},
args: [],
source: unescape('decrease%0A%09count%20%3A%3D%20count%20-%201.%0A%09self%20render.'),
messageSends: [unescape("-"), "render"],
referencedClasses: []
}),
smalltalk.SmackboneCounter);

smalltalk.addMethod(
unescape('_increase'),
smalltalk.method({
selector: unescape('increase'),
category: 'not yet classified',
fn: function () {
var self=this;
self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
smalltalk.send(self, "_render", []);
return self;},
args: [],
source: unescape('increase%0A%09count%20%3A%3D%20count%20+%201.%0A%09self%20render.'),
messageSends: [unescape("+"), "render"],
referencedClasses: []
}),
smalltalk.SmackboneCounter);



smalltalk.addClass('SmackboneCounterTest', smalltalk.TestCase, [], 'Smackbone-Examples');
smalltalk.addMethod(
unescape('_testCounterStartsAt0'),
smalltalk.method({
selector: unescape('testCounterStartsAt0'),
category: 'not yet classified',
fn: function () {
var self=this;
var counter=nil;
counter=smalltalk.send((smalltalk.SmackboneCounter || SmackboneCounter), "_new", []);
smalltalk.send(self, "_assert_equals_", ["0", smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(counter, "_render", []), "_el", []), "_find_", ["h1"]), "_text", [])]);
return self;},
args: [],
source: unescape('testCounterStartsAt0%0A%09%7C%20counter%20%7C%0A%09counter%20%3A%3D%20SmackboneCounter%20new.%0A%09self%20assert%3A%20%270%27%20equals%3A%20%28counter%20render%20el%20find%3A%20%27h1%27%29%20text.'),
messageSends: ["new", "assert:equals:", "text", "find:", "el", "render"],
referencedClasses: [smalltalk.SmackboneCounter]
}),
smalltalk.SmackboneCounterTest);

smalltalk.addMethod(
unescape('_testIncreaseAddsOne'),
smalltalk.method({
selector: unescape('testIncreaseAddsOne'),
category: 'not yet classified',
fn: function () {
var self=this;
var counter=nil;
counter=smalltalk.send((smalltalk.SmackboneCounter || SmackboneCounter), "_new", []);
smalltalk.send(counter, "_increase", []);
smalltalk.send(self, "_assert_equals_", ["1", smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(counter, "_render", []), "_el", []), "_find_", ["h1"]), "_text", [])]);
return self;},
args: [],
source: unescape('testIncreaseAddsOne%0A%09%7C%20counter%20%7C%0A%09counter%20%3A%3D%20SmackboneCounter%20new.%0A%09counter%20increase.%0A%09self%20assert%3A%20%271%27%20equals%3A%20%28counter%20render%20el%20find%3A%20%27h1%27%29%20text.'),
messageSends: ["new", "increase", "assert:equals:", "text", "find:", "el", "render"],
referencedClasses: [smalltalk.SmackboneCounter]
}),
smalltalk.SmackboneCounterTest);

smalltalk.addMethod(
unescape('_testDecreaseSubtractsOne'),
smalltalk.method({
selector: unescape('testDecreaseSubtractsOne'),
category: 'not yet classified',
fn: function () {
var self=this;
var counter=nil;
counter=smalltalk.send((smalltalk.SmackboneCounter || SmackboneCounter), "_new", []);
smalltalk.send(counter, "_decrease", []);
smalltalk.send(self, "_assert_equals_", [unescape("-1"), smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(counter, "_render", []), "_el", []), "_find_", ["h1"]), "_text", [])]);
return self;},
args: [],
source: unescape('testDecreaseSubtractsOne%0A%09%7C%20counter%20%7C%0A%09counter%20%3A%3D%20SmackboneCounter%20new.%0A%09counter%20decrease.%0A%09self%20assert%3A%20%27-1%27%20equals%3A%20%28counter%20render%20el%20find%3A%20%27h1%27%29%20text.'),
messageSends: ["new", "decrease", "assert:equals:", "text", "find:", "el", "render"],
referencedClasses: [smalltalk.SmackboneCounter]
}),
smalltalk.SmackboneCounterTest);



smalltalk.addClass('SmackboneHello', smalltalk.SmackboneView, ['personName'], 'Smackbone-Examples');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_p_", [(function(){smalltalk.send(html, "_with_", [unescape("Hello%21")]);return (($receiver = self['@personName']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_renderNameFormOn_", [html]);})() : (function(){return smalltalk.send(self, "_renderHelloOn_", [html]);})();})]);
smalltalk.send(html, "_p_", [(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(self, "_render", []);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", ["refresh"]);})(smalltalk.send(html, "_a", []))]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20p%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20html%20with%3A%20%27Hello%21%27.%0A%20%20%20%20%20%20%20%20%20%20personName%20ifNil%3A%20%5B%20self%20renderNameFormOn%3A%20html%20%5D%20ifNotNil%3A%20%5B%20self%20renderHelloOn%3A%20html%20%5D%20%5D.%0A%20%20%20%20%20%20%20%20html%20p%3A%20%28html%20a%20href%3A%20%27%23%27%3B%20onClick%3A%20%5B%20%3Ae%20%7C%20self%20render.%20e%20preventDefault%20%5D%3B%20with%3A%20%27refresh%27%20%29.'),
messageSends: ["p:", "with:", "ifNil:ifNotNil:", "renderNameFormOn:", "renderHelloOn:", "href:", "onClick:", "render", "preventDefault", "a"],
referencedClasses: []
}),
smalltalk.SmackboneHello);

smalltalk.addMethod(
unescape('_renderNameFormOn_'),
smalltalk.method({
selector: unescape('renderNameFormOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_with_", [unescape("%20I%20don%27t%20know%20you.%20What%27s%20your%20name%3F%20")]);
(function($rec){smalltalk.send($rec, "_class_", [unescape("person-name")]);return smalltalk.send($rec, "_type_", ["text"]);})(smalltalk.send(html, "_input", []));
smalltalk.send(html, "_with_", [" "]);
(function($rec){smalltalk.send($rec, "_type_", ["submit"]);smalltalk.send($rec, "_onClick_", [(function(e){smalltalk.send(self, "_collectPersonName", []);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_value_", ["Continue"]);})(smalltalk.send(html, "_input", []));
return self;},
args: ["html"],
source: unescape('renderNameFormOn%3A%20html%0A%09html%20with%3A%20%27%20I%20don%27%27t%20know%20you.%20What%27%27s%20your%20name%3F%20%27.%0A%09html%20input%20class%3A%20%27person-name%27%3B%20type%3A%20%27text%27.%0A%09html%20with%3A%20%20%27%20%27.%0A%09html%20input%20type%3A%20%27submit%27%3B%20onClick%3A%20%5B%20%3Ae%20%7C%20self%20collectPersonName.%20e%20preventDefault%20%5D%3B%20value%3A%20%27Continue%27.'),
messageSends: ["with:", "class:", "type:", "input", "onClick:", "collectPersonName", "preventDefault", "value:"],
referencedClasses: []
}),
smalltalk.SmackboneHello);

smalltalk.addMethod(
unescape('_collectPersonName'),
smalltalk.method({
selector: unescape('collectPersonName'),
category: 'not yet classified',
fn: function () {
var self=this;
self['@personName']=smalltalk.send(smalltalk.send(self['@el'], "_find_", [unescape("input.person-name")]), "_val", []);
smalltalk.send(self, "_render", []);
return self;},
args: [],
source: unescape('collectPersonName%0A%09personName%20%3A%3D%20%28el%20find%3A%20%27input.person-name%27%29%20val.%0A%09self%20render.'),
messageSends: ["val", "find:", "render"],
referencedClasses: []
}),
smalltalk.SmackboneHello);

smalltalk.addMethod(
unescape('_renderHelloOn_'),
smalltalk.method({
selector: unescape('renderHelloOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(unescape("%20It%27s%20nice%20to%20meet%20you%2C%20"), "__comma", [self['@personName']])]);
smalltalk.send(html, "_with_", [" "]);
(function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(e){self['@personName']=nil;smalltalk.send(self, "_render", []);return smalltalk.send(e, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", ["Forget about me"]);})(smalltalk.send(html, "_a", []));
return self;},
args: ["html"],
source: unescape('renderHelloOn%3A%20html%0A%09html%20with%3A%20%27%20It%27%27s%20nice%20to%20meet%20you%2C%20%27%20%2C%20personName.%0A%09html%20with%3A%20%27%20%27.%0A%09html%20a%20href%3A%20%27%23%27%3B%20onClick%3A%20%5B%20%3Ae%20%7C%20personName%20%3A%3D%20nil.%20self%20render.%20e%20preventDefault%20%5D%3B%20with%3A%20%27Forget%20about%20me%27.'),
messageSends: ["with:", unescape("%2C"), "href:", "onClick:", "render", "preventDefault", "a"],
referencedClasses: []
}),
smalltalk.SmackboneHello);



smalltalk.addClass('SmackboneTodo', smalltalk.SmackboneView, [], 'Smackbone-Examples');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(html, "_h1_", ["Smackbone Todo list"]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20h1%3A%20%27Smackbone%20Todo%20list%27.'),
messageSends: ["h1:"],
referencedClasses: []
}),
smalltalk.SmackboneTodo);



smalltalk.addClass('CorysCanvas', smalltalk.Object, ['startPoint', 'endPoint'], 'Smackbone-Examples');
smalltalk.addMethod(
unescape('_isReadyForDrawing'),
smalltalk.method({
selector: unescape('isReadyForDrawing'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@startPoint'], "_notNil", []), "_and_", [(function(){return smalltalk.send(self['@endPoint'], "_notNil", []);})]);
return self;},
args: [],
source: unescape('isReadyForDrawing%0A%09%5E%20startPoint%20notNil%20and%3A%20%5B%20endPoint%20notNil%20%5D.'),
messageSends: ["and:", "notNil"],
referencedClasses: []
}),
smalltalk.CorysCanvas);

smalltalk.addMethod(
unescape('_click_'),
smalltalk.method({
selector: unescape('click%3A'),
category: 'not yet classified',
fn: function (aPoint){
var self=this;
(($receiver = self['@startPoint']) == nil || $receiver == undefined) ? (function(){return self['@startPoint']=aPoint;})() : (function(){return self['@endPoint']=aPoint;})();
return self;},
args: ["aPoint"],
source: unescape('click%3A%20aPoint%0A%09startPoint%20ifNil%3A%20%5B%20startPoint%20%3A%3D%20aPoint%20%5D%20ifNotNil%3A%20%5B%20endPoint%20%3A%3D%20aPoint%20%5D.'),
messageSends: ["ifNil:ifNotNil:"],
referencedClasses: []
}),
smalltalk.CorysCanvas);

smalltalk.addMethod(
unescape('_drawOn_'),
smalltalk.method({
selector: unescape('drawOn%3A'),
category: 'not yet classified',
fn: function (view){
var self=this;
smalltalk.send(view, "_drawLineFrom_to_", [self['@startPoint'], self['@endPoint']]);
return self;},
args: ["view"],
source: unescape('drawOn%3A%20view%0A%09view%20drawLineFrom%3A%20startPoint%20to%3A%20endPoint'),
messageSends: ["drawLineFrom:to:"],
referencedClasses: []
}),
smalltalk.CorysCanvas);



smalltalk.addClass('Html5Drawer', smalltalk.Object, ['canvas'], 'Smackbone-Examples');
smalltalk.addMethod(
unescape('_drawLineFrom_to_'),
smalltalk.method({
selector: unescape('drawLineFrom%3Ato%3A'),
category: 'not yet classified',
fn: function (start, end){
var self=this;

return self;},
args: ["start", "end"],
source: unescape('drawLineFrom%3A%20start%20to%3A%20end'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Html5Drawer);



