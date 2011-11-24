smalltalk.addPackage('Grocery', []);
smalltalk.addClass('Recipe', smalltalk.Object, ['ingredients'], 'Grocery');
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
return self['@ingredients'];
return self;},
args: [],
source: unescape('ingredients%0A%0A%09%5E%20ingredients'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Recipe);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
category: 'not yet classified',
fn: function () {
var self=this;
return (typeof name == 'undefined' ? nil : name);
return self;},
args: [],
source: unescape('name%0A%0A%09%5E%20%20name'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Recipe);

smalltalk.addMethod(
unescape('_initializeNamed_ingredients_'),
smalltalk.method({
selector: unescape('initializeNamed%3Aingredients%3A'),
category: 'not yet classified',
fn: function (aName, anArray) {
var self=this;
name=aName;
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
fn: function (aName) {
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
fn: function (aName, anArray) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeNamed_ingredients_", [aName, anArray]);
return self;},
args: ["aName", "anArray"],
source: unescape('named%3A%20aName%20ingredients%3A%20anArray%0A%0A%09%5E%20self%20new%20initializeNamed%3A%20aName%20ingredients%3A%20anArray'),
messageSends: ["initializeNamed:ingredients:", "new"],
referencedClasses: []
}),
smalltalk.Recipe.klass);


smalltalk.addClass('Ingredient', smalltalk.Object, ['name'], 'Grocery');
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
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'not yet classified',
fn: function (anIngredient) {
var self=this;
return smalltalk.send(smalltalk.send(anIngredient, "_isKindOf_", [smalltalk.send(self, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(anIngredient, "_name", []), "__eq", [smalltalk.send(self, "_name", [])]);})]);
return self;},
args: ["anIngredient"],
source: unescape('%3D%20anIngredient%0A%0A%09%5E%20%28%20anIngredient%20isKindOf%3A%20self%20class%20%29%20and%3A%20%5B%20anIngredient%20name%20%3D%20self%20name%20%5D'),
messageSends: ["and:", "isKindOf:", "class", unescape("%3D"), "name"],
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


smalltalk.addClass('ModelView', smalltalk.SmackboneView, ['model'], 'Grocery');
smalltalk.addMethod(
unescape('_initializeOn_'),
smalltalk.method({
selector: unescape('initializeOn%3A'),
category: 'not yet classified',
fn: function (aModel) {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@model']=aModel;
return self;},
args: ["aModel"],
source: unescape('initializeOn%3A%20aModel%0A%0A%09super%20initialize.%0A%09model%20%3A%3D%20aModel'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ModelView);

smalltalk.addMethod(
unescape('_model'),
smalltalk.method({
selector: unescape('model'),
category: 'not yet classified',
fn: function () {
var self=this;
return self['@model'];
return self;},
args: [],
source: unescape('model%0A%0A%09%5E%20model'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ModelView);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'not yet classified',
fn: function (aModel) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [aModel]);
return self;},
args: ["aModel"],
source: unescape('on%3A%20aModel%0A%0A%09%5E%20self%20new%20initializeOn%3A%20aModel'),
messageSends: ["initializeOn:", "new"],
referencedClasses: []
}),
smalltalk.ModelView.klass);


smalltalk.addClass('RecipeView', smalltalk.ModelView, [], 'Grocery');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TextView || TextView), "_on_", [smalltalk.send(smalltalk.send(self, "_recipe", []), "_name", [])]), "_renderOn_", [html]);
smalltalk.send(smalltalk.send((smalltalk.IngredientsView || IngredientsView), "_on_", [smalltalk.send(smalltalk.send(self, "_recipe", []), "_ingredients", [])]), "_renderOn_", [html]);
smalltalk.send(self, "_renderIngredientAdderOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09%28%20TextView%20on%3A%20self%20recipe%20name%20%29%20renderOn%3A%20html.%0A%09%28%20IngredientsView%20on%3A%20self%20recipe%20ingredients%20%29%20renderOn%3A%20html.%0A%09self%20renderIngredientAdderOn%3A%20html.'),
messageSends: ["renderOn:", "on:", "name", "recipe", "ingredients", "renderIngredientAdderOn:"],
referencedClasses: ["TextView", "IngredientsView"]
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_recipe'),
smalltalk.method({
selector: unescape('recipe'),
category: 'not yet classified',
fn: function () {
var self=this;
return self['@model'];
return self;},
args: [],
source: unescape('recipe%0A%0A%09%5E%20model'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_renderIngredientAdderOn_'),
smalltalk.method({
selector: unescape('renderIngredientAdderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
var input=nil;
var button=nil;
input=smalltalk.send(html, "_input", []);
button=smalltalk.send(smalltalk.send(html, "_button", []), "_with_", ["Add Ingredient"]);
return self;},
args: ["html"],
source: unescape('renderIngredientAdderOn%3A%20html%0A%7C%20input%20button%20%7C%0A%0A%09input%20%3A%3D%20html%20input.%0A%20%20%20%20%20%20%20%20button%20%3A%3D%20html%20button%20with%3A%20%27Add%20Ingredient%27.%0A%09%0A%22%09button%20asJQuery%20click%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20%09self%20recipe%20add%3A%20%28%20Ingredient%20named%3A%20input%20asJQuery%20val%20%29.%0A%20%20%20%20%20%20%20%20%20%20%09self%20recipe%20save.%0A%20%20%20%20%20%20%20%20%20%20%09self%20refresh.%0A%20%20%20%20%20%20%20%20%5D%0A%22'),
messageSends: ["input", "with:", "button"],
referencedClasses: []
}),
smalltalk.RecipeView);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'not yet classified',
fn: function (aRecipe) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [aRecipe]);
return self;},
args: ["aRecipe"],
source: unescape('on%3A%20aRecipe%0A%0A%09%5E%20self%20new%20initializeOn%3A%20aRecipe'),
messageSends: ["initializeOn:", "new"],
referencedClasses: []
}),
smalltalk.RecipeView.klass);


