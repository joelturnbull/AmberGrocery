smalltalk.addPackage('GroceryApp', []);
smalltalk.addClass('RecipeTest', smalltalk.TestCase, [], 'GroceryApp');
smalltalk.addMethod(
unescape('_testRecipeIsNamed'),
smalltalk.method({
selector: unescape('testRecipeIsNamed'),
category: 'not yet classified',
fn: function () {
var self=this;
var recipe=nil;
recipe=smalltalk.send((smalltalk.Recipe || Recipe), "_named_", ["BLTs"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(recipe, "_name", []), "__eq", ["BLTs"])]);
return self;},
args: [],
source: unescape('testRecipeIsNamed%0A%7C%20recipe%20%7C%0A%09%0A%09recipe%20%3A%3D%20Recipe%20named%3A%20%27BLTs%27.%0A%09self%20assert%3A%20recipe%20name%20%3D%20%27BLTs%27.'),
messageSends: ["named:", "assert:", unescape("%3D"), "name"],
referencedClasses: ["Recipe"]
}),
smalltalk.RecipeTest);

smalltalk.addMethod(
unescape('_testRecipeAddIngredient'),
smalltalk.method({
selector: unescape('testRecipeAddIngredient'),
category: 'not yet classified',
fn: function () {
var self=this;
var recipe=nil;
var ingredient=nil;
recipe=smalltalk.send((smalltalk.Recipe || Recipe), "_named_", ["BLTs"]);
ingredient=smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"]);
smalltalk.send(recipe, "_add_", [ingredient]);
smalltalk.send(self, "_assert_", [smalltalk.send(recipe, "_includes_", [ingredient])]);
return self;},
args: [],
source: unescape('testRecipeAddIngredient%0A%7C%20recipe%20ingredient%20%7C%0A%09%0A%09recipe%20%3A%3D%20Recipe%20named%3A%20%27BLTs%27.%0A%20%20%20%20%20%20%20%20ingredient%20%3A%3D%20Ingredient%20named%3A%20%271%20Pound%20of%20Bacon%27.%0A%20%20%20%20%20%20%20%20recipe%20add%3A%20ingredient.%0A%09self%20assert%3A%20%28%20recipe%20includes%3A%20ingredient%20%29'),
messageSends: ["named:", "add:", "assert:", "includes:"],
referencedClasses: ["Recipe", "Ingredient"]
}),
smalltalk.RecipeTest);



smalltalk.addClass('Recipe', smalltalk.Object, ['name', 'ingredients'], 'GroceryApp');
smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
category: 'not yet classified',
fn: function () {
var self=this;
return self['@name'];
return self;},
args: [],
source: unescape('name%0A%0A%09%5E%20%20name'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Recipe);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'not yet classified',
fn: function (anIngredient) {
var self=this;
smalltalk.send(self['@ingredients'], "_add_", [anIngredient]);
return self;},
args: ["anIngredient"],
source: unescape('add%3A%20anIngredient%0A%0A%09ingredients%20add%3A%20anIngredient'),
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.Recipe);

