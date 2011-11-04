Smalltalk current createPackage: 'Grocery' properties: #{'methods'->[object Object]. 'inheritedMethods'->[object Object]. 'klass'->Array. '_size'->a BlockClosure. '_at_put_'->a BlockClosure}!
Object subclass: #Recipe
	instanceVariableNames: 'name'
	category: 'Grocery'!

!Recipe methodsFor: 'not yet classified'!

initializeNamed: aName

	name := aName
!

name

	^ name
! !

!Recipe class methodsFor: 'not yet classified'!

named: aName

	^ self new initializeNamed: aName
! !

Widget subclass: #RecipeView
	instanceVariableNames: 'recipe'
	category: 'Grocery'!

!RecipeView methodsFor: 'not yet classified'!

renderOn: html

	html p: recipe name.
!

initialize

	recipe := Recipe named: 'BLTs'
! !

TestCase subclass: #RecipeTest
	instanceVariableNames: ''
	category: 'Grocery'!

!RecipeTest methodsFor: 'not yet classified'!

testInitialize
	| new |
	new := Recipe named: 'BLTs'.
	self assert: ( new name = 'BLTs' ).
! !

