smalltalk.addPackage('GroceryApp', []);
smalltalk.addClass('RecipeTest', smalltalk.TestCase, [], 'GroceryApp');
smalltalk.addMethod(
'_testRecipeIsNamed',
smalltalk.method({
selector: 'testRecipeIsNamed',
fn: function () {
var self=this;
var recipe=nil;
recipe=smalltalk.send((smalltalk.Recipe || Recipe), "_named_", ["BLTs"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(recipe, "_name", []), "__eq", ["BLTs"])]);
return self;}
}),
smalltalk.RecipeTest);

smalltalk.addMethod(
'_testRecipeAddIngredient',
smalltalk.method({
selector: 'testRecipeAddIngredient',
fn: function () {
var self=this;
var recipe=nil;
var ingredient=nil;
recipe=smalltalk.send((smalltalk.Recipe || Recipe), "_named_", ["BLTs"]);
ingredient=smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"]);
smalltalk.send(recipe, "_add_", [ingredient]);
smalltalk.send(self, "_assert_", [smalltalk.send(recipe, "_includes_", [ingredient])]);
return self;}
}),
smalltalk.RecipeTest);



smalltalk.addClass('Recipe', smalltalk.Object, ['name', 'ingredients'], 'GroceryApp');
smalltalk.addMethod(
'_name',
smalltalk.method({
selector: 'name',
fn: function () {
var self=this;
return self['@name'];
return self;}
}),
smalltalk.Recipe);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
fn: function (anIngredient) {
var self=this;
smalltalk.send(self['@ingredients'], "_add_", [anIngredient]);
return self;}
}),
smalltalk.Recipe);

smalltalk.addMethod(
'_includes_',
smalltalk.method({
selector: 'includes:',
fn: function (anIngredient) {
var self=this;
return smalltalk.send(self['@ingredients'], "_includes_", [anIngredient]);
return self;}
}),
smalltalk.Recipe);

smalltalk.addMethod(
'_ingredients',
smalltalk.method({
selector: 'ingredients',
fn: function () {
var self=this;
return smalltalk.send(self['@ingredients'], "_copy", []);
return self;}
}),
smalltalk.Recipe);

smalltalk.addMethod(
'_initializeNamed_ingredients_',
smalltalk.method({
selector: 'initializeNamed:ingredients:',
fn: function (aName, anArray){
var self=this;
self['@name']=aName;
self['@ingredients']=anArray;
return self;}
}),
smalltalk.Recipe);


smalltalk.addMethod(
'_named_',
smalltalk.method({
selector: 'named:',
fn: function (aName){
var self=this;
return smalltalk.send(self, "_named_ingredients_", [aName, smalltalk.send((smalltalk.Array || Array), "_new", [])]);
return self;}
}),
smalltalk.Recipe.klass);

smalltalk.addMethod(
'_named_ingredients_',
smalltalk.method({
selector: 'named:ingredients:',
fn: function (aName, anArray){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeNamed_ingredients_", [aName, anArray]);
return self;}
}),
smalltalk.Recipe.klass);

smalltalk.addMethod(
'_fromJSON_',
smalltalk.method({
selector: 'fromJSON:',
fn: function (aJSONObject){
var self=this;
var ingredients=nil;
ingredients=smalltalk.send(smalltalk.send(aJSONObject, "_ingredients", []), "_collect_", [(function(anIngredientJSON){return smalltalk.send((smalltalk.Ingredient || Ingredient), "_fromJSON_", [anIngredientJSON]);})]);
return smalltalk.send(self, "_named_ingredients_", [smalltalk.send(aJSONObject, "_name", []), ingredients]);
return self;}
}),
smalltalk.Recipe.klass);