smalltalk.addClass('TextView', smalltalk.ModelView, [], 'Grocery');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(self, "_text", [])]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09html%20div%20with%3A%20self%20text.'),
messageSends: ["with:", "div", "text"],
referencedClasses: []
}),
smalltalk.TextView);

smalltalk.addMethod(
unescape('_text'),
smalltalk.method({
selector: unescape('text'),
category: 'not yet classified',
fn: function () {
var self=this;
return self['@model'];
return self;},
args: [],
source: unescape('text%0A%0A%09%5E%20model'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TextView);



smalltalk.addClass('IngredientsView', smalltalk.ModelView, [], 'Grocery');
smalltalk.addMethod(
unescape('_ingredients'),
smalltalk.method({
selector: unescape('ingredients'),
category: 'not yet classified',
fn: function () {
var self=this;
return self['@model'];
return self;},
args: [],
source: unescape('ingredients%0A%0A%09%5E%20model'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IngredientsView);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(smalltalk.send(self, "_ingredients", []), "_do_", [(function(anIngredient){return smalltalk.send(smalltalk.send((smalltalk.IngredientView || IngredientView), "_on_", [anIngredient]), "_renderOn_", [html]);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09self%20ingredients%20do%3A%20%5B%20%3AanIngredient%20%7C%0A%20%20%20%20%20%20%20%20%09%28%20IngredientView%20on%3A%20anIngredient%20%29%20renderOn%3A%20html%20%5D'),
messageSends: ["do:", "ingredients", "renderOn:", "on:"],
referencedClasses: ["IngredientView"]
}),
smalltalk.IngredientsView);



smalltalk.addClass('IngredientView', smalltalk.ModelView, [], 'Grocery');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TextView || TextView), "_on_", [smalltalk.send(smalltalk.send(self, "_ingredient", []), "_name", [])]), "_renderOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09%28%20TextView%20on%3A%20self%20ingredient%20name%20%29%20renderOn%3A%20html.'),
messageSends: ["renderOn:", "on:", "name", "ingredient"],
referencedClasses: ["TextView"]
}),
smalltalk.IngredientView);

smalltalk.addMethod(
unescape('_ingredient'),
smalltalk.method({
selector: unescape('ingredient'),
category: 'not yet classified',
fn: function () {
var self=this;
return self['@model'];
return self;},
args: [],
source: unescape('ingredient%0A%0A%09%5E%20model'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IngredientView);



smalltalk.addClass('IngredientForm', smalltalk.ModelView, ['name', 'clickAction', 'button', 'input'], 'Grocery');
smalltalk.addMethod(
unescape('_initializeOnClick_'),
smalltalk.method({
selector: unescape('initializeOnClick%3A'),
category: 'not yet classified',
fn: function (aBlock) {
var self=this;
self['@clickAction']=aBlock;
return self;},
args: ["aBlock"],
source: unescape('initializeOnClick%3A%20aBlock%0A%0A%09clickAction%20%3A%3D%20aBlock.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IngredientForm);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
self['@input']=smalltalk.send(html, "_input", []);
self['@button']=smalltalk.send(smalltalk.send(html, "_button", []), "_with_", ["Add Ingredient"]);
smalltalk.send(smalltalk.send(self['@button'], "_asJQuery", []), "_click_", [(function(){return smalltalk.send(self['@clickAction'], "_value_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])])]);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09input%20%3A%3D%20html%20input.%0A%09button%20%3A%3D%20html%20button%20with%3A%20%27Add%20Ingredient%27.%0A%0A%09button%20asJQuery%20click%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20clickAction%20value%3A%20%28%20Ingredient%20named%3A%20input%20asJQuery%20val%20%29.%0A%20%20%20%20%20%20%20%20%5D%0A%22%0A%09button%20asJQuery%20click%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20%09self%20recipe%20add%3A%20%28%20Ingredient%20named%3A%20input%20asJQuery%20val%20%29.%0A%20%20%20%20%20%20%20%20%20%20%09self%20recipe%20save.%0A%20%20%20%20%20%20%20%20%20%20%09self%20refresh.%0A%20%20%20%20%20%20%20%20%5D%0A%22'),
messageSends: ["input", "with:", "button", "click:", "asJQuery", "value:", "named:", "val"],
referencedClasses: ["Ingredient"]
}),
smalltalk.IngredientForm);

smalltalk.addMethod(
unescape('_click'),
smalltalk.method({
selector: unescape('click'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self['@button'], "_asJQuery", []), "_click", []);
return self;},
args: [],
source: unescape('click%0A%0A%09button%20asJQuery%20click'),
messageSends: ["click", "asJQuery"],
referencedClasses: []
}),
smalltalk.IngredientForm);

smalltalk.addMethod(
unescape('_val_'),
smalltalk.method({
selector: unescape('val%3A'),
category: 'not yet classified',
fn: function (aString) {
var self=this;
smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val_", [aString]);
return self;},
args: ["aString"],
source: unescape('val%3A%20aString%0A%0A%09input%20asJQuery%20val%3A%20aString.'),
messageSends: ["val:", "asJQuery"],
referencedClasses: []
}),
smalltalk.IngredientForm);


smalltalk.addMethod(
unescape('_onClick_'),
smalltalk.method({
selector: unescape('onClick%3A'),
category: 'not yet classified',
fn: function (aBlock) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOnClick_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onClick%3A%20aBlock%0A%0A%09%5E%20self%20new%20initializeOnClick%3A%20aBlock'),
messageSends: ["initializeOnClick:", "new"],
referencedClasses: []
}),
smalltalk.IngredientForm.klass);


smalltalk.addClass('GroceryWidget', smalltalk.Object, [], 'Grocery');
smalltalk.addMethod(
unescape('_render'),
smalltalk.method({
selector: unescape('render'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self, "_components", []), "_do_", [(function(aComponent){return smalltalk.send(aComponent, "_render", []);})]);
return self;},
args: [],
source: unescape('render%0A%0A%09self%20components%20do%3A%20%5B%20%3AaComponent%20%7C%20aComponent%20render%20%5D'),
messageSends: ["do:", "components", "render"],
referencedClasses: []
}),
smalltalk.GroceryWidget);



smalltalk.addClass('RecipeWidget', smalltalk.GroceryWidget, ['view', 'ingredientsWidget'], 'Grocery');
smalltalk.addMethod(
unescape('_initializeOn_'),
smalltalk.method({
selector: unescape('initializeOn%3A'),
category: 'not yet classified',
fn: function (aRecipe) {
var self=this;
self['@view']=smalltalk.send((smalltalk.RecipeView || RecipeView), "_on_", [aRecipe]);
self['@ingredientsWidget']=smalltalk.send((smalltalk.IngredientsWidget || IngredientsWidget), "_on_onClick_", [smalltalk.send(aRecipe, "_ingredients", []), (function(){return smalltalk.send(self, "_render", []);})]);
return self;},
args: ["aRecipe"],
source: unescape('initializeOn%3A%20aRecipe%0A%0A%09view%20%3A%3D%20RecipeView%20on%3A%20aRecipe.%0A%09ingredientsWidget%20%3A%3D%20IngredientsWidget%20on%3A%20aRecipe%20ingredients%20onClick%3A%20%5B%20self%20render%20%5D.'),
messageSends: ["on:", "on:onClick:", "ingredients", "render"],
referencedClasses: ["RecipeView", "IngredientsWidget"]
}),
smalltalk.RecipeWidget);

smalltalk.addMethod(
unescape('_val_'),
smalltalk.method({
selector: unescape('val%3A'),
category: 'not yet classified',
fn: function (aValue) {
var self=this;
return smalltalk.send(self['@ingredientsWidget'], "_val_", [aValue]);
return self;},
args: ["aValue"],
source: unescape('val%3A%20aValue%0A%0A%09%5E%20ingredientsWidget%20val%3A%20aValue'),
messageSends: ["val:"],
referencedClasses: []
}),
smalltalk.RecipeWidget);

smalltalk.addMethod(
unescape('_components'),
smalltalk.method({
selector: unescape('components'),
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Array || Array), "_with_with_", [self['@view'], self['@ingredientsWidget']]);
return self;},
args: [],
source: unescape('components%0A%0A%09%5E%20Array%20%0A%09%09with%3A%20view%0A%09%09with%3A%20ingredientsWidget'),
messageSends: ["with:with:"],
referencedClasses: ["Array"]
}),
smalltalk.RecipeWidget);

smalltalk.addMethod(
unescape('_click'),
smalltalk.method({
selector: unescape('click'),
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.send(self['@ingredientsWidget'], "_click", []);
return self;},
args: [],
source: unescape('click%0A%0A%09%5E%20ingredientsWidget%20click'),
messageSends: ["click"],
referencedClasses: []
}),
smalltalk.RecipeWidget);

smalltalk.addMethod(
unescape('_text'),
smalltalk.method({
selector: unescape('text'),
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self['@view'], "_el", []), "_text", []);
return self;},
args: [],
source: unescape('text%0A%0A%09%5E%20view%20el%20text'),
messageSends: ["text", "el"],
referencedClasses: []
}),
smalltalk.RecipeWidget);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'not yet classified',
fn: function (aModel) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_", [aModel]);
return self;},
args: ["aModel"],
source: unescape('on%3A%20aModel%0A%0A%09%5E%20self%20new%20initializeOn%3A%20aModel'),
messageSends: ["initializeOn:", "new"],
referencedClasses: []
}),
smalltalk.RecipeWidget.klass);


