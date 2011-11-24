Smalltalk current createPackage: 'DDModel' properties: #{'methods'->[object Object]. 'inheritedMethods'->[object Object]. 'klass'->Array. '_size'->a BlockClosure. '_at_put_'->a BlockClosure}!
Object subclass: #Participant
	instanceVariableNames: 'name'
	category: 'DDModel'!

!Participant methodsFor: 'not yet classified'!

initializeNamed: aName
	name := aName
!

name
	^ name
! !

!Participant class methodsFor: 'not yet classified'!

named: aName

	^ self new initializeNamed: aName
! !