smalltalk.addClass('RecipeView', smalltalk.Widget, ['recipe'], 'GroceryApp');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderNameOn_", [html]);
smalltalk.send(self, "_renderIngredientsOn_", [html]);
smalltalk.send(self, "_renderIngredientInputOn_", [html]);
smalltalk.send(self, "_renderSaveButtonOn_", [html]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_recipe',
smalltalk.method({
selector: 'recipe',
fn: function () {
var self=this;
return self['@recipe'];
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_renderIngredientInputOn_',
smalltalk.method({
selector: 'renderIngredientInputOn:',
fn: function (html){
var self=this;
var input=nil;
var button=nil;
input=smalltalk.send(self, "_ingredientInputOn_", [html]);
button=smalltalk.send(self, "_addIngredientButtonOn_", [html]);
smalltalk.send(smalltalk.send(button, "_asJQuery", []), "_click_", [(function(){smalltalk.send(smalltalk.send(self, "_recipe", []), "_add_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", [smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_val", [])])]);return smalltalk.send(self, "_refresh", []);})]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_refresh',
smalltalk.method({
selector: 'refresh',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_selector", []), "_empty", []);
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send(self, "_selector", [])]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
fn: function () {
var self=this;
return smalltalk.send(unescape("%23recipe"), "_asJQuery", []);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_renderSaveButtonOn_',
smalltalk.method({
selector: 'renderSaveButtonOn:',
fn: function (html){
var self=this;
var button=nil;
smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return button=smalltalk.send(self, "_saveButtonOn_", [html]);})]);
smalltalk.send(smalltalk.send(button, "_asJQuery", []), "_click_", [(function(){return smalltalk.send(smalltalk.send(self, "_recipe", []), "_save", []);})]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_initializeOn_',
smalltalk.method({
selector: 'initializeOn:',
fn: function (aRecipe){
var self=this;
self['@recipe']=aRecipe;
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_renderNameOn_',
smalltalk.method({
selector: 'renderNameOn:',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(smalltalk.send(self, "_recipe", []), "_name", [])]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_renderIngredientsOn_',
smalltalk.method({
selector: 'renderIngredientsOn:',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(self['@recipe'], "_ingredients", []), "_do_", [(function(anIngredient){return smalltalk.send(smalltalk.send((smalltalk.IngredientView || IngredientView), "_on_", [anIngredient]), "_renderOn_", [html]);})]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_saveButtonOn_',
smalltalk.method({
selector: 'saveButtonOn:',
fn: function (html){
var self=this;
return (function($rec){smalltalk.send($rec, "_id_", ["saveRecipe"]);return smalltalk.send($rec, "_with_", ["Save"]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_ingredientInputOn_',
smalltalk.method({
selector: 'ingredientInputOn:',
fn: function (html){
var self=this;
return smalltalk.send(smalltalk.send(html, "_input", []), "_id_", ["ingredientInput"]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_addIngredientButtonOn_',
smalltalk.method({
selector: 'addIngredientButtonOn:',
fn: function (html){
var self=this;
return (function($rec){smalltalk.send($rec, "_id_", ["addIngredient"]);return smalltalk.send($rec, "_with_", ["Add Ingredient"]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.RecipeView);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aRecipe){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [aRecipe]);
return self;}
}),
smalltalk.RecipeView.klass);


smalltalk.addClass('IngredientTest', smalltalk.TestCase, [], 'GroceryApp');
smalltalk.addMethod(
'_testIngredient',
smalltalk.method({
selector: 'testIngredient',
fn: function () {
var self=this;
var ingredient=nil;
ingredient=smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(ingredient, "_name", []), "__eq", ["1 Pound of Bacon"])]);
return self;}
}),
smalltalk.IngredientTest);



smalltalk.addClass('Ingredient', smalltalk.Object, ['name'], 'GroceryApp');
smalltalk.addMethod(
'_initializeNamed_',
smalltalk.method({
selector: 'initializeNamed:',
fn: function (aName) {
var self=this;
self['@name']=aName;
return self;}
}),
smalltalk.Ingredient);

smalltalk.addMethod(
'_name',
smalltalk.method({
selector: 'name',
fn: function () {
var self=this;
return self['@name'];
return self;}
}),
smalltalk.Ingredient);


smalltalk.addMethod(
'_named_',
smalltalk.method({
selector: 'named:',
fn: function (aName) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeNamed_", [aName]);
return self;}
}),
smalltalk.Ingredient.klass);

smalltalk.addMethod(
'_fromJSON_',
smalltalk.method({
selector: 'fromJSON:',
fn: function (aJSONObject){
var self=this;
return smalltalk.send(self, "_named_", [smalltalk.send(aJSONObject, "_name", [])]);
return self;}
}),
smalltalk.Ingredient.klass);


smalltalk.addClass('IngredientView', smalltalk.Widget, ['ingredient'], 'GroceryApp');
smalltalk.addMethod(
'_ingredient',
smalltalk.method({
selector: 'ingredient',
fn: function () {
var self=this;
return self['@ingredient'];
return self;}
}),
smalltalk.IngredientView);

smalltalk.addMethod(
'_initializeOn_',
smalltalk.method({
selector: 'initializeOn:',
fn: function (anIngredient) {
var self=this;
self['@ingredient']=anIngredient;
return self;}
}),
smalltalk.IngredientView);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(smalltalk.send(self, "_ingredient", []), "_name", [])]);
return self;}
}),
smalltalk.IngredientView);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (anIngredient) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [anIngredient]);
return self;}
}),
smalltalk.IngredientView.klass);


smalltalk.addClass('CouchDoc', smalltalk.Object, ['model', 'revision', 'id'], 'GroceryApp');
smalltalk.addMethod(
'_intitializeOn_id_revision_',
smalltalk.method({
selector: 'intitializeOn:id:revision:',
fn: function (aModel, anId, aRevision){
var self=this;
self['@model']=aModel;
self['@id']=anId;
self['@revision']=aRevision;
return self;}
}),
smalltalk.CouchDoc);

smalltalk.addMethod(
'_doesNotUnderstand_',
smalltalk.method({
selector: 'doesNotUnderstand:',
fn: function (aMessage){
var self=this;
return smalltalk.send(self['@model'], "_perform_withArguments_", [smalltalk.send(aMessage, "_selector", []), smalltalk.send(aMessage, "_arguments", [])]);
return self;}
}),
smalltalk.CouchDoc);

smalltalk.addMethod(
'_revision',
smalltalk.method({
selector: 'revision',
fn: function (){
var self=this;
return self['@revision'];
return self;}
}),
smalltalk.CouchDoc);

smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function (){
var self=this;
return self['@id'];
return self;}
}),
smalltalk.CouchDoc);

smalltalk.addMethod(
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_basicAt_put_", ["_rev", self['@revision']]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self['@model'], "_asJSONObject", []));
return self;}
}),
smalltalk.CouchDoc);

smalltalk.addMethod(
'_save',
smalltalk.method({
selector: 'save',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(unescape("http%3A//localhost/couchdb/recipes/"), "__comma", [smalltalk.send(self, "_id", [])]), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["PUT"]),smalltalk.send("contentType", "__minus_gt", [unescape("application/json")]),smalltalk.send("data", "__minus_gt", [smalltalk.send(self, "_asJSON", [])]),smalltalk.send("success", "__minus_gt", [(function(rslt){return smalltalk.send(self, "_update", []);})])])]);
return self;}
}),
smalltalk.CouchDoc);

smalltalk.addMethod(
'_update',
smalltalk.method({
selector: 'update',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(unescape("http%3A//localhost/couchdb/recipes/"), "__comma", [smalltalk.send(self, "_id", [])]), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(jsonp){return smalltalk.send(self, "_updateFromJSON_", [jsonp]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["error"]);})])])]);
return self;}
}),
smalltalk.CouchDoc);