smalltalk.addClass('IngredientsWidget', smalltalk.GroceryWidget, ['view', 'ingredientForm', 'clickAction'], 'Grocery');
smalltalk.addMethod(
unescape('_val_'),
smalltalk.method({
selector: unescape('val%3A'),
category: 'not yet classified',
fn: function (aValue) {
var self=this;
return smalltalk.send(self['@ingredientForm'], "_val_", [aValue]);
return self;},
args: ["aValue"],
source: unescape('val%3A%20aValue%0A%0A%09%5E%20ingredientForm%20val%3A%20aValue'),
messageSends: ["val:"],
referencedClasses: []
}),
smalltalk.IngredientsWidget);

smalltalk.addMethod(
unescape('_components'),
smalltalk.method({
selector: unescape('components'),
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Array || Array), "_with_with_", [self['@view'], self['@ingredientForm']]);
return self;},
args: [],
source: unescape('components%0A%0A%09%5E%20Array%20%0A%09%09with%3A%20view%0A%09%09with%3A%20ingredientForm'),
messageSends: ["with:with:"],
referencedClasses: ["Array"]
}),
smalltalk.IngredientsWidget);

smalltalk.addMethod(
unescape('_click'),
smalltalk.method({
selector: unescape('click'),
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.send(self['@ingredientForm'], "_click", []);
return self;},
args: [],
source: unescape('click%0A%0A%09%5E%20ingredientForm%20click'),
messageSends: ["click"],
referencedClasses: []
}),
smalltalk.IngredientsWidget);

