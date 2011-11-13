smalltalk.addPackage('Grocery', []);
smalltalk.addClass('Recipe', smalltalk.Object, ['ingredients'], 'Grocery');
smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
fn: function (anIngredient){
var self=this;
smalltalk.send(self['@ingredients'], "_add_", [anIngredient]);
return self;}
}),
smalltalk.Recipe);

smalltalk.addMethod(
'_includes_',
smalltalk.method({
selector: 'includes:',
fn: function (anIngredient){
var self=this;
return smalltalk.send(self['@ingredients'], "_includes_", [anIngredient]);
return self;}
}),
smalltalk.Recipe);

smalltalk.addMethod(
'_ingredients',
smalltalk.method({
selector: 'ingredients',
fn: function (){
var self=this;
return smalltalk.send(self['@ingredients'], "_copy", []);
return self;}
}),
smalltalk.Recipe);

smalltalk.addMethod(
'_name',
smalltalk.method({
selector: 'name',
fn: function (){
var self=this;
return (typeof name == 'undefined' ? nil : name);
return self;}
}),
smalltalk.Recipe);

smalltalk.addMethod(
'_initializeNamed_ingredients_',
smalltalk.method({
selector: 'initializeNamed:ingredients:',
fn: function (aName, anArray){
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


smalltalk.addClass('Ingredient', smalltalk.Object, ['name'], 'Grocery');
smalltalk.addMethod(
'_initializeNamed_',
smalltalk.method({
selector: 'initializeNamed:',
fn: function (aName){
var self=this;
self['@name']=aName;
return self;}
}),
smalltalk.Ingredient);

smalltalk.addMethod(
'_name',
smalltalk.method({
selector: 'name',
fn: function (){
var self=this;
return self['@name'];
return self;}
}),
smalltalk.Ingredient);


smalltalk.addMethod(
'_named_',
smalltalk.method({
selector: 'named:',
fn: function (aName){
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
fn: function (aModel){
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
fn: function (){
var self=this;
return self['@model'];
return self;}
}),
smalltalk.ModelView);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aModel){
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
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TextView || TextView), "_on_", [smalltalk.send(smalltalk.send(self, "_recipe", []), "_name", [])]), "_renderOn_", [html]);
smalltalk.send(smalltalk.send((smalltalk.IngredientsView || IngredientsView), "_on_", [smalltalk.send(smalltalk.send(self, "_recipe", []), "_ingredients", [])]), "_renderOn_", [html]);
smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send(self['@el'], "_text", [])]);
return self;}
}),
smalltalk.RecipeView);

smalltalk.addMethod(
'_recipe',
smalltalk.method({
selector: 'recipe',
fn: function (){
var self=this;
return self['@model'];
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


smalltalk.addClass('TextView', smalltalk.ModelView, [], 'Grocery');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(self, "_text", [])]);
return self;}
}),
smalltalk.TextView);

smalltalk.addMethod(
'_text',
smalltalk.method({
selector: 'text',
fn: function (){
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
fn: function (){
var self=this;
return self['@model'];
return self;}
}),
smalltalk.IngredientsView);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
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
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TextView || TextView), "_on_", [smalltalk.send(smalltalk.send(self, "_ingredient", []), "_name", [])]), "_renderOn_", [html]);
return self;}
}),
smalltalk.IngredientView);

smalltalk.addMethod(
'_ingredient',
smalltalk.method({
selector: 'ingredient',
fn: function (){
var self=this;
return self['@model'];
return self;}
}),
smalltalk.IngredientView);



