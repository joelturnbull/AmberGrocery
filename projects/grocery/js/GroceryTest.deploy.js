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

smalltalk.addMethod(
'_testEquality',
smalltalk.method({
selector: 'testEquality',
fn: function (){
var self=this;
var a=nil;
var b=nil;
a=smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"]);
b=smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"]);
smalltalk.send(self, "_assert_", [smalltalk.send(a, "__eq", [b])]);
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
recipe=smalltalk.send(self['@testObjects'], "_blts", []);
view=smalltalk.send(smalltalk.send((smalltalk.RecipeView || RecipeView), "_on_", [recipe]), "_render", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "_includesSubString_", [smalltalk.send(recipe, "_name", [])])]);
return self;}
}),
smalltalk.RecipeViewTest);

smalltalk.addMethod(
'_testDisplaysIngredients',
smalltalk.method({
selector: 'testDisplaysIngredients',
fn: function (){
var self=this;
var recipe=nil;
var view=nil;
recipe=smalltalk.send(self['@testObjects'], "_blts", []);
view=smalltalk.send(smalltalk.send((smalltalk.RecipeView || RecipeView), "_on_", [recipe]), "_render", []);
smalltalk.send(smalltalk.send(recipe, "_ingredients", []), "_do_", [(function(anIngredient){return smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "_includesSubString_", [smalltalk.send(anIngredient, "_name", [])])]);})]);
return self;}
}),
smalltalk.RecipeViewTest);

smalltalk.addMethod(
'_testDisplaysAddIngredient',
smalltalk.method({
selector: 'testDisplaysAddIngredient',
fn: function (){
var self=this;
var recipe=nil;
var view=nil;
recipe=smalltalk.send(self['@testObjects'], "_blts", []);
view=smalltalk.send(smalltalk.send((smalltalk.RecipeView || RecipeView), "_on_", [recipe]), "_render", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "_includesSubString_", ["Add Ingredient"])]);
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
ingredients=smalltalk.send(self['@testObjects'], "_bltIngredients", []);
view=smalltalk.send(smalltalk.send((smalltalk.IngredientsView || IngredientsView), "_on_", [ingredients]), "_render", []);
smalltalk.send(ingredients, "_do_", [(function(anIngredient){return smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "_includesSubString_", [smalltalk.send(anIngredient, "_name", [])])]);})]);
return self;}
}),
smalltalk.IngredientsViewTest);



smalltalk.addClass('GroceryTestObjects', smalltalk.Object, ['bltIngredients', 'blts'], 'GroceryTest');
smalltalk.addMethod(
'_bltIngredients',
smalltalk.method({
selector: 'bltIngredients',
fn: function (){
var self=this;
return (($receiver = self['@bltIngredients']) == nil || $receiver == undefined) ? (function(){return self['@bltIngredients']=smalltalk.send((smalltalk.Array || Array), "_with_with_with_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"]), smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", [unescape("1/2%20Head%20of%20Lettuce")]), smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Tomato"])]);})() : $receiver;
return self;}
}),
smalltalk.GroceryTestObjects);

smalltalk.addMethod(
'_blts',
smalltalk.method({
selector: 'blts',
fn: function (){
var self=this;
return (($receiver = self['@blts']) == nil || $receiver == undefined) ? (function(){return self['@blts']=smalltalk.send((smalltalk.Recipe || Recipe), "_named_ingredients_", ["BLTs", smalltalk.send(self, "_bltIngredients", [])]);})() : $receiver;
return self;}
}),
smalltalk.GroceryTestObjects);



smalltalk.addClass('IngredientFormTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
'_testAddsIngredient',
smalltalk.method({
selector: 'testAddsIngredient',
fn: function (){
var self=this;
var recipe=nil;
var ingredientForm=nil;
recipe=smalltalk.send(self['@testObjects'], "_blts", []);
ingredientForm=smalltalk.send((smalltalk.IngredientForm || IngredientForm), "_onClick_", [(function(anIngredient){return smalltalk.send(recipe, "_add_", [anIngredient]);})]);
smalltalk.send(ingredientForm, "_render", []);
smalltalk.send(ingredientForm, "_val_", ["Mayonnaise"]);
smalltalk.send(ingredientForm, "_click", []);
smalltalk.send(self, "_assert_", [smalltalk.send(recipe, "_includes_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["Mayonnaise"])])]);
return self;}
}),
smalltalk.IngredientFormTest);



smalltalk.addClass('RecipeWidgetTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
'_testAddIngredient',
smalltalk.method({
selector: 'testAddIngredient',
fn: function (){
var self=this;
var recipeWidget=nil;
recipeWidget=smalltalk.send((smalltalk.RecipeWidget || RecipeWidget), "_on_", [smalltalk.send(self['@testObjects'], "_blts", [])]);
smalltalk.send(recipeWidget, "_render", []);
smalltalk.send(recipeWidget, "_val_", ["Mayonnaise"]);
smalltalk.send(recipeWidget, "_click", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(recipeWidget, "_text", []), "_includesSubString_", ["Mayonnaise"])]);
return self;}
}),
smalltalk.RecipeWidgetTest);



smalltalk.addClass('IngredientsWidgetTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
'_testAddIngredient',
smalltalk.method({
selector: 'testAddIngredient',
fn: function (){
var self=this;
var widget=nil;
widget=smalltalk.send((smalltalk.IngredientsWidget || IngredientsWidget), "_on_onClick_", [smalltalk.send(self['@testObjects'], "_bltIngredients", []), (function(){return nil;})]);
smalltalk.send(widget, "_render", []);
smalltalk.send(widget, "_val_", ["Mayonnaise"]);
smalltalk.send(widget, "_click", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(widget, "_text", []), "_includesSubString_", ["Mayonnaise"])]);
return self;}
}),
smalltalk.IngredientsWidgetTest);



