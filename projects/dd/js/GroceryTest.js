smalltalk.addPackage('GroceryTest', []);
smalltalk.addClass('GroceryTest', smalltalk.TestCase, ['testObjects'], 'GroceryTest');
smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
category: 'not yet classified',
fn: function () {
var self=this;
self['@testObjects']=smalltalk.send((smalltalk.GroceryTestObjects || GroceryTestObjects), "_new", []);
return self;},
args: [],
source: unescape('setUp%0A%0A%09testObjects%20%3A%3D%20GroceryTestObjects%20new.'),
messageSends: ["new"],
referencedClasses: ["GroceryTestObjects"]
}),
smalltalk.GroceryTest);



smalltalk.addClass('RecipeTest', smalltalk.GroceryTest, [], 'GroceryTest');
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



smalltalk.addClass('IngredientTest', smalltalk.GroceryTest, [], 'GroceryTest');
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

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
category: 'not yet classified',
fn: function () {
var self=this;
var a=nil;
var b=nil;
a=smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"]);
b=smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"]);
smalltalk.send(self, "_assert_", [smalltalk.send(a, "__eq", [b])]);
return self;},
args: [],
source: unescape('testEquality%0A%7C%20a%20b%20%7C%0A%0A%09a%20%3A%3D%20Ingredient%20named%3A%20%271%20Pound%20of%20Bacon%27.%0A%09b%20%3A%3D%20Ingredient%20named%3A%20%271%20Pound%20of%20Bacon%27.%0A%09self%20assert%3A%20a%20%3D%20b.'),
messageSends: ["named:", "assert:", unescape("%3D")],
referencedClasses: ["Ingredient"]
}),
smalltalk.IngredientTest);



smalltalk.addClass('RecipeViewTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
unescape('_testDisplaysName'),
smalltalk.method({
selector: unescape('testDisplaysName'),
category: 'not yet classified',
fn: function () {
var self=this;
var recipe=nil;
var view=nil;
recipe=smalltalk.send(self['@testObjects'], "_blts", []);
view=smalltalk.send(smalltalk.send((smalltalk.RecipeView || RecipeView), "_on_", [recipe]), "_render", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "_includesSubString_", [smalltalk.send(recipe, "_name", [])])]);
return self;},
args: [],
source: unescape('testDisplaysName%0A%7C%20recipe%20view%20%7C%0A%0A%09recipe%20%3A%3D%20testObjects%20blts.%0A%09view%20%3A%3D%20%28%20RecipeView%20on%3A%20recipe%20%29%20render.%0A%09self%20assert%3A%20%28%20view%20el%20text%20includesSubString%3A%20recipe%20name%20%29.'),
messageSends: ["blts", "render", "on:", "assert:", "includesSubString:", "text", "el", "name"],
referencedClasses: ["RecipeView"]
}),
smalltalk.RecipeViewTest);

smalltalk.addMethod(
unescape('_testDisplaysIngredients'),
smalltalk.method({
selector: unescape('testDisplaysIngredients'),
category: 'not yet classified',
fn: function () {
var self=this;
var recipe=nil;
var view=nil;
recipe=smalltalk.send(self['@testObjects'], "_blts", []);
view=smalltalk.send(smalltalk.send((smalltalk.RecipeView || RecipeView), "_on_", [recipe]), "_render", []);
smalltalk.send(smalltalk.send(recipe, "_ingredients", []), "_do_", [(function(anIngredient){return smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "_includesSubString_", [smalltalk.send(anIngredient, "_name", [])])]);})]);
return self;},
args: [],
source: unescape('testDisplaysIngredients%0A%7C%20recipe%20view%20%7C%0A%0A%09recipe%20%3A%3D%20testObjects%20blts.%0A%09view%20%3A%3D%20%28%20RecipeView%20on%3A%20recipe%20%29%20render.%0A%09recipe%20ingredients%20do%3A%20%5B%20%3AanIngredient%20%7C%20%0A%09%09self%20assert%3A%20%28%20view%20el%20text%20includesSubString%3A%20anIngredient%20name%20%29%20%5D.'),
messageSends: ["blts", "render", "on:", "do:", "ingredients", "assert:", "includesSubString:", "text", "el", "name"],
referencedClasses: ["RecipeView"]
}),
smalltalk.RecipeViewTest);

