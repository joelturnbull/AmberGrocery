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

initializeNamed: aName

	name := aName.
	ingredients := Array new.
!

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
! !

!Recipe class methodsFor: 'not yet classified'!

named: aName

	^ self new initializeNamed: aName
! !

Widget subclass: #RecipeView
	instanceVariableNames: 'recipe'
	category: 'GroceryApp'!

!RecipeView methodsFor: 'not yet classified'!

initialize

	recipe := Recipe named: 'BLTs'.
	recipe add: ( Ingredient named: '1 Pound of Bacon' ).
	recipe add: ( Ingredient named: '1/2 Head of Lettuce' ).
!

renderOn: html
	html div with: [ self renderSaveButtonOn: html ].

	html div with: self recipe name.
	recipe ingredients do: [ :anIngredient |
  		( IngredientView on: anIngredient ) renderOn: html ].
	self renderIngredientInputOn: html.
!

recipe

	^ recipe
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

refresh

	self selector html: ''. 
	self appendToJQuery: self selector.
!

selector

	^ '#recipe' asJQuery
!

addToRecipeValueOf: input onClickOf: button

	button asJQuery click: [ 
          	self recipe add: ( Ingredient named: input asJQuery val ). 
          	self refresh 
        ]
!

renderSaveButtonOn: html
| button |

	button := html button
		id: 'saveRecipe';
		with: 'Save'.
	
	self saveRecipeOnClickOf: button.
!

saveRecipeOnClickOf: button

	button asJQuery click: [ self persistRecipe ].
!

persistRecipe
| result data |

data := '{ "name": "Tacos", "ingredients": [] }'.
result := jQuery
      ajax: 'http://localhost/couchdb/recipes/'
      options: #{
				'type' -> 'POST'.
				'contentType' -> 'application/json'.
				'data' -> '{"name":"BLTxs"}'
	}.
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

