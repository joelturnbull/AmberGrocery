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

dbid

	^ self db id
!

asJSON

	^ self asVersionedRecipe asJSON
!

asVersionedRecipe

	^ VersionedRecipe
		named: self name
		ingredients: self ingredients
		revision: self db revision
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
! !

Widget subclass: #RecipeView
	instanceVariableNames: 'recipe'
	category: 'GroceryApp'!

!RecipeView methodsFor: 'not yet classified'!

initialize

	recipe := CouchDoc
			on: self recipeFixture
			id: ''
			revision: ''
!

renderOn: html
	html div with: self recipe name.
	recipe ingredients do: [ :anIngredient |
  		( IngredientView on: anIngredient ) renderOn: html ].
	self renderIngredientInputOn: html.
	html div with: [ self renderSaveButtonOn: html ].
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

	jQuery
      		ajax: 'http://localhost/couchdb/recipes/', recipe id
      		options: #{
				'type' -> 'PUT'.
				'contentType' -> 'application/json'.
				'data' -> recipe asJSON
		}.
!

recipeFixture

	^ Recipe 
		named: 'BLTs'
		ingredients: ( Array
			with: ( Ingredient named: '1 Pound of Bacon' )
			with: ( Ingredient named: '1/2 Head of Lettuce' ))
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

Recipe subclass: #VersionedRecipe
	instanceVariableNames: 'revision'
	category: 'GroceryApp'!

!VersionedRecipe methodsFor: 'not yet classified'!

initializeNamed: aName ingredients: anArray revision: aRevision

	name := aName.
	ingredients := anArray.
	revision := aRevision.
! !

!VersionedRecipe class methodsFor: 'not yet classified'!

named: aName ingredients: anArray revision: aRevision

	^ self new initializeNamed: aName ingredients: anArray revision: aRevision
! !

Object subclass: #CouchDoc
	instanceVariableNames: 'model id revision'
	category: 'GroceryApp'!

!CouchDoc methodsFor: 'not yet classified'!

intitializeOn: aModel id: anId revision: aRevision

	model := aModel.
	id := anId.
        revision := aRevision.
!

name
	^ model name
!

doesNotUnderstand: aMessage

	^ model 
		perform: aMessage selector
		withArguments: aMessage arguments
! !

!CouchDoc class methodsFor: 'not yet classified'!

on: aModel id: anId revision: aRevision

	^ self new intitializeOn: aModel id: anId revision: aRevision
! !