smalltalk.addMethod(
unescape('_testDisplaysAddIngredient'),
smalltalk.method({
selector: unescape('testDisplaysAddIngredient'),
category: 'not yet classified',
fn: function () {
var self=this;
var recipe=nil;
var view=nil;
recipe=smalltalk.send(self['@testObjects'], "_blts", []);
view=smalltalk.send(smalltalk.send((smalltalk.RecipeView || RecipeView), "_on_", [recipe]), "_render", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "_includesSubString_", ["Add Ingredient"])]);
return self;},
args: [],
source: unescape('testDisplaysAddIngredient%0A%7C%20recipe%20view%20%7C%0A%0A%09recipe%20%3A%3D%20testObjects%20blts.%0A%09view%20%3A%3D%20%28%20RecipeView%20on%3A%20recipe%20%29%20render.%0A%09self%20assert%3A%20%28%20view%20el%20text%20includesSubString%3A%20%27Add%20Ingredient%27%20%29.'),
messageSends: ["blts", "render", "on:", "assert:", "includesSubString:", "text", "el"],
referencedClasses: ["RecipeView"]
}),
smalltalk.RecipeViewTest);



smalltalk.addClass('TextViewTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
unescape('_testDisplaysText'),
smalltalk.method({
selector: unescape('testDisplaysText'),
category: 'not yet classified',
fn: function () {
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



smalltalk.addClass('IngredientViewTest', smalltalk.GroceryTest, [], 'GroceryTest');


smalltalk.addClass('IngredientsViewTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
unescape('_testDisplaysText'),
smalltalk.method({
selector: unescape('testDisplaysText'),
category: 'not yet classified',
fn: function () {
var self=this;
var ingredients=nil;
var view=nil;
ingredients=smalltalk.send(self['@testObjects'], "_bltIngredients", []);
view=smalltalk.send(smalltalk.send((smalltalk.IngredientsView || IngredientsView), "_on_", [ingredients]), "_render", []);
smalltalk.send(ingredients, "_do_", [(function(anIngredient){return smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send(view, "_el", []), "_text", []), "_includesSubString_", [smalltalk.send(anIngredient, "_name", [])])]);})]);
return self;},
args: [],
source: unescape('testDisplaysText%0A%7C%20ingredients%20view%20%7C%0A%0A%09ingredients%20%3A%3D%20testObjects%20bltIngredients.%0A%09view%20%3A%3D%20%28%20IngredientsView%20on%3A%20ingredients%20%29%20render.%0A%09ingredients%20do%3A%20%5B%20%3AanIngredient%20%7C%0A%20%20%20%20%20%20%20%20%09self%20assert%3A%20%28%20view%20el%20text%20includesSubString%3A%20anIngredient%20name%20%29%5D.'),
messageSends: ["bltIngredients", "render", "on:", "do:", "assert:", "includesSubString:", "text", "el", "name"],
referencedClasses: ["IngredientsView"]
}),
smalltalk.IngredientsViewTest);