smalltalk.addMethod(
'_updateFromJSON_',
smalltalk.method({
selector: 'updateFromJSON:',
fn: function (aJSONObject){
var self=this;
self['@id']=smalltalk.send(aJSONObject, "_at_", ["_id"]);
self['@revision']=smalltalk.send(aJSONObject, "_at_", ["_rev"]);
return self;}
}),
smalltalk.CouchDoc);


smalltalk.addMethod(
'_on_id_revision_',
smalltalk.method({
selector: 'on:id:revision:',
fn: function (aModel, anId, aRevision){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_intitializeOn_id_revision_", [aModel, anId, aRevision]);
return self;}
}),
smalltalk.CouchDoc.klass);


smalltalk.addClass('RecipeSearch', smalltalk.Object, ['revision'], 'GroceryApp');
smalltalk.addMethod(
'_success_',
smalltalk.method({
selector: 'success:',
fn: function (aJSONObject){
var self=this;
var recipe=nil;
var recipeView=nil;
recipe=smalltalk.send((smalltalk.CouchDoc || CouchDoc), "_on_id_revision_", [smalltalk.send((smalltalk.Recipe || Recipe), "_fromJSON_", [aJSONObject]), smalltalk.send(aJSONObject, "_at_", ["_id"]), smalltalk.send(aJSONObject, "_at_", ["_rev"])]);
recipeView=smalltalk.send((smalltalk.RecipeView || RecipeView), "_on_", [recipe]);
smalltalk.send(recipeView, "_appendToJQuery_", [smalltalk.send(unescape("%23recipe"), "_asJQuery", [])]);
return self;}
}),
smalltalk.RecipeSearch);

smalltalk.addMethod(
'_id_',
smalltalk.method({
selector: 'id:',
fn: function (anId){
var self=this;
var result=nil;
result=smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(unescape("http%3A//localhost/couchdb/recipes/"), "__comma", [anId]), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(jsonp){return smalltalk.send(self, "_success_", [jsonp]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["error"]);})])])]);
return self;}
}),
smalltalk.RecipeSearch);



