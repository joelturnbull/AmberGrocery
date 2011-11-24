smalltalk.addPackage('Grocery', []);
smalltalk.addClass('Recipe', smalltalk.Object, ['ingredients'], 'Grocery');
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
return self['@ingredients'];
return self;}
}),
smalltalk.Recipe);

smalltalk.addMethod(
'_name',
smalltalk.method({
selector: 'name',
fn: function () {
var self=this;
return (typeof name == 'undefined' ? nil : name);
return self;}
}),
smalltalk.Recipe);

smalltalk.addMethod(
'_initializeNamed_ingredients_',
smalltalk.method({
selector: 'initializeNamed:ingredients:',
fn: function (aName, anArray) {
var self=this;
name=aName;
self['@ingredients']=anArray;
return self;}
}),
smalltalk.Recipe);


smalltalk.addMethod(
'_named_',
smalltalk.method({
selector: 'named:',
fn: function (aName) {
var self=this;
return smalltalk.send(self, "_named_ingredients_", [aName, smalltalk.send((smalltalk.Array || Array), "_new", [])]);
return self;}
}),
smalltalk.Recipe.klass);

smalltalk.addMethod(
'_named_ingredients_',
smalltalk.method({
selector: 'named:ingredients:',
fn: function (aName, anArray) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeNamed_ingredients_", [aName, anArray]);
return self;}
}),
smalltalk.Recipe.klass);


smalltalk.addClass('Ingredient', smalltalk.Object, ['name'], 'Grocery');
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
'__eq',
smalltalk.method({
selector: '=',
fn: function (anIngredient) {
var self=this;
return smalltalk.send(smalltalk.send(anIngredient, "_isKindOf_", [smalltalk.send(self, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(anIngredient, "_name", []), "__eq", [smalltalk.send(self, "_name", [])]);})]);
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


smalltalk.addClass('ModelView', smalltalk.SmackboneView, ['model'], 'Grocery');
smalltalk.addMethod(
'_initializeOn_',
smalltalk.method({
selector: 'initializeOn:',
fn: function (aModel) {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@model']=aModel;
return self;}
}),
smalltalk.ModelView);

smalltalk.addMethod(
'_model',
smalltalk.method({
selector: 'model',
fn: function () {
var self=this;
return self['@model'];
return self;}
}),
smalltalk.ModelView);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aModel) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [aModel]);
return self;}
}),
smalltalk.ModelView.klass);


smalltalk.addClass('RecipeView', smalltalk.ModelView, [], 'Grocery');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TextView || TextView), "_on_", [smalltalk.send(smalltalk.send(self, "_recipe", []), "_name", [])]), "_renderOn_", [html]);
smalltalk.send(smalltalk.send((smalltalk.IngredientsView || IngredientsView), "_on_", [smalltalk.send(smalltalk.send(self, "_recipe", []), "_ingredients", [])]), "_renderOn_", [html]);
smalltalk.send(self, "_renderIngredientAdderOn_", [html]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_recipe',
smalltalk.method({
selector: 'recipe',
fn: function () {
var self=this;
return self['@model'];
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_renderIngredientAdderOn_',
smalltalk.method({
selector: 'renderIngredientAdderOn:',
fn: function (html) {
var self=this;
var input=nil;
var button=nil;
input=smalltalk.send(html, "_input", []);
button=smalltalk.send(smalltalk.send(html, "_button", []), "_with_", ["Add Ingredient"]);
return self;}
}),
smalltalk.RecipeView);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aRecipe) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [aRecipe]);
return self;}
}),
smalltalk.RecipeView.klass);


smalltalk.addClass('TextView', smalltalk.ModelView, [], 'Grocery');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(self, "_text", [])]);
return self;}
}),
smalltalk.TextView);

smalltalk.addMethod(
'_text',
smalltalk.method({
selector: 'text',
fn: function () {
var self=this;
return self['@model'];
return self;}
}),
smalltalk.TextView);