smalltalk.addMethod(
unescape('_initializeOn_onClick_'),
smalltalk.method({
selector: unescape('initializeOn%3AonClick%3A'),
category: 'not yet classified',
fn: function (anArray, aBlock) {
var self=this;
self['@view']=smalltalk.send((smalltalk.IngredientsView || IngredientsView), "_on_", [anArray]);
self['@clickAction']=aBlock;
self['@ingredientForm']=smalltalk.send((smalltalk.IngredientForm || IngredientForm), "_onClick_", [(function(anIngredient){smalltalk.send(anArray, "_add_", [anIngredient]);smalltalk.send(self, "_render", []);return smalltalk.send(self['@clickAction'], "_value", []);})]);
return self;},
args: ["anArray", "aBlock"],
source: unescape('initializeOn%3A%20anArray%20onClick%3A%20aBlock%0A%0A%09view%20%3A%3D%20IngredientsView%20on%3A%20anArray.%0A%09clickAction%20%3A%3D%20aBlock.%0A%09ingredientForm%20%3A%3D%20%0A%09%09IngredientForm%20onClick%3A%20%5B%20%3AanIngredient%20%7C%20%0A%09%09%09anArray%20add%3A%20anIngredient.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20render.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20clickAction%20value.%20%5D'),
messageSends: ["on:", "onClick:", "add:", "render", "value"],
referencedClasses: ["IngredientsView", "IngredientForm"]
}),
smalltalk.IngredientsWidget);