smalltalk.addClass('GroceryTestObjects', smalltalk.Object, ['bltIngredients', 'blts'], 'GroceryTest');
smalltalk.addMethod(
unescape('_bltIngredients'),
smalltalk.method({
selector: unescape('bltIngredients'),
category: 'not yet classified',
fn: function () {
var self=this;
return (($receiver = self['@bltIngredients']) == nil || $receiver == undefined) ? (function(){return self['@bltIngredients']=smalltalk.send((smalltalk.Array || Array), "_with_with_with_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"]), smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", [unescape("1/2%20Head%20of%20Lettuce")]), smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Tomato"])]);})() : $receiver;
return self;},
args: [],
source: unescape('bltIngredients%0A%0A%09%5E%20bltIngredients%20ifNil%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20%09bltIngredients%20%3A%3D%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09Array%20%0A%09%09%09%09with%3A%20%28%20Ingredient%20named%3A%20%271%20Pound%20of%20Bacon%27%20%29%0A%09%09%09%09with%3A%20%28%20Ingredient%20named%3A%20%271/2%20Head%20of%20Lettuce%27%20%29%0A%09%09%09%09with%3A%20%28%20Ingredient%20named%3A%20%271%20Tomato%27%20%29%5D'),
messageSends: ["ifNil:", "with:with:with:", "named:"],
referencedClasses: ["Array", "Ingredient"]
}),
smalltalk.GroceryTestObjects);

smalltalk.addMethod(
unescape('_blts'),
smalltalk.method({
selector: unescape('blts'),
category: 'not yet classified',
fn: function () {
var self=this;
return (($receiver = self['@blts']) == nil || $receiver == undefined) ? (function(){return self['@blts']=smalltalk.send((smalltalk.Recipe || Recipe), "_named_ingredients_", ["BLTs", smalltalk.send(self, "_bltIngredients", [])]);})() : $receiver;
return self;},
args: [],
source: unescape('blts%0A%0A%09%5E%20blts%20ifNil%3A%20%5B%20blts%20%3A%3D%20Recipe%20named%3A%20%27BLTs%27%20ingredients%3A%20self%20bltIngredients%20%5D'),
messageSends: ["ifNil:", "named:ingredients:", "bltIngredients"],
referencedClasses: ["Recipe"]
}),
smalltalk.GroceryTestObjects);



