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

!RecipeView methodsFor: 'action'!

refresh

	self selector html: ''. 
	self appendToJQuery: self selector.
!

addToRecipeValueOf: input onClickOf: button

	button asJQuery click: [ 
          	self recipe add: ( Ingredient named: input asJQuery val ). 
          	self refreshAt: '#recipe' asJQuery.
        ]
!

saveRecipeOnClickOf: button

	button asJQuery click: [ self persistRecipe ].
!

persistRecipe

	jQuery
      		ajax: 'http://localhost/couchdb/recipes/', self recipe id
      		options: #{
				'type' -> 'PUT'.
				'contentType' -> 'application/json'.
				'data' -> self recipe asJSON
		}.
!

refreshAt: aSelector

	aSelector html: ''. 
	self appendToJQuery: aSelector.
! !

!RecipeView methodsFor: 'not yet classified'!

recipe

	^ recipe
!

selector

	^ '#recipe' asJQuery
!

initializeOn: aRecipe

	recipe := aRecipe
! !

!RecipeView methodsFor: 'rendering'!

renderOn: html
	self renderNameOn: html.
	self renderIngredientsOn: html.
	self renderIngredientInputOn: html.
	self renderSaveButtonOn: html.
!

renderIngredientInputOn: html
| input button |

	input := html input
		id: 'ingredientInput'.
        button := html button 
        	id: 'addIngredient';
		with: 'Add Ingredient'.

	self addToRecipeValueOf: input onClickOf: button.
!

renderSaveButtonOn: html

	html div with: [ self renderSaveButtonOn: html ].
!

renderNameOn: html

	html div with: self recipe name.
!

renderIngredientsOn: html

	recipe ingredients do: [ :anIngredient |
  		( IngredientView on: anIngredient ) renderOn: html ].
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

!CouchDoc methodsFor: 'not yet classified'!

intitializeOn: aModel id: anId revision: aRevision

	model := aModel.
	id := anId.
        revision := aRevision.
!

doesNotUnderstand: aMessage

	^ model 
		perform: aMessage selector
		withArguments: aMessage arguments
!

revision

	^ revision
!

id

	^ id
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

success: aJSONObject
| recipe recipeView |

	recipe := CouchDoc
			on: ( Recipe fromJSON: aJSONObject )
			id: ( aJSONObject at: '_id' )
			revision: ( aJSONObject at: '_rev' ). 
	recipeView := RecipeView on: recipe.
	recipeView appendToJQuery: ( '#recipe' asJQuery ).
!

id: anId
| result |
	result := jQuery 
			ajax: 'http://localhost/couchdb/recipes/', anId
			options: #{
				'type' -> 'GET'.
				'dataType' -> 'jsonp'.
				'success' -> [ :jsonp | self success: jsonp ].
				'error' -> [window alert: 'error']
			}.
! !

