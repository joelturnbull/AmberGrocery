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
unescape('_initializeNamed_'),
smalltalk.method({
selector: unescape('initializeNamed%3A'),
category: 'not yet classified',
fn: function (aName) {
var self=this;
self['@name']=aName;
self['@ingredients']=smalltalk.send((smalltalk.Array || Array), "_new", []);
return self;},
args: ["aName"],
source: unescape('initializeNamed%3A%20aName%0A%0A%09name%20%3A%3D%20aName.%0A%09ingredients%20%3A%3D%20Array%20new.'),
messageSends: ["new"],
referencedClasses: ["Array"]
}),
smalltalk.Recipe);

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
smalltalk.Recipe.klass);


smalltalk.addClass('RecipeView', smalltalk.Widget, ['recipe'], 'GroceryApp');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function () {
var self=this;
self['@recipe']=smalltalk.send((smalltalk.Recipe || Recipe), "_named_", ["BLTs"]);
smalltalk.send(self['@recipe'], "_add_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", ["1 Pound of Bacon"])]);
smalltalk.send(self['@recipe'], "_add_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", [unescape("1/2%20Head%20of%20Lettuce")])]);
return self;},
args: [],
source: unescape('initialize%0A%0A%09recipe%20%3A%3D%20Recipe%20named%3A%20%27BLTs%27.%0A%09recipe%20add%3A%20%28%20Ingredient%20named%3A%20%271%20Pound%20of%20Bacon%27%20%29.%0A%09recipe%20add%3A%20%28%20Ingredient%20named%3A%20%271/2%20Head%20of%20Lettuce%27%20%29.'),
messageSends: ["named:", "add:"],
referencedClasses: ["Recipe", "Ingredient"]
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send(smalltalk.send(self, "_recipe", []), "_name", [])]);
smalltalk.send(smalltalk.send(self['@recipe'], "_ingredients", []), "_do_", [(function(anIngredient){return smalltalk.send(smalltalk.send((smalltalk.IngredientView || IngredientView), "_on_", [anIngredient]), "_renderOn_", [html]);})]);
smalltalk.send(self, "_renderIngredientInputOn_", [html]);
smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return smalltalk.send(self, "_renderSaveButtonOn_", [html]);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%20with%3A%20self%20recipe%20name.%0A%09recipe%20ingredients%20do%3A%20%5B%20%3AanIngredient%20%7C%0A%20%20%09%09%28%20IngredientView%20on%3A%20anIngredient%20%29%20renderOn%3A%20html%20%5D.%0A%09self%20renderIngredientInputOn%3A%20html.%0A%09html%20div%20with%3A%20%5B%20self%20renderSaveButtonOn%3A%20html%20%5D.'),
messageSends: ["with:", "div", "name", "recipe", "do:", "ingredients", "renderOn:", "on:", "renderIngredientInputOn:", "renderSaveButtonOn:"],
referencedClasses: ["IngredientView"]
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_recipe'),
smalltalk.method({
selector: unescape('recipe'),
category: 'not yet classified',
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
category: 'not yet classified',
fn: function (html) {
var self=this;
var input=nil;
var button=nil;
input=smalltalk.send(smalltalk.send(html, "_input", []), "_id_", ["ingredientInput"]);
button=(function($rec){smalltalk.send($rec, "_id_", ["addIngredient"]);return smalltalk.send($rec, "_with_", ["Add Ingredient"]);})(smalltalk.send(html, "_button", []));
smalltalk.send(self, "_addToRecipeValueOf_onClickOf_", [input, button]);
return self;},
args: ["html"],
source: unescape('renderIngredientInputOn%3A%20html%0A%7C%20input%20button%20%7C%0A%0A%09input%20%3A%3D%20html%20input%0A%09%09id%3A%20%27ingredientInput%27.%0A%20%20%20%20%20%20%20%20button%20%3A%3D%20html%20button%20%0A%20%20%20%20%20%20%20%20%09id%3A%20%27addIngredient%27%3B%0A%09%09with%3A%20%27Add%20Ingredient%27.%0A%0A%09self%20addToRecipeValueOf%3A%20input%20onClickOf%3A%20button.'),
messageSends: ["id:", "input", "with:", "button", "addToRecipeValueOf:onClickOf:"],
referencedClasses: []
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
category: 'not yet classified',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self, "_selector", []), "_html_", [""]);
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send(self, "_selector", [])]);
return self;},
args: [],
source: unescape('refresh%0A%0A%09self%20selector%20html%3A%20%27%27.%20%0A%09self%20appendToJQuery%3A%20self%20selector.'),
messageSends: ["html:", "selector", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.send(unescape("%23recipe"), "_asJQuery", []);
return self;},
args: [],
source: unescape('selector%0A%0A%09%5E%20%27%23recipe%27%20asJQuery'),
messageSends: ["asJQuery"],
referencedClasses: []
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_addToRecipeValueOf_onClickOf_'),
smalltalk.method({
selector: unescape('addToRecipeValueOf%3AonClickOf%3A'),
category: 'not yet classified',
fn: function (input, button) {
var self=this;
smalltalk.send(smalltalk.send(button, "_asJQuery", []), "_click_", [(function(){smalltalk.send(smalltalk.send(self, "_recipe", []), "_add_", [smalltalk.send((smalltalk.Ingredient || Ingredient), "_named_", [smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_val", [])])]);return smalltalk.send(self, "_refresh", []);})]);
return self;},
args: ["input", "button"],
source: unescape('addToRecipeValueOf%3A%20input%20onClickOf%3A%20button%0A%0A%09button%20asJQuery%20click%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20%09self%20recipe%20add%3A%20%28%20Ingredient%20named%3A%20input%20asJQuery%20val%20%29.%20%0A%20%20%20%20%20%20%20%20%20%20%09self%20refresh%20%0A%20%20%20%20%20%20%20%20%5D'),
messageSends: ["click:", "asJQuery", "add:", "recipe", "named:", "val", "refresh"],
referencedClasses: ["Ingredient"]
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_renderSaveButtonOn_'),
smalltalk.method({
selector: unescape('renderSaveButtonOn%3A'),
category: 'not yet classified',
fn: function (html) {
var self=this;
var button=nil;
button=(function($rec){smalltalk.send($rec, "_id_", ["saveRecipe"]);return smalltalk.send($rec, "_with_", ["Save"]);})(smalltalk.send(html, "_button", []));
smalltalk.send(self, "_saveRecipeOnClickOf_", [button]);
return self;},
args: ["html"],
source: unescape('renderSaveButtonOn%3A%20html%0A%7C%20button%20%7C%0A%0A%09button%20%3A%3D%20html%20button%0A%09%09id%3A%20%27saveRecipe%27%3B%0A%09%09with%3A%20%27Save%27.%0A%09%0A%09self%20saveRecipeOnClickOf%3A%20button.'),
messageSends: ["id:", "with:", "button", "saveRecipeOnClickOf:"],
referencedClasses: []
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_saveRecipeOnClickOf_'),
smalltalk.method({
selector: unescape('saveRecipeOnClickOf%3A'),
category: 'not yet classified',
fn: function (button) {
var self=this;
smalltalk.send(smalltalk.send(button, "_asJQuery", []), "_click_", [(function(){return smalltalk.send(self, "_persistRecipe", []);})]);
return self;},
args: ["button"],
source: unescape('saveRecipeOnClickOf%3A%20button%0A%0A%09button%20asJQuery%20click%3A%20%5B%20self%20persistRecipe%20%5D.'),
messageSends: ["click:", "asJQuery", "persistRecipe"],
referencedClasses: []
}),
smalltalk.RecipeView);

smalltalk.addMethod(
unescape('_persistRecipe'),
smalltalk.method({
selector: unescape('persistRecipe'),
category: 'not yet classified',
fn: function () {
var self=this;
var result=nil;
var data=nil;
data=unescape("%7B%20%22name%22%3A%20%22Tacos%22%2C%20%22ingredients%22%3A%20%5B%5D%20%7D");
result=smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [unescape("http%3A//localhost/couchdb/recipes/"), smalltalk.Dictionary._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("contentType", "__minus_gt", [unescape("application/json")]),smalltalk.send("data", "__minus_gt", [unescape("%7B%22name%22%3A%22BLTxs%22%7D")])])]);
return self;},
args: [],
source: unescape('persistRecipe%0A%7C%20result%20data%20%7C%0A%0Adata%20%3A%3D%20%27%7B%20%22name%22%3A%20%22Tacos%22%2C%20%22ingredients%22%3A%20%5B%5D%20%7D%27.%0Aresult%20%3A%3D%20jQuery%0A%20%20%20%20%20%20ajax%3A%20%27http%3A//localhost/couchdb/recipes/%27%0A%20%20%20%20%20%20options%3A%20%23%7B%0A%09%09%09%09%27type%27%20-%3E%20%27POST%27.%0A%09%09%09%09%27contentType%27%20-%3E%20%27application/json%27.%0A%09%09%09%09%27data%27%20-%3E%20%27%7B%22name%22%3A%22BLTxs%22%7D%27%0A%09%7D.'),
messageSends: ["ajax:options:", unescape("-%3E")],
referencedClasses: []
}),
smalltalk.RecipeView);



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