smalltalk.addClass('IngredientsView', smalltalk.ModelView, [], 'Grocery');
smalltalk.addMethod(
'_ingredients',
smalltalk.method({
selector: 'ingredients',
fn: function () {
var self=this;
return self['@model'];
return self;}
}),
smalltalk.IngredientsView);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
var self=this;
smalltalk.send(smalltalk.send(self, "_ingredients", []), "_do_", [(function(anIngredient){return smalltalk.send(smalltalk.send((smalltalk.IngredientView || IngredientView), "_on_", [anIngredient]), "_renderOn_", [html]);})]);
return self;}
}),
smalltalk.IngredientsView);



smalltalk.addClass('IngredientView', smalltalk.ModelView, [], 'Grocery');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TextView || TextView), "_on_", [smalltalk.send(smalltalk.send(self, "_ingredient", []), "_name", [])]), "_renderOn_", [html]);
return self;}
}),
smalltalk.IngredientView);

smalltalk.addMethod(
'_ingredient',
smalltalk.method({
selector: 'ingredient',
fn: function () {
var self=this;
return self['@model'];
return self;}
}),
smalltalk.IngredientView);



smalltalk.addClass('IngredientForm', smalltalk.ModelView, ['name', 'clickAction', 'button', 'input'], 'Grocery');
smalltalk.addMethod(
'_initializeOnClick_',
smalltalk.method({
selector: 'initializeOnClick:',
fn: function (aBlock) {
var self=this;
self['@clickAction']=aBlock;
return self;}
}),
smalltalk.IngredientForm);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
var self=this;
self['@input']=smalltalk.send(html, "_input", []);
self['@button']=smalltalk.send(smalltalk.send(html, "_button", []), "_with_", ["Add Ingredient"]);
smalltalk.send(smalltalk.send(self['@button'], "_asJQuery", []), "_click_", [(function(){return smalltalk.send(self['@clickAction'], "_value_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])])]);})]);
return self;}
}),
smalltalk.IngredientForm);

smalltalk.addMethod(
'_click',
smalltalk.method({
selector: 'click',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self['@button'], "_asJQuery", []), "_click", []);
return self;}
}),
smalltalk.IngredientForm);

smalltalk.addMethod(
'_val_',
smalltalk.method({
selector: 'val:',
fn: function (aString) {
var self=this;
smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val_", [aString]);
return self;}
}),
smalltalk.IngredientForm);


smalltalk.addMethod(
'_onClick_',
smalltalk.method({
selector: 'onClick:',
fn: function (aBlock) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOnClick_", [aBlock]);
return self;}
}),
smalltalk.IngredientForm.klass);


smalltalk.addClass('GroceryWidget', smalltalk.Object, [], 'Grocery');
smalltalk.addMethod(
'_render',
smalltalk.method({
selector: 'render',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self, "_components", []), "_do_", [(function(aComponent){return smalltalk.send(aComponent, "_render", []);})]);
return self;}
}),
smalltalk.GroceryWidget);



smalltalk.addClass('RecipeWidget', smalltalk.GroceryWidget, ['view', 'ingredientsWidget'], 'Grocery');
smalltalk.addMethod(
'_initializeOn_',
smalltalk.method({
selector: 'initializeOn:',
fn: function (aRecipe) {
var self=this;
self['@view']=smalltalk.send((smalltalk.RecipeView || RecipeView), "_on_", [aRecipe]);
self['@ingredientsWidget']=smalltalk.send((smalltalk.IngredientsWidget || IngredientsWidget), "_on_onClick_", [smalltalk.send(aRecipe, "_ingredients", []), (function(){return smalltalk.send(self, "_render", []);})]);
return self;}
}),
smalltalk.RecipeWidget);

smalltalk.addMethod(
'_val_',
smalltalk.method({
selector: 'val:',
fn: function (aValue) {
var self=this;
return smalltalk.send(self['@ingredientsWidget'], "_val_", [aValue]);
return self;}
}),
smalltalk.RecipeWidget);

smalltalk.addMethod(
'_components',
smalltalk.method({
selector: 'components',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Array || Array), "_with_with_", [self['@view'], self['@ingredientsWidget']]);
return self;}
}),
smalltalk.RecipeWidget);

