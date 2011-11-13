Smalltalk current createPackage: 'Grocery' properties: #{'methods'->[object Object]. 'inheritedMethods'->[object Object]. 'klass'->Array. '_size'->a BlockClosure. '_at_put_'->a BlockClosure}!
Object subclass: #Recipe
	instanceVariableNames: 'ingredients'
	category: 'Grocery'!

!Recipe methodsFor: 'not yet classified'!

add: anIngredient

	ingredients add: anIngredient
!

includes: anIngredient

	^ ingredients includes: anIngredient
!

ingredients

	^ ingredients copy
!

name

	^  name
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

Object subclass: #Ingredient
	instanceVariableNames: 'name'
	category: 'Grocery'!

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

SmackboneView subclass: #ModelView
	instanceVariableNames: 'model'
	category: 'Grocery'!

!ModelView methodsFor: 'not yet classified'!

initializeOn: aModel

	super initialize.
	model := aModel
!

model

	^ model
! !

!ModelView class methodsFor: 'not yet classified'!

on: aModel

	^ self new initializeOn: aModel
! !

ModelView subclass: #RecipeView
	instanceVariableNames: ''
	category: 'Grocery'!

!RecipeView methodsFor: 'not yet classified'!

renderOn: html

	( TextView on: self recipe name ) renderOn: html.
	( IngredientsView on: self recipe ingredients ) renderOn: html.
window alert: el text.
!

recipe

	^ model
! !

!RecipeView class methodsFor: 'not yet classified'!

on: aRecipe

	^ self new initializeOn: aRecipe
! !

ModelView subclass: #TextView
	instanceVariableNames: ''
	category: 'Grocery'!

!TextView methodsFor: 'not yet classified'!

renderOn: html

	html div with: self text.
!

text

	^ model
! !

ModelView subclass: #IngredientsView
	instanceVariableNames: ''
	category: 'Grocery'!

!IngredientsView methodsFor: 'not yet classified'!

ingredients

	^ model
!

renderOn: html

	self ingredients do: [ :anIngredient |
        	( IngredientView on: anIngredient ) renderOn: html ]
! !

ModelView subclass: #IngredientView
	instanceVariableNames: ''
	category: 'Grocery'!

!IngredientView methodsFor: 'not yet classified'!

renderOn: html

	( TextView on: self ingredient name ) renderOn: html.
!

ingredient

	^ model
! !

