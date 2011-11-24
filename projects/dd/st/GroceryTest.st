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
!

testEquality
| a b |

	a := Ingredient named: '1 Pound of Bacon'.
	b := Ingredient named: '1 Pound of Bacon'.
	self assert: a = b.
! !

GroceryTest subclass: #RecipeViewTest
	instanceVariableNames: ''
	category: 'GroceryTest'!

!RecipeViewTest methodsFor: 'not yet classified'!

testDisplaysName
| recipe view |

	recipe := testObjects blts.
	view := ( RecipeView on: recipe ) render.
	self assert: ( view el text includesSubString: recipe name ).
!

testDisplaysIngredients
| recipe view |

	recipe := testObjects blts.
	view := ( RecipeView on: recipe ) render.
	recipe ingredients do: [ :anIngredient | 
		self assert: ( view el text includesSubString: anIngredient name ) ].
!

testDisplaysAddIngredient
| recipe view |

	recipe := testObjects blts.
	view := ( RecipeView on: recipe ) render.
	self assert: ( view el text includesSubString: 'Add Ingredient' ).
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

	ingredients := testObjects bltIngredients.
	view := ( IngredientsView on: ingredients ) render.
	ingredients do: [ :anIngredient |
        	self assert: ( view el text includesSubString: anIngredient name )].
! !

Object subclass: #GroceryTestObjects
	instanceVariableNames: 'bltIngredients blts'
	category: 'GroceryTest'!

!GroceryTestObjects methodsFor: 'not yet classified'!

bltIngredients

	^ bltIngredients ifNil: [ 
          	bltIngredients := 
                	Array 
				with: ( Ingredient named: '1 Pound of Bacon' )
				with: ( Ingredient named: '1/2 Head of Lettuce' )
				with: ( Ingredient named: '1 Tomato' )]
!

blts

	^ blts ifNil: [ blts := Recipe named: 'BLTs' ingredients: self bltIngredients ]
! !

GroceryTest subclass: #IngredientFormTest
	instanceVariableNames: ''
	category: 'GroceryTest'!

!IngredientFormTest methodsFor: 'not yet classified'!

testAddsIngredient
| recipe ingredientForm |

	recipe := testObjects blts.
	ingredientForm := IngredientForm onClick: [ :anIngredient | recipe add: anIngredient ].

	ingredientForm render.
	ingredientForm val: 'Mayonnaise'.
	ingredientForm click.

	self assert: ( recipe includes: ( Ingredient named: 'Mayonnaise' )).
! !

GroceryTest subclass: #RecipeWidgetTest
	instanceVariableNames: ''
	category: 'GroceryTest'!

!RecipeWidgetTest methodsFor: 'not yet classified'!

testAddIngredient
| recipeWidget |

	recipeWidget := RecipeWidget on: testObjects blts.
	recipeWidget render.
	recipeWidget val: 'Mayonnaise'.
	recipeWidget click.
	self assert: ( recipeWidget text includesSubString: 'Mayonnaise' ).
! !

GroceryTest subclass: #IngredientsWidgetTest
	instanceVariableNames: ''
	category: 'GroceryTest'!

!IngredientsWidgetTest methodsFor: 'not yet classified'!

testAddIngredient
| widget |

	widget := IngredientsWidget on: testObjects bltIngredients onClick: [].
	widget render.
	widget val: 'Mayonnaise'.
	widget click.
	self assert: ( widget text includesSubString: 'Mayonnaise' ).
! !

GroceryTest subclass: #CouchDBTest
	instanceVariableNames: ''
	category: 'GroceryTest'!

!CouchDBTest methodsFor: 'not yet classified'!

testFetch
| library |
	
	library := CouchDB 
			on: Array new
			at: 'http://127.0.0.1:5984/recipes/_all_docs'.
	self assert: library isEmpty. 
	library fetch.
	self assert: library notEmpty.
! !

