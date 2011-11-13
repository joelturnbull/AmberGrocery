smalltalk.addPackage('GroceryTest', []);
smalltalk.addClass('GroceryTest', smalltalk.TestCase, ['testObjects'], 'GroceryTest');
smalltalk.addMethod(
'_setUp',
smalltalk.method({
selector: 'setUp',
fn: function (){
var self=this;
self['@testObjects']=smalltalk.send((smalltalk.GroceryTestObjects || GroceryTestObjects), "_new", []);
return self;}
}),
smalltalk.GroceryTest);



smalltalk.addClass('RecipeTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
'_testRecipeAddIngredient',
smalltalk.method({
selector: 'testRecipeAddIngredient',
fn: function (){
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

smalltalk.addMethod(
'_testRecipeIsNamed',
smalltalk.method({
selector: 'testRecipeIsNamed',
fn: function (){
var self=this;
var recipe=nil;
recipe=smalltalk.send((smalltalk.Recipe || Recipe), "_named_", ["BLTs"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(recipe, "_name", []), "__eq", ["BLTs"])]);
return self;}
}),
smalltalk.RecipeTest);



smalltalk.addClass('IngredientTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
'_testIngredient',
smalltalk.method({
selector: 'testIngredient',
fn: function (){
var self=this;
var ingredient=nil;
ingredient=smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(ingredient, "_name", []), "__eq", ["1 Pound of Bacon"])]);
return self;}
}),
smalltalk.IngredientTest);



smalltalk.addClass('RecipeViewTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
'_testDisplaysName',
smalltalk.method({
selector: 'testDisplaysName',
fn: function (){
var self=this;
var recipe=nil;
var view=nil;
recipe=smalltalk.send((smalltalk.Recipe || Recipe), "_named_", ["Tacos"]);
view=smalltalk.send((smalltalk.RecipeView || RecipeView), "_on_", [recipe]);
smalltalk.send(view, "_render", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "__eq", [smalltalk.send(recipe, "_name", [])])]);
return self;}
}),
smalltalk.RecipeViewTest);



smalltalk.addClass('TextViewTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
'_testDisplaysText',
smalltalk.method({
selector: 'testDisplaysText',
fn: function (){
var self=this;
var text=nil;
var view=nil;
text="1 Pound of Bacon";
view=smalltalk.send((smalltalk.TextView || TextView), "_on_", [text]);
smalltalk.send(view, "_render", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "__eq", [text])]);
return self;}
}),
smalltalk.TextViewTest);



smalltalk.addClass('IngredientViewTest', smalltalk.GroceryTest, [], 'GroceryTest');


smalltalk.addClass('IngredientsViewTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
'_testDisplaysText',
smalltalk.method({
selector: 'testDisplaysText',
fn: function (){
var self=this;
var ingredients=nil;
var view=nil;
ingredients=smalltalk.send((smalltalk.Array || Array), "_with_with_with_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"]), smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", [unescape("1/2%20Head%20of%20Lettuce")]), smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Tomato"])]);
view=smalltalk.send((smalltalk.IngredientsView || IngredientsView), "_on_", [ingredients]);
smalltalk.send(view, "_render", []);
smalltalk.send(ingredients, "_do_", [(function(anIngredient){return smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "_includesSubString_", [smalltalk.send(anIngredient, "_name", [])])]);})]);
return self;}
}),
smalltalk.IngredientsViewTest);



smalltalk.addClass('GroceryTestObjects', smalltalk.Object, ['bltIngredients'], 'GroceryTest');
smalltalk.addMethod(
'_bltIngredients',
smalltalk.method({
selector: 'bltIngredients',
fn: function (){
var self=this;
return (($receiver = self['@bltIngredients']) == nil || $receiver == undefined) ? (function(){return self['@bltIngredients']="";})() : $receiver;
return self;}
}),
smalltalk.GroceryTestObjects);



