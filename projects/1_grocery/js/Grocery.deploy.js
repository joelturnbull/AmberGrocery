smalltalk.addPackage('Grocery', []);
smalltalk.addClass('Recipe', smalltalk.Object, ['name'], 'Grocery');
smalltalk.addMethod(
'_initializeNamed_',
smalltalk.method({
selector: 'initializeNamed:',
fn: function (aName){
var self=this;
self['@name']=aName;
return self;}
}),
smalltalk.Recipe);

smalltalk.addMethod(
'_name',
smalltalk.method({
selector: 'name',
fn: function (){
var self=this;
return self['@name'];
return self;}
}),
smalltalk.Recipe);


smalltalk.addMethod(
'_named_',
smalltalk.method({
selector: 'named:',
fn: function (aName){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeNamed_", [aName]);
return self;}
}),
smalltalk.Recipe.klass);


smalltalk.addClass('RecipeView', smalltalk.Widget, ['recipe'], 'Grocery');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
smalltalk.send(html, "_p_", [smalltalk.send(self['@recipe'], "_name", [])]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
self['@recipe']=smalltalk.send((smalltalk.Recipe || Recipe), "_named_", ["BLTs"]);
return self;}
}),
smalltalk.RecipeView);



smalltalk.addClass('RecipeTest', smalltalk.TestCase, [], 'Grocery');
smalltalk.addMethod(
'_testInitialize',
smalltalk.method({
selector: 'testInitialize',
fn: function (){
var self=this;
var new_=nil;
new_=smalltalk.send((smalltalk.Recipe || Recipe), "_named_", ["BLTs"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(new_, "_name", []), "__eq", ["BLTs"])]);
return self;}
}),
smalltalk.RecipeTest);