smalltalk.addMethod(
'_click',
smalltalk.method({
selector: 'click',
fn: function () {
var self=this;
return smalltalk.send(self['@ingredientsWidget'], "_click", []);
return self;}
}),
smalltalk.RecipeWidget);

smalltalk.addMethod(
'_text',
smalltalk.method({
selector: 'text',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self['@view'], "_el", []), "_text", []);
return self;}
}),
smalltalk.RecipeWidget);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aModel) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [aModel]);
return self;}
}),
smalltalk.RecipeWidget.klass);


smalltalk.addClass('IngredientsWidget', smalltalk.GroceryWidget, ['view', 'ingredientForm', 'clickAction'], 'Grocery');
smalltalk.addMethod(
'_val_',
smalltalk.method({
selector: 'val:',
fn: function (aValue) {
var self=this;
return smalltalk.send(self['@ingredientForm'], "_val_", [aValue]);
return self;}
}),
smalltalk.IngredientsWidget);

smalltalk.addMethod(
'_components',
smalltalk.method({
selector: 'components',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Array || Array), "_with_with_", [self['@view'], self['@ingredientForm']]);
return self;}
}),
smalltalk.IngredientsWidget);

smalltalk.addMethod(
'_click',
smalltalk.method({
selector: 'click',
fn: function () {
var self=this;
return smalltalk.send(self['@ingredientForm'], "_click", []);
return self;}
}),
smalltalk.IngredientsWidget);

smalltalk.addMethod(
'_initializeOn_onClick_',
smalltalk.method({
selector: 'initializeOn:onClick:',
fn: function (anArray, aBlock) {
var self=this;
self['@view']=smalltalk.send((smalltalk.IngredientsView || IngredientsView), "_on_", [anArray]);
self['@clickAction']=aBlock;
self['@ingredientForm']=smalltalk.send((smalltalk.IngredientForm || IngredientForm), "_onClick_", [(function(anIngredient){smalltalk.send(anArray, "_add_", [anIngredient]);smalltalk.send(self, "_render", []);return smalltalk.send(self['@clickAction'], "_value", []);})]);
return self;}
}),
smalltalk.IngredientsWidget);

smalltalk.addMethod(
'_text',
smalltalk.method({
selector: 'text',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self['@view'], "_el", []), "_text", []);
return self;}
}),
smalltalk.IngredientsWidget);


smalltalk.addMethod(
'_on_onClick_',
smalltalk.method({
selector: 'on:onClick:',
fn: function (aModel, aBlock) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_onClick_", [aModel, aBlock]);
return self;}
}),
smalltalk.IngredientsWidget.klass);


smalltalk.addClass('RecipeLibrary', smalltalk.Object, ['recipes', 'library'], 'Grocery');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function () {
var self=this;
self['@library']=smalltalk.send((smalltalk.Array || Array), "_new", []);
return self;}
}),
smalltalk.RecipeLibrary);



smalltalk.addClass('CouchDB', smalltalk.Object, ['collection', 'uri'], 'Grocery');
smalltalk.addMethod(
'_initializeOn_at_',
smalltalk.method({
selector: 'initializeOn:at:',
fn: function (aCollection, aURI) {
var self=this;
self['@collection']=aCollection;
self['@uri']=aURI;
return self;}
}),
smalltalk.CouchDB);

smalltalk.addMethod(
'_doesNotUnderstand_',
smalltalk.method({
selector: 'doesNotUnderstand:',
fn: function (aMessage) {
var self=this;
smalltalk.send(aMessage, "_inspect", []);
return smalltalk.send(self['@collection'], "_perform_withArguments_", [smalltalk.send(aMessage, "_selector", []), smalltalk.send(aMessage, "_arguments", [])]);
return self;}
}),
smalltalk.CouchDB);


smalltalk.addMethod(
'_on_at_',
smalltalk.method({
selector: 'on:at:',
fn: function (aCollection, aURI) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_at_", [aCollection, aURI]);
return self;}
}),
smalltalk.CouchDB.klass);


