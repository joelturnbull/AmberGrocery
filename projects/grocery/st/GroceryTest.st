Smalltalk current createPackage: 'GroceryTest' properties: #{'methods'->[object Object]. 'inheritedMethods'->[object Object]. 'klass'->Array. '_size'->a BlockClosure. '_at_put_'->a BlockClosure}!
TestCase subclass: #GroceryTest
	instanceVariableNames: 'testObjects'
	category: 'GroceryTest'!

!GroceryTest methodsFor: 'not yet classified'!

setUp

	testObjects := GroceryTestObjects new.
! !

GroceryTest subclass: #RecipeTest
	instanceVariableNames: ''
	category: 'GroceryTest'!

!RecipeTest methodsFor: 'not yet classified'!

testRecipeAddIngredient
| recipe ingredient |
	
	recipe := Recipe named: 'BLTs'.
        ingredient := Ingredient named: '1 Pound of Bacon'.
        recipe add: ingredient.
	self assert: ( recipe includes: ingredient )
!

testRecipeIsNamed
| recipe |
	
	recipe := Recipe named: 'BLTs'.
	self assert: recipe name = 'BLTs'.
! !

GroceryTest subclass: #IngredientTest
	instanceVariableNames: ''
	category: 'GroceryTest'!

!IngredientTest methodsFor: 'not yet classified'!

testIngredient
| ingredient |

	ingredient := Ingredient named: '1 Pound of Bacon'.
	self assert: ingredient name = '1 Pound of Bacon'.
! !

GroceryTest subclass: #RecipeViewTest
	instanceVariableNames: ''
	category: 'GroceryTest'!

!RecipeViewTest methodsFor: 'not yet classified'!

testDisplaysName
| recipe view |

	recipe := Recipe named: 'Tacos'.
	view := RecipeView on: recipe.

	view render.
	self assert: ( view el text = recipe name ).
! !

GroceryTest subclass: #TextViewTest
	instanceVariableNames: ''
	category: 'GroceryTest'!

!TextViewTest methodsFor: 'not yet classified'!

testDisplaysText
| text view |

	text := '1 Pound of Bacon'.
	view := TextView on: text.
	view render.
	self assert: ( view el text = text ).
! !

GroceryTest subclass: #IngredientViewTest
	instanceVariableNames: ''
	category: 'GroceryTest'!

GroceryTest subclass: #IngredientsViewTest
	instanceVariableNames: ''
	category: 'GroceryTest'!

!IngredientsViewTest methodsFor: 'not yet classified'!

testDisplaysText
| ingredients view |

	ingredients := 
		Array 
			with: ( Ingredient named: '1 Pound of Bacon' )
			with: ( Ingredient named: '1/2 Head of Lettuce' )
			with: ( Ingredient named: '1 Tomato' ).
	view := IngredientsView on: ingredients.
	view render.
	ingredients do: [ :anIngredient |
        	self assert: ( view el text includesSubString: anIngredient name )].
! !

Object subclass: #GroceryTestObjects
	instanceVariableNames: 'bltIngredients'
	category: 'GroceryTest'!

!GroceryTestObjects methodsFor: 'not yet classified'!

bltIngredients

	^ bltIngredients ifNil: [ bltIngredients := '' ]
! !

