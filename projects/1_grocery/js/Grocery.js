smalltalk.addPackage('Grocery', []);
smalltalk.addClass('Recipe', smalltalk.Object, ['name'], 'Grocery');
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
source: unescape('initializeNamed%3A%20aName%0A%0A%09name%20%3A%3D%20aName%20'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Recipe);

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
source: unescape('name%0A%0A%09%5E%20name'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Recipe);


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
smalltalk.Recipe.klass);


smalltalk.addClass('RecipeView', smalltalk.Widget, ['recipe'], 'Grocery');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
smalltalk.send(html, "_p_", [smalltalk.send(self['@recipe'], "_name", [])]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09html%20p%3A%20recipe%20name.%0A'),
messageSends: ["p:", "name"],
referencedClasses: []
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function (){
var self=this;
self['@recipe']=smalltalk.send((smalltalk.Recipe || Recipe), "_named_", ["BLTs"]);
return self;},
args: [],
source: unescape('initialize%0A%0A%09recipe%20%3A%3D%20Recipe%20named%3A%20%27BLTs%27'),
messageSends: ["named:"],
referencedClasses: ["Recipe"]
}),
smalltalk.RecipeView);



smalltalk.addClass('RecipeTest', smalltalk.TestCase, [], 'Grocery');
smalltalk.addMethod(
unescape('_testInitialize'),
smalltalk.method({
selector: unescape('testInitialize'),
category: 'not yet classified',
fn: function (){
var self=this;
var new_=nil;
new_=smalltalk.send((smalltalk.Recipe || Recipe), "_named_", ["BLTs"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(new_, "_name", []), "__eq", ["BLTs"])]);
return self;},
args: [],
source: unescape('testInitialize%0A%09%7C%20new%20%7C%0A%09new%20%3A%3D%20Recipe%20named%3A%20%27BLTs%27.%0A%09self%20assert%3A%20%28%20new%20name%20%3D%20%27BLTs%27%20%29.'),
messageSends: ["named:", "assert:", unescape("%3D"), "name"],
referencedClasses: ["Recipe"]
}),
smalltalk.RecipeTest);



