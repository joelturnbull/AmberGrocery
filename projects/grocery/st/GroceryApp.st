Smalltalk current createPackage: 'GroceryApp' properties: #{'methods'->[object Object]. 'inheritedMethods'->[object Object]. 'klass'->Array. '_size'->a BlockClosure. '_at_put_'->a BlockClosure}!
TestCase subclass: #RecipeTest
	instanceVariableNames: ''
	category: 'GroceryApp'!

!RecipeTest methodsFor: 'not yet classified'!

testRecipeIsNamed
| recipe |
	
	recipe := Recipe named: 'BLTs'.
	self assert: recipe name = 'BLTs'.
!

testRecipeAddIngredient
| recipe ingredient |
	
	recipe := Recipe named: 'BLTs'.
        ingredient := Ingredient named: '1 Pound of Bacon'.
        recipe add: ingredient.
	self assert: ( recipe includes: ingredient )
! !

Object subclass: #Recipe
	instanceVariableNames: 'name ingredients'
	category: 'GroceryApp'!

!Recipe methodsFor: 'not yet classified'!

name

	^  name
!

add: anIngredient

	ingredients add: anIngredient
!

includes: anIngredient

	^ ingredients includes: anIngredient
!

ingredients

	^ ingredients copy
!

initializeNamed: aName ingredients: anArray

	name := aName.
	ingredients := anArray.
! !

!Recipe class methodsFor: 'not yet classified'!

named: aName

	^ self named: aName  ingredients: Array new
!

named: aName ingredients: anArray

	^ self new initializeNamed: aName ingredients: anArray
!

fromJSON: aJSONObject
| ingredients |

	ingredients := aJSONObject ingredients collect: [ :anIngredientJSON | Ingredient fromJSON: anIngredientJSON ].
	^ self named: aJSONObject name ingredients: ingredients.
! !

Widget subclass: #RecipeView
	instanceVariableNames: 'recipe'
	category: 'GroceryApp'!

!RecipeView methodsFor: 'accessing'!

recipe

	^ recipe
! !

!RecipeView methodsFor: 'action'!

refresh
	| selector |
	selector := '#recipe' asJQuery.
	selector empty.
	self appendToJQuery: selector.
! !

!RecipeView methodsFor: 'init'!

initializeOn: aRecipe

	recipe := aRecipe
! !

!RecipeView methodsFor: 'rendering'!

renderOn: html

	self renderNameOn: html.
	self renderIngredientsOn: html.
	self renderIngredientInputOn: html.
!

renderIngredientInputOn: html
| input button |

	input := html input.
        button := html button with: 'Add Ingredient'.
	
	button asJQuery click: [ 
          	self recipe add: ( Ingredient named: input asJQuery val ).
          	self recipe save.
          	self refresh.
        ]
!

renderNameOn: html

	html div with: self recipe name.
!

renderIngredientsOn: html

	recipe ingredients do: [ :anIngredient | ( IngredientView on: anIngredient ) renderOn: html ].
!

ingredientInputOn: html

	^ html input id: 'ingredientInput'.
!

addIngredientButtonOn: html

	^ html button with: 'Add Ingredient'.
! !

!RecipeView class methodsFor: 'not yet classified'!

on: aRecipe

	^ self new initializeOn: aRecipe
! !

TestCase subclass: #IngredientTest
	instanceVariableNames: ''
	category: 'GroceryApp'!

!IngredientTest methodsFor: 'not yet classified'!

testIngredient
| ingredient |

	ingredient := Ingredient named: '1 Pound of Bacon'.
	self assert: ingredient name = '1 Pound of Bacon'.
! !

Object subclass: #Ingredient
	instanceVariableNames: 'name'
	category: 'GroceryApp'!

!Ingredient methodsFor: 'not yet classified'!

initializeNamed: aName

	name := aName.
!

name

	^  name
! !

!Ingredient class methodsFor: 'not yet classified'!

named: aName

	^ self new initializeNamed: aName
!

fromJSON: aJSONObject

	^ self named: aJSONObject name
! !

Widget subclass: #IngredientView
	instanceVariableNames: 'ingredient'
	category: 'GroceryApp'!

!IngredientView methodsFor: 'not yet classified'!

ingredient

	^ ingredient
!

initializeOn: anIngredient

	ingredient := anIngredient
!

renderOn: html

	html div with: self ingredient name.
! !

!IngredientView class methodsFor: 'not yet classified'!

on: anIngredient

	^ self new initializeOn: anIngredient
! !

Object subclass: #CouchDoc
	instanceVariableNames: 'model revision id'
	category: 'GroceryApp'!

!CouchDoc methodsFor: 'accessing'!

revision

	^ revision
!

id

	^ id
! !

!CouchDoc methodsFor: 'action'!

save

	jQuery 
	  ajax: 'http://localhost/couchdb/recipes/', self id
	  options: #{
				'type' -> 'PUT'.
				'contentType' -> 'application/json'.
				'data' -> self asJSON.
				'success' -> [ :rslt | self update ]
	 	        }.
!

update

	jQuery 
	  ajax: 'http://localhost/couchdb/recipes/', self id
	  options: #{
				'type' -> 'GET'.
				'dataType' -> 'jsonp'.
				'success' -> [ :jsonp | self updateFromJSON: jsonp ].
				'error' -> [window alert: 'error']
			}.
!

updateFromJSON: aJSONObject
	
	id := ( aJSONObject at: '_id' ).
	revision := ( aJSONObject at: '_rev' ).
! !

!CouchDoc methodsFor: 'init'!

intitializeOn: aModel id: anId revision: aRevision

	model := aModel.
	id := anId.
        revision := aRevision.
! !

!CouchDoc methodsFor: 'object'!

doesNotUnderstand: aMessage

	^ model 
		perform: aMessage selector
		withArguments: aMessage arguments
!

asJSONObject

	^ model asJSONObject basicAt: '_rev' put: revision; yourself.
! !

!CouchDoc class methodsFor: 'not yet classified'!

on: aModel id: anId revision: aRevision

	^ self new intitializeOn: aModel id: anId revision: aRevision
! !

Object subclass: #RecipeSearch
	instanceVariableNames: 'revision'
	category: 'GroceryApp'!

!RecipeSearch methodsFor: 'not yet classified'!

id: anId

	jQuery 
		ajax: 'http://localhost/couchdb/recipes/', anId
		options: #{
				'type' -> 'GET'.
				'dataType' -> 'jsonp'.
				'success' -> [ :jsonp | self launchViewOn: jsonp ].
				'error' -> [window alert: 'error']
		}.
!

launchViewOn: aJSONObject
| recipe recipeView |

	recipe := CouchDoc
			on: ( Recipe fromJSON: aJSONObject )
			id: ( aJSONObject at: '_id' )
			revision: ( aJSONObject at: '_rev' ).
	recipeView := RecipeView on: recipe.
	recipeView appendToJQuery: ( '#recipe' asJQuery ).
! !