smalltalk.addClass('IngredientFormTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
unescape('_testAddsIngredient'),
smalltalk.method({
selector: unescape('testAddsIngredient'),
category: 'not yet classified',
fn: function () {
var self=this;
var recipe=nil;
var ingredientForm=nil;
recipe=smalltalk.send(self['@testObjects'], "_blts", []);
ingredientForm=smalltalk.send((smalltalk.IngredientForm || IngredientForm), "_onClick_", [(function(anIngredient){return smalltalk.send(recipe, "_add_", [anIngredient]);})]);
smalltalk.send(ingredientForm, "_render", []);
smalltalk.send(ingredientForm, "_val_", ["Mayonnaise"]);
smalltalk.send(ingredientForm, "_click", []);
smalltalk.send(self, "_assert_", [smalltalk.send(recipe, "_includes_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["Mayonnaise"])])]);
return self;},
args: [],
source: unescape('testAddsIngredient%0A%7C%20recipe%20ingredientForm%20%7C%0A%0A%09recipe%20%3A%3D%20testObjects%20blts.%0A%09ingredientForm%20%3A%3D%20IngredientForm%20onClick%3A%20%5B%20%3AanIngredient%20%7C%20recipe%20add%3A%20anIngredient%20%5D.%0A%0A%09ingredientForm%20render.%0A%09ingredientForm%20val%3A%20%27Mayonnaise%27.%0A%09ingredientForm%20click.%0A%0A%09self%20assert%3A%20%28%20recipe%20includes%3A%20%28%20Ingredient%20named%3A%20%27Mayonnaise%27%20%29%29.'),
messageSends: ["blts", "onClick:", "add:", "render", "val:", "click", "assert:", "includes:", "named:"],
referencedClasses: ["IngredientForm", "Ingredient"]
}),
smalltalk.IngredientFormTest);



smalltalk.addClass('RecipeWidgetTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
unescape('_testAddIngredient'),
smalltalk.method({
selector: unescape('testAddIngredient'),
category: 'not yet classified',
fn: function () {
var self=this;
var recipeWidget=nil;
recipeWidget=smalltalk.send((smalltalk.RecipeWidget || RecipeWidget), "_on_", [smalltalk.send(self['@testObjects'], "_blts", [])]);
smalltalk.send(recipeWidget, "_render", []);
smalltalk.send(recipeWidget, "_val_", ["Mayonnaise"]);
smalltalk.send(recipeWidget, "_click", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(recipeWidget, "_text", []), "_includesSubString_", ["Mayonnaise"])]);
return self;},
args: [],
source: unescape('testAddIngredient%0A%7C%20recipeWidget%20%7C%0A%0A%09recipeWidget%20%3A%3D%20RecipeWidget%20on%3A%20testObjects%20blts.%0A%09recipeWidget%20render.%0A%09recipeWidget%20val%3A%20%27Mayonnaise%27.%0A%09recipeWidget%20click.%0A%09self%20assert%3A%20%28%20recipeWidget%20text%20includesSubString%3A%20%27Mayonnaise%27%20%29.'),
messageSends: ["on:", "blts", "render", "val:", "click", "assert:", "includesSubString:", "text"],
referencedClasses: ["RecipeWidget"]
}),
smalltalk.RecipeWidgetTest);



smalltalk.addClass('IngredientsWidgetTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
unescape('_testAddIngredient'),
smalltalk.method({
selector: unescape('testAddIngredient'),
category: 'not yet classified',
fn: function () {
var self=this;
var widget=nil;
widget=smalltalk.send((smalltalk.IngredientsWidget || IngredientsWidget), "_on_onClick_", [smalltalk.send(self['@testObjects'], "_bltIngredients", []), (function(){return nil;})]);
smalltalk.send(widget, "_render", []);
smalltalk.send(widget, "_val_", ["Mayonnaise"]);
smalltalk.send(widget, "_click", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(widget, "_text", []), "_includesSubString_", ["Mayonnaise"])]);
return self;},
args: [],
source: unescape('testAddIngredient%0A%7C%20widget%20%7C%0A%0A%09widget%20%3A%3D%20IngredientsWidget%20on%3A%20testObjects%20bltIngredients%20onClick%3A%20%5B%5D.%0A%09widget%20render.%0A%09widget%20val%3A%20%27Mayonnaise%27.%0A%09widget%20click.%0A%09self%20assert%3A%20%28%20widget%20text%20includesSubString%3A%20%27Mayonnaise%27%20%29.'),
messageSends: ["on:onClick:", "bltIngredients", "render", "val:", "click", "assert:", "includesSubString:", "text"],
referencedClasses: ["IngredientsWidget"]
}),
smalltalk.IngredientsWidgetTest);



smalltalk.addClass('CouchDBTest', smalltalk.GroceryTest, [], 'GroceryTest');
smalltalk.addMethod(
unescape('_testFetch'),
smalltalk.method({
selector: unescape('testFetch'),
category: 'not yet classified',
fn: function () {
var self=this;
var library=nil;
library=smalltalk.send((smalltalk.CouchDB || CouchDB), "_on_at_", [smalltalk.send((smalltalk.Array || Array), "_new", []), unescape("http%3A//127.0.0.1%3A5984/recipes/_all_docs")]);
smalltalk.send(self, "_assert_", [smalltalk.send(library, "_isEmpty", [])]);
smalltalk.send(library, "_fetch", []);
smalltalk.send(self, "_assert_", [smalltalk.send(library, "_notEmpty", [])]);
return self;},
args: [],
source: unescape('testFetch%0A%7C%20library%20%7C%0A%09%0A%09library%20%3A%3D%20CouchDB%20%0A%09%09%09on%3A%20Array%20new%0A%09%09%09at%3A%20%27http%3A//127.0.0.1%3A5984/recipes/_all_docs%27.%0A%09self%20assert%3A%20library%20isEmpty.%20%0A%09library%20fetch.%0A%09self%20assert%3A%20library%20notEmpty.%20%0A%09'),
messageSends: ["on:at:", "new", "assert:", "isEmpty", "fetch", "notEmpty"],
referencedClasses: ["CouchDB", "Array"]
}),
smalltalk.CouchDBTest);



