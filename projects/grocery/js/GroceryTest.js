smalltalk.addPackage('GroceryTest', []);
smalltalk.addClass('RecipeTest', smalltalk.TestCase, [], 'GroceryTest');
smalltalk.addMethod(
unescape('_testRecipeAddIngredient'),
smalltalk.method({
selector: unescape('testRecipeAddIngredient'),
category: 'not yet classified',
fn: function (){
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

smalltalk.addMethod(
unescape('_testRecipeIsNamed'),
smalltalk.method({
selector: unescape('testRecipeIsNamed'),
category: 'not yet classified',
fn: function (){
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



smalltalk.addClass('IngredientTest', smalltalk.TestCase, [], 'GroceryTest');
smalltalk.addMethod(
unescape('_testIngredient'),
smalltalk.method({
selector: unescape('testIngredient'),
category: 'not yet classified',
fn: function (){
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



smalltalk.addClass('RecipeViewTest', smalltalk.TestCase, [], 'GroceryTest');
smalltalk.addMethod(
unescape('_testDisplaysName'),
smalltalk.method({
selector: unescape('testDisplaysName'),
category: 'not yet classified',
fn: function (){
var self=this;
var recipe=nil;
var view=nil;
recipe=smalltalk.send((smalltalk.Recipe || Recipe), "_named_", ["Tacos"]);
view=smalltalk.send((smalltalk.RecipeView || RecipeView), "_on_", [recipe]);
smalltalk.send(view, "_render", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "__eq", [smalltalk.send(recipe, "_name", [])])]);
return self;},
args: [],
source: unescape('testDisplaysName%0A%7C%20recipe%20view%20%7C%0A%0A%09recipe%20%3A%3D%20Recipe%20named%3A%20%27Tacos%27.%0A%09view%20%3A%3D%20RecipeView%20on%3A%20recipe.%0A%0A%09view%20render.%0A%09self%20assert%3A%20%28%20view%20el%20text%20%3D%20recipe%20name%20%29.'),
messageSends: ["named:", "on:", "render", "assert:", unescape("%3D"), "text", "el", "name"],
referencedClasses: ["Recipe", "RecipeView"]
}),
smalltalk.RecipeViewTest);



smalltalk.addClass('TextViewTest', smalltalk.TestCase, [], 'GroceryTest');
smalltalk.addMethod(
unescape('_testDisplaysText'),
smalltalk.method({
selector: unescape('testDisplaysText'),
category: 'not yet classified',
fn: function (){
var self=this;
var text=nil;
var view=nil;
text="1 Pound of Bacon";
view=smalltalk.send((smalltalk.TextView || TextView), "_on_", [text]);
smalltalk.send(view, "_render", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "__eq", [text])]);
return self;},
args: [],
source: unescape('testDisplaysText%0A%7C%20text%20view%20%7C%0A%0A%09text%20%3A%3D%20%271%20Pound%20of%20Bacon%27.%0A%09view%20%3A%3D%20TextView%20on%3A%20text.%0A%09view%20render.%0A%09self%20assert%3A%20%28%20view%20el%20text%20%3D%20text%20%29.'),
messageSends: ["on:", "render", "assert:", unescape("%3D"), "text", "el"],
referencedClasses: ["TextView"]
}),
smalltalk.TextViewTest);



smalltalk.addClass('IngredientViewTest', smalltalk.TestCase, [], 'GroceryTest');


smalltalk.addClass('IngredientsViewTest', smalltalk.TestCase, [], 'GroceryTest');
smalltalk.addMethod(
unescape('_testDisplaysText'),
smalltalk.method({
selector: unescape('testDisplaysText'),
category: 'not yet classified',
fn: function (){
var self=this;
var ingredients=nil;
var view=nil;
ingredients=smalltalk.send((smalltalk.Array || Array), "_with_with_with_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"]), smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", [unescape("1/2%20Head%20of%20Lettuce")]), smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Tomato"])]);
view=smalltalk.send((smalltalk.IngredientsView || IngredientsView), "_on_", [ingredients]);
smalltalk.send(view, "_render", []);
smalltalk.send(ingredients, "_do_", [(function(anIngredient){return smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "_includesSubString_", [smalltalk.send(anIngredient, "_name", [])])]);})]);
return self;},
args: [],
source: unescape('testDisplaysText%0A%7C%20ingredients%20view%20%7C%0A%0A%09ingredients%20%3A%3D%20%0A%09%09Array%20%0A%09%09%09with%3A%20%28%20Ingredient%20named%3A%20%271%20Pound%20of%20Bacon%27%20%29%0A%09%09%09with%3A%20%28%20Ingredient%20named%3A%20%271/2%20Head%20of%20Lettuce%27%20%29%0A%09%09%09with%3A%20%28%20Ingredient%20named%3A%20%271%20Tomato%27%20%29.%0A%09view%20%3A%3D%20IngredientsView%20on%3A%20ingredients.%0A%09view%20render.%0A%09ingredients%20do%3A%20%5B%20%3AanIngredient%20%7C%0A%20%20%20%20%20%20%20%20%09self%20assert%3A%20%28%20view%20el%20text%20includesSubString%3A%20anIngredient%20name%20%29%5D.'),
messageSends: ["with:with:with:", "named:", "on:", "render", "do:", "assert:", "includesSubString:", "text", "el", "name"],
referencedClasses: ["Array", "Ingredient", "IngredientsView"]
}),
smalltalk.IngredientsViewTest);