smalltalk.addMethod(
unescape('_text'),
smalltalk.method({
selector: unescape('text'),
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self['@view'], "_el", []), "_text", []);
return self;},
args: [],
source: unescape('text%0A%0A%09%5E%20view%20el%20text'),
messageSends: ["text", "el"],
referencedClasses: []
}),
smalltalk.IngredientsWidget);


smalltalk.addMethod(
unescape('_on_onClick_'),
smalltalk.method({
selector: unescape('on%3AonClick%3A'),
category: 'not yet classified',
fn: function (aModel, aBlock) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_onClick_", [aModel, aBlock]);
return self;},
args: ["aModel", "aBlock"],
source: unescape('on%3A%20aModel%20onClick%3A%20aBlock%0A%0A%09%5E%20self%20new%20initializeOn%3A%20aModel%20onClick%3A%20aBlock'),
messageSends: ["initializeOn:onClick:", "new"],
referencedClasses: []
}),
smalltalk.IngredientsWidget.klass);


smalltalk.addClass('RecipeLibrary', smalltalk.Object, ['recipes', 'library'], 'Grocery');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function () {
var self=this;
self['@library']=smalltalk.send((smalltalk.Array || Array), "_new", []);
return self;},
args: [],
source: unescape('initialize%0A%0A%09library%20%3A%3D%20Array%20new.'),
messageSends: ["new"],
referencedClasses: ["Array"]
}),
smalltalk.RecipeLibrary);



smalltalk.addClass('CouchDB', smalltalk.Object, ['collection', 'uri'], 'Grocery');
smalltalk.addMethod(
unescape('_initializeOn_at_'),
smalltalk.method({
selector: unescape('initializeOn%3Aat%3A'),
category: 'not yet classified',
fn: function (aCollection, aURI) {
var self=this;
self['@collection']=aCollection;
self['@uri']=aURI;
return self;},
args: ["aCollection", "aURI"],
source: unescape('initializeOn%3A%20aCollection%20at%3A%20aURI%0A%0A%09collection%20%3A%3D%20aCollection.%0A%09uri%20%3A%3D%20aURI.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CouchDB);

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
category: 'not yet classified',
fn: function (aMessage) {
var self=this;
smalltalk.send(aMessage, "_inspect", []);
return smalltalk.send(self['@collection'], "_perform_withArguments_", [smalltalk.send(aMessage, "_selector", []), smalltalk.send(aMessage, "_arguments", [])]);
return self;},
args: ["aMessage"],
source: unescape('doesNotUnderstand%3A%20aMessage%0AaMessage%20inspect.%0A%09%5E%20collection%20%0A%09%09perform%3A%20aMessage%20selector%0A%09%09withArguments%3A%20aMessage%20arguments'),
messageSends: ["inspect", "perform:withArguments:", "selector", "arguments"],
referencedClasses: []
}),
smalltalk.CouchDB);


smalltalk.addMethod(
unescape('_on_at_'),
smalltalk.method({
selector: unescape('on%3Aat%3A'),
category: 'not yet classified',
fn: function (aCollection, aURI) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeOn_at_", [aCollection, aURI]);
return self;},
args: ["aCollection", "aURI"],
source: unescape('on%3A%20aCollection%20at%3A%20aURI%0A%0A%09%5E%20self%20new%20initializeOn%3A%20aCollection%20at%3A%20aURI'),
messageSends: ["initializeOn:at:", "new"],
referencedClasses: []
}),
smalltalk.CouchDB.klass);