smalltalk.addMethod(
unescape('_includes_'),
smalltalk.method({
selector: unescape('includes%3A'),
category: 'not yet classified',
fn: function (anIngredient) {
var self=this;
return smalltalk.send(self['@ingredients'], "_includes_", [anIngredient]);
return self;},
args: ["anIngredient"],
source: unescape('includes%3A%20anIngredient%0A%0A%09%5E%20ingredients%20includes%3A%20anIngredient'),
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.Recipe);

smalltalk.addMethod(
unescape('_ingredients'),
smalltalk.method({
selector: unescape('ingredients'),
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.send(self['@ingredients'], "_copy", []);
return self;},
args: [],
source: unescape('ingredients%0A%0A%09%5E%20ingredients%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Recipe);

smalltalk.addMethod(
unescape('_initializeNamed_ingredients_'),
smalltalk.method({
selector: unescape('initializeNamed%3Aingredients%3A'),
category: 'not yet classified',
fn: function (aName, anArray){
var self=this;
self['@name']=aName;
self['@ingredients']=anArray;
return self;},
args: ["aName", "anArray"],
source: unescape('initializeNamed%3A%20aName%20ingredients%3A%20anArray%0A%0A%09name%20%3A%3D%20aName.%0A%09ingredients%20%3A%3D%20anArray.'),
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
return smalltalk.send(self, "_named_ingredients_", [aName, smalltalk.send((smalltalk.Array || Array), "_new", [])]);
return self;},
args: ["aName"],
source: unescape('named%3A%20aName%0A%0A%09%5E%20self%20named%3A%20aName%20%20ingredients%3A%20Array%20new'),
messageSends: ["named:ingredients:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Recipe.klass);

smalltalk.addMethod(
unescape('_named_ingredients_'),
smalltalk.method({
selector: unescape('named%3Aingredients%3A'),
category: 'not yet classified',
fn: function (aName, anArray){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeNamed_ingredients_", [aName, anArray]);
return self;},
args: ["aName", "anArray"],
source: unescape('named%3A%20aName%20ingredients%3A%20anArray%0A%0A%09%5E%20self%20new%20initializeNamed%3A%20aName%20ingredients%3A%20anArray'),
messageSends: ["initializeNamed:ingredients:", "new"],
referencedClasses: []
}),
smalltalk.Recipe.klass);

smalltalk.addMethod(
unescape('_fromJSON_'),
smalltalk.method({
selector: unescape('fromJSON%3A'),
category: 'not yet classified',
fn: function (aJSONObject){
var self=this;
var ingredients=nil;
ingredients=smalltalk.send(smalltalk.send(aJSONObject, "_ingredients", []), "_collect_", [(function(anIngredientJSON){return smalltalk.send((smalltalk.Ingredient || Ingredient), "_fromJSON_", [anIngredientJSON]);})]);
return smalltalk.send(self, "_named_ingredients_", [smalltalk.send(aJSONObject, "_name", []), ingredients]);
return self;},
args: ["aJSONObject"],
source: unescape('fromJSON%3A%20aJSONObject%0A%7C%20ingredients%20%7C%0A%0A%09ingredients%20%3A%3D%20aJSONObject%20ingredients%20collect%3A%20%5B%20%3AanIngredientJSON%20%7C%20Ingredient%20fromJSON%3A%20anIngredientJSON%20%5D.%0A%09%5E%20self%20named%3A%20aJSONObject%20name%20ingredients%3A%20ingredients.'),
messageSends: ["collect:", "ingredients", "fromJSON:", "named:ingredients:", "name"],
referencedClasses: ["Ingredient"]
}),
smalltalk.Recipe.klass);


smalltalk.addClass('RecipeView', smalltalk.Widget, ['recipe'], 'GroceryApp');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderNameOn_", [html]);
smalltalk.send(self, "_renderIngredientsOn_", [html]);
smalltalk.send(self, "_renderIngredientInputOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09self%20renderNameOn%3A%20html.%0A%09self%20renderIngredientsOn%3A%20html.%0A%09self%20renderIngredientInputOn%3A%20html.'),
messageSends: ["renderNameOn:", "renderIngredientsOn:", "renderIngredientInputOn:"],
referencedClasses: []
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_recipe'),
smalltalk.method({
selector: unescape('recipe'),
category: 'accessing',
fn: function () {
var self=this;
return self['@recipe'];
return self;},
args: [],
source: unescape('recipe%0A%0A%09%5E%20recipe'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_renderIngredientInputOn_'),
smalltalk.method({
selector: unescape('renderIngredientInputOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var input=nil;
var button=nil;
input=smalltalk.send(html, "_input", []);
button=smalltalk.send(smalltalk.send(html, "_button", []), "_with_", ["Add Ingredient"]);
smalltalk.send(smalltalk.send(button, "_asJQuery", []), "_click_", [(function(){smalltalk.send(smalltalk.send(self, "_recipe", []), "_add_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", [smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_val", [])])]);smalltalk.send(smalltalk.send(self, "_recipe", []), "_save", []);return smalltalk.send(self, "_refresh", []);})]);
return self;},
args: ["html"],
source: unescape('renderIngredientInputOn%3A%20html%0A%7C%20input%20button%20%7C%0A%0A%09input%20%3A%3D%20html%20input.%0A%20%20%20%20%20%20%20%20button%20%3A%3D%20html%20button%20with%3A%20%27Add%20Ingredient%27.%0A%09%0A%09button%20asJQuery%20click%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20%09self%20recipe%20add%3A%20%28%20Ingredient%20named%3A%20input%20asJQuery%20val%20%29.%0A%20%20%20%20%20%20%20%20%20%20%09self%20recipe%20save.%0A%20%20%20%20%20%20%20%20%20%20%09self%20refresh.%0A%20%20%20%20%20%20%20%20%5D'),
messageSends: ["input", "with:", "button", "click:", "asJQuery", "add:", "recipe", "named:", "val", "save", "refresh"],
referencedClasses: ["Ingredient"]
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
category: 'action',
fn: function (){
var self=this;
var selector=nil;
selector=smalltalk.send(unescape("%23recipe"), "_asJQuery", []);
smalltalk.send(selector, "_empty", []);
smalltalk.send(self, "_appendToJQuery_", [selector]);
return self;},
args: [],
source: unescape('refresh%0A%09%7C%20selector%20%7C%0A%09selector%20%3A%3D%20%27%23recipe%27%20asJQuery.%0A%09selector%20empty.%0A%09self%20appendToJQuery%3A%20selector.'),
messageSends: ["asJQuery", "empty", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_initializeOn_'),
smalltalk.method({
selector: unescape('initializeOn%3A'),
category: 'init',
fn: function (aRecipe){
var self=this;
self['@recipe']=aRecipe;
return self;},
args: ["aRecipe"],
source: unescape('initializeOn%3A%20aRecipe%0A%0A%09recipe%20%3A%3D%20aRecipe'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_renderNameOn_'),
smalltalk.method({
selector: unescape('renderNameOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(smalltalk.send(self, "_recipe", []), "_name", [])]);
return self;},
args: ["html"],
source: unescape('renderNameOn%3A%20html%0A%0A%09html%20div%20with%3A%20self%20recipe%20name.'),
messageSends: ["with:", "div", "name", "recipe"],
referencedClasses: []
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_renderIngredientsOn_'),
smalltalk.method({
selector: unescape('renderIngredientsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(self['@recipe'], "_ingredients", []), "_do_", [(function(anIngredient){return smalltalk.send(smalltalk.send((smalltalk.IngredientView || IngredientView), "_on_", [anIngredient]), "_renderOn_", [html]);})]);
return self;},
args: ["html"],
source: unescape('renderIngredientsOn%3A%20html%0A%0A%09recipe%20ingredients%20do%3A%20%5B%20%3AanIngredient%20%7C%20%28%20IngredientView%20on%3A%20anIngredient%20%29%20renderOn%3A%20html%20%5D.'),
messageSends: ["do:", "ingredients", "renderOn:", "on:"],
referencedClasses: ["IngredientView"]
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_ingredientInputOn_'),
smalltalk.method({
selector: unescape('ingredientInputOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.send(smalltalk.send(html, "_input", []), "_id_", ["ingredientInput"]);
return self;},
args: ["html"],
source: unescape('ingredientInputOn%3A%20html%0A%0A%09%5E%20html%20input%20id%3A%20%27ingredientInput%27.'),
messageSends: ["id:", "input"],
referencedClasses: []
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_addIngredientButtonOn_'),
smalltalk.method({
selector: unescape('addIngredientButtonOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.send(smalltalk.send(html, "_button", []), "_with_", ["Add Ingredient"]);
return self;},
args: ["html"],
source: unescape('addIngredientButtonOn%3A%20html%0A%0A%09%5E%20html%20button%20with%3A%20%27Add%20Ingredient%27.%0A'),
messageSends: ["with:", "button"],
referencedClasses: []
}),
smalltalk.RecipeView);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'not yet classified',
fn: function (aRecipe){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [aRecipe]);
return self;},
args: ["aRecipe"],
source: unescape('on%3A%20aRecipe%0A%0A%09%5E%20self%20new%20initializeOn%3A%20aRecipe'),
messageSends: ["initializeOn:", "new"],
referencedClasses: []
}),
smalltalk.RecipeView.klass);


smalltalk.addClass('IngredientTest', smalltalk.TestCase, [], 'GroceryApp');
smalltalk.addMethod(
unescape('_testIngredient'),
smalltalk.method({
selector: unescape('testIngredient'),
category: 'not yet classified',
fn: function () {
var self=this;
var ingredient=nil;
ingredient=smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(ingredient, "_name", []), "__eq", ["1 Pound of Bacon"])]);
return self;},
args: [],
source: unescape('testIngredient%0A%7C%20ingredient%20%7C%0A%0A%09ingredient%20%3A%3D%20Ingredient%20named%3A%20%271%20Pound%20of%20Bacon%27.%0A%09self%20assert%3A%20ingredient%20name%20%3D%20%271%20Pound%20of%20Bacon%27.'),
messageSends: ["named:", "assert:", unescape("%3D"), "name"],
referencedClasses: ["Ingredient"]
}),
smalltalk.IngredientTest);



smalltalk.addClass('Ingredient', smalltalk.Object, ['name'], 'GroceryApp');
smalltalk.addMethod(
unescape('_initializeNamed_'),
smalltalk.method({
selector: unescape('initializeNamed%3A'),
category: 'not yet classified',
fn: function (aName) {
var self=this;
self['@name']=aName;
return self;},
args: ["aName"],
source: unescape('initializeNamed%3A%20aName%0A%0A%09name%20%3A%3D%20aName.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Ingredient);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
category: 'not yet classified',
fn: function () {
var self=this;
return self['@name'];
return self;},
args: [],
source: unescape('name%0A%0A%09%5E%20%20name'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Ingredient);


smalltalk.addMethod(
unescape('_named_'),
smalltalk.method({
selector: unescape('named%3A'),
category: 'not yet classified',
fn: function (aName) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeNamed_", [aName]);
return self;},
args: ["aName"],
source: unescape('named%3A%20aName%0A%0A%09%5E%20self%20new%20initializeNamed%3A%20aName'),
messageSends: ["initializeNamed:", "new"],
referencedClasses: []
}),
smalltalk.Ingredient.klass);

smalltalk.addMethod(
unescape('_fromJSON_'),
smalltalk.method({
selector: unescape('fromJSON%3A'),
category: 'not yet classified',
fn: function (aJSONObject){
var self=this;
return smalltalk.send(self, "_named_", [smalltalk.send(aJSONObject, "_name", [])]);
return self;},
args: ["aJSONObject"],
source: unescape('fromJSON%3A%20aJSONObject%0A%0A%09%5E%20self%20named%3A%20aJSONObject%20name'),
messageSends: ["named:", "name"],
referencedClasses: []
}),
smalltalk.Ingredient.klass);


smalltalk.addClass('IngredientView', smalltalk.Widget, ['ingredient'], 'GroceryApp');
smalltalk.addMethod(
unescape('_ingredient'),
smalltalk.method({
selector: unescape('ingredient'),
category: 'not yet classified',
fn: function () {
var self=this;
return self['@ingredient'];
return self;},
args: [],
source: unescape('ingredient%0A%0A%09%5E%20ingredient'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IngredientView);

smalltalk.addMethod(
unescape('_initializeOn_'),
smalltalk.method({
selector: unescape('initializeOn%3A'),
category: 'not yet classified',
fn: function (anIngredient) {
var self=this;
self['@ingredient']=anIngredient;
return self;},
args: ["anIngredient"],
source: unescape('initializeOn%3A%20anIngredient%0A%0A%09ingredient%20%3A%3D%20anIngredient'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IngredientView);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(smalltalk.send(self, "_ingredient", []), "_name", [])]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09html%20div%20with%3A%20self%20ingredient%20name.'),
messageSends: ["with:", "div", "name", "ingredient"],
referencedClasses: []
}),
smalltalk.IngredientView);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'not yet classified',
fn: function (anIngredient) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [anIngredient]);
return self;},
args: ["anIngredient"],
source: unescape('on%3A%20anIngredient%0A%0A%09%5E%20self%20new%20initializeOn%3A%20anIngredient'),
messageSends: ["initializeOn:", "new"],
referencedClasses: []
}),
smalltalk.IngredientView.klass);


smalltalk.addClass('CouchDoc', smalltalk.Object, ['model', 'revision', 'id'], 'GroceryApp');
smalltalk.addMethod(
unescape('_intitializeOn_id_revision_'),
smalltalk.method({
selector: unescape('intitializeOn%3Aid%3Arevision%3A'),
category: 'init',
fn: function (aModel, anId, aRevision){
var self=this;
self['@model']=aModel;
self['@id']=anId;
self['@revision']=aRevision;
return self;},
args: ["aModel", "anId", "aRevision"],
source: unescape('intitializeOn%3A%20aModel%20id%3A%20anId%20revision%3A%20aRevision%0A%0A%09model%20%3A%3D%20aModel.%0A%09id%20%3A%3D%20anId.%0A%20%20%20%20%20%20%20%20revision%20%3A%3D%20aRevision.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CouchDoc);

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
category: 'object',
fn: function (aMessage){
var self=this;
return smalltalk.send(self['@model'], "_perform_withArguments_", [smalltalk.send(aMessage, "_selector", []), smalltalk.send(aMessage, "_arguments", [])]);
return self;},
args: ["aMessage"],
source: unescape('doesNotUnderstand%3A%20aMessage%0A%0A%09%5E%20model%20%0A%09%09perform%3A%20aMessage%20selector%0A%09%09withArguments%3A%20aMessage%20arguments'),
messageSends: ["perform:withArguments:", "selector", "arguments"],
referencedClasses: []
}),
smalltalk.CouchDoc);

smalltalk.addMethod(
unescape('_revision'),
smalltalk.method({
selector: unescape('revision'),
category: 'accessing',
fn: function (){
var self=this;
return self['@revision'];
return self;},
args: [],
source: unescape('revision%0A%0A%09%5E%20revision'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CouchDoc);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function (){
var self=this;
return self['@id'];
return self;},
args: [],
source: unescape('id%0A%0A%09%5E%20id'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CouchDoc);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'object',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_basicAt_put_", ["_rev", self['@revision']]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self['@model'], "_asJSONObject", []));
return self;},
args: [],
source: unescape('asJSONObject%0A%0A%09%5E%20model%20asJSONObject%20basicAt%3A%20%27_rev%27%20put%3A%20revision%3B%20yourself.%0A'),
messageSends: ["basicAt:put:", "yourself", "asJSONObject"],
referencedClasses: []
}),
smalltalk.CouchDoc);

smalltalk.addMethod(
unescape('_save'),
smalltalk.method({
selector: unescape('save'),
category: 'action',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(unescape("http%3A//localhost/couchdb/recipes/"), "__comma", [smalltalk.send(self, "_id", [])]), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["PUT"]),smalltalk.send("contentType", "__minus_gt", [unescape("application/json")]),smalltalk.send("data", "__minus_gt", [smalltalk.send(self, "_asJSON", [])]),smalltalk.send("success", "__minus_gt", [(function(rslt){return smalltalk.send(self, "_update", []);})])])]);
return self;},
args: [],
source: unescape('save%0A%0A%09jQuery%20%0A%09%20%20ajax%3A%20%27http%3A//localhost/couchdb/recipes/%27%2C%20self%20id%0A%09%20%20options%3A%20%23%7B%0A%09%09%09%09%27type%27%20-%3E%20%27PUT%27.%0A%09%09%09%09%27contentType%27%20-%3E%20%27application/json%27.%0A%09%09%09%09%27data%27%20-%3E%20self%20asJSON.%0A%09%09%09%09%27success%27%20-%3E%20%5B%20%3Arslt%20%7C%20self%20update%20%5D%0A%09%20%09%20%20%20%20%20%20%20%20%7D.'),
messageSends: ["ajax:options:", unescape("%2C"), "id", unescape("-%3E"), "asJSON", "update"],
referencedClasses: []
}),
smalltalk.CouchDoc);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
category: 'action',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(unescape("http%3A//localhost/couchdb/recipes/"), "__comma", [smalltalk.send(self, "_id", [])]), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(jsonp){return smalltalk.send(self, "_updateFromJSON_", [jsonp]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["error"]);})])])]);
return self;},
args: [],
source: unescape('update%0A%0A%09jQuery%20%0A%09%20%20ajax%3A%20%27http%3A//localhost/couchdb/recipes/%27%2C%20self%20id%0A%09%20%20options%3A%20%23%7B%0A%09%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%09%27success%27%20-%3E%20%5B%20%3Ajsonp%20%7C%20self%20updateFromJSON%3A%20jsonp%20%5D.%0A%09%09%09%09%27error%27%20-%3E%20%5Bwindow%20alert%3A%20%27error%27%5D%0A%09%09%09%7D.'),
messageSends: ["ajax:options:", unescape("%2C"), "id", unescape("-%3E"), "updateFromJSON:", "alert:"],
referencedClasses: []
}),
smalltalk.CouchDoc);

smalltalk.addMethod(
unescape('_updateFromJSON_'),
smalltalk.method({
selector: unescape('updateFromJSON%3A'),
category: 'action',
fn: function (aJSONObject){
var self=this;
self['@id']=smalltalk.send(aJSONObject, "_at_", ["_id"]);
self['@revision']=smalltalk.send(aJSONObject, "_at_", ["_rev"]);
return self;},
args: ["aJSONObject"],
source: unescape('updateFromJSON%3A%20aJSONObject%0A%09%0A%09id%20%3A%3D%20%28%20aJSONObject%20at%3A%20%27_id%27%20%29.%0A%09revision%20%3A%3D%20%28%20aJSONObject%20at%3A%20%27_rev%27%20%29.'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.CouchDoc);


smalltalk.addMethod(
unescape('_on_id_revision_'),
smalltalk.method({
selector: unescape('on%3Aid%3Arevision%3A'),
category: 'not yet classified',
fn: function (aModel, anId, aRevision){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_intitializeOn_id_revision_", [aModel, anId, aRevision]);
return self;},
args: ["aModel", "anId", "aRevision"],
source: unescape('on%3A%20aModel%20id%3A%20anId%20revision%3A%20aRevision%0A%0A%09%5E%20self%20new%20intitializeOn%3A%20aModel%20id%3A%20anId%20revision%3A%20aRevision'),
messageSends: ["intitializeOn:id:revision:", "new"],
referencedClasses: []
}),
smalltalk.CouchDoc.klass);


smalltalk.addClass('RecipeSearch', smalltalk.Object, ['revision'], 'GroceryApp');
smalltalk.addMethod(
unescape('_id_'),
smalltalk.method({
selector: unescape('id%3A'),
category: 'not yet classified',
fn: function (anId){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(unescape("http%3A//localhost/couchdb/recipes/"), "__comma", [anId]), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(jsonp){return smalltalk.send(self, "_launchViewOn_", [jsonp]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["error"]);})])])]);
return self;},
args: ["anId"],
source: unescape('id%3A%20anId%0A%0A%09jQuery%20%0A%09%09ajax%3A%20%27http%3A//localhost/couchdb/recipes/%27%2C%20anId%0A%09%09options%3A%20%23%7B%0A%09%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%09%27success%27%20-%3E%20%5B%20%3Ajsonp%20%7C%20self%20launchViewOn%3A%20jsonp%20%5D.%0A%09%09%09%09%27error%27%20-%3E%20%5Bwindow%20alert%3A%20%27error%27%5D%0A%09%09%7D.'),
messageSends: ["ajax:options:", unescape("%2C"), unescape("-%3E"), "launchViewOn:", "alert:"],
referencedClasses: []
}),
smalltalk.RecipeSearch);

smalltalk.addMethod(
unescape('_launchViewOn_'),
smalltalk.method({
selector: unescape('launchViewOn%3A'),
category: 'not yet classified',
fn: function (aJSONObject){
var self=this;
var recipe=nil;
var recipeView=nil;
recipe=smalltalk.send((smalltalk.CouchDoc || CouchDoc), "_on_id_revision_", [smalltalk.send((smalltalk.Recipe || Recipe), "_fromJSON_", [aJSONObject]), smalltalk.send(aJSONObject, "_at_", ["_id"]), smalltalk.send(aJSONObject, "_at_", ["_rev"])]);
recipeView=smalltalk.send((smalltalk.RecipeView || RecipeView), "_on_", [recipe]);
smalltalk.send(recipeView, "_appendToJQuery_", [smalltalk.send(unescape("%23recipe"), "_asJQuery", [])]);
return self;},
args: ["aJSONObject"],
source: unescape('launchViewOn%3A%20aJSONObject%0A%7C%20recipe%20recipeView%20%7C%0A%0A%09recipe%20%3A%3D%20CouchDoc%0A%09%09%09on%3A%20%28%20Recipe%20fromJSON%3A%20aJSONObject%20%29%0A%09%09%09id%3A%20%28%20aJSONObject%20at%3A%20%27_id%27%20%29%0A%09%09%09revision%3A%20%28%20aJSONObject%20at%3A%20%27_rev%27%20%29.%0A%09recipeView%20%3A%3D%20RecipeView%20on%3A%20recipe.%0A%09recipeView%20appendToJQuery%3A%20%28%20%27%23recipe%27%20asJQuery%20%29.%20%0A'),
messageSends: ["on:id:revision:", "fromJSON:", "at:", "on:", "appendToJQuery:", "asJQuery"],
referencedClasses: ["CouchDoc", "Recipe", "RecipeView"]
}),
smalltalk.RecipeSearch);



