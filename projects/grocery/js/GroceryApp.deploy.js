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
'_dbid',
smalltalk.method({
selector: 'dbid',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_db", []), "_id", []);
return self;}
}),
smalltalk.Recipe);

smalltalk.addMethod(
'_asJSON',
smalltalk.method({
selector: 'asJSON',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asVersionedRecipe", []), "_asJSON", []);
return self;}
}),
smalltalk.Recipe);

smalltalk.addMethod(
'_asVersionedRecipe',
smalltalk.method({
selector: 'asVersionedRecipe',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.VersionedRecipe || VersionedRecipe), "_named_ingredients_revision_", [smalltalk.send(self, "_name", []), smalltalk.send(self, "_ingredients", []), smalltalk.send(smalltalk.send(self, "_db", []), "_revision", [])]);
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


smalltalk.addClass('RecipeView', smalltalk.Widget, ['recipe'], 'GroceryApp');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
self['@recipe']=smalltalk.send((smalltalk.CouchDoc || CouchDoc), "_on_id_revision_", [smalltalk.send(self, "_recipeFixture", []), "", ""]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(smalltalk.send(self, "_recipe", []), "_name", [])]);
smalltalk.send(smalltalk.send(self['@recipe'], "_ingredients", []), "_do_", [(function(anIngredient){return smalltalk.send(smalltalk.send((smalltalk.IngredientView || IngredientView), "_on_", [anIngredient]), "_renderOn_", [html]);})]);
smalltalk.send(self, "_renderIngredientInputOn_", [html]);
smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return smalltalk.send(self, "_renderSaveButtonOn_", [html]);})]);
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
fn: function (html) {
var self=this;
var input=nil;
var button=nil;
input=smalltalk.send(smalltalk.send(html, "_input", []), "_id_", ["ingredientInput"]);
button=(function($rec){smalltalk.send($rec, "_id_", ["addIngredient"]);return smalltalk.send($rec, "_with_", ["Add Ingredient"]);})(smalltalk.send(html, "_button", []));
smalltalk.send(self, "_addToRecipeValueOf_onClickOf_", [input, button]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_refresh',
smalltalk.method({
selector: 'refresh',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self, "_selector", []), "_html_", [""]);
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
'_addToRecipeValueOf_onClickOf_',
smalltalk.method({
selector: 'addToRecipeValueOf:onClickOf:',
fn: function (input, button) {
var self=this;
smalltalk.send(smalltalk.send(button, "_asJQuery", []), "_click_", [(function(){smalltalk.send(smalltalk.send(self, "_recipe", []), "_add_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", [smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_val", [])])]);return smalltalk.send(self, "_refresh", []);})]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_renderSaveButtonOn_',
smalltalk.method({
selector: 'renderSaveButtonOn:',
fn: function (html) {
var self=this;
var button=nil;
button=(function($rec){smalltalk.send($rec, "_id_", ["saveRecipe"]);return smalltalk.send($rec, "_with_", ["Save"]);})(smalltalk.send(html, "_button", []));
smalltalk.send(self, "_saveRecipeOnClickOf_", [button]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_saveRecipeOnClickOf_',
smalltalk.method({
selector: 'saveRecipeOnClickOf:',
fn: function (button) {
var self=this;
smalltalk.send(smalltalk.send(button, "_asJQuery", []), "_click_", [(function(){return smalltalk.send(self, "_persistRecipe", []);})]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_persistRecipe',
smalltalk.method({
selector: 'persistRecipe',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(unescape("http%3A//localhost/couchdb/recipes/"), "__comma", [smalltalk.send(self['@recipe'], "_id", [])]), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["PUT"]),smalltalk.send("contentType", "__minus_gt", [unescape("application/json")]),smalltalk.send("data", "__minus_gt", [smalltalk.send(self['@recipe'], "_asJSON", [])])])]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_recipeFixture',
smalltalk.method({
selector: 'recipeFixture',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Recipe || Recipe), "_named_ingredients_", ["BLTs", smalltalk.send((smalltalk.Array || Array), "_with_with_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"]), smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", [unescape("1/2%20Head%20of%20Lettuce")])])]);
return self;}
}),
smalltalk.RecipeView);



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


smalltalk.addClass('VersionedRecipe', smalltalk.Recipe, ['revision'], 'GroceryApp');
smalltalk.addMethod(
'_initializeNamed_ingredients_revision_',
smalltalk.method({
selector: 'initializeNamed:ingredients:revision:',
fn: function (aName, anArray, aRevision){
var self=this;
self['@name']=aName;
self['@ingredients']=anArray;
self['@revision']=aRevision;
return self;}
}),
smalltalk.VersionedRecipe);


smalltalk.addMethod(
'_named_ingredients_revision_',
smalltalk.method({
selector: 'named:ingredients:revision:',
fn: function (aName, anArray, aRevision){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeNamed_ingredients_revision_", [aName, anArray, aRevision]);
return self;}
}),
smalltalk.VersionedRecipe.klass);


smalltalk.addClass('CouchDoc', smalltalk.Object, ['model', 'id', 'revision'], 'GroceryApp');
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
'_name',
smalltalk.method({
selector: 'name',
fn: function (){
var self=this;
return smalltalk.send(self['@model'], "_name", []);
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
'_on_id_revision_',
smalltalk.method({
selector: 'on:id:revision:',
fn: function (aModel, anId, aRevision){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_intitializeOn_id_revision_", [aModel, anId, aRevision]);
return self;}
}),
smalltalk.CouchDoc.klass);


