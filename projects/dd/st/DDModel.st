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
!

= aModel

	^ ( aModel isKindOf: self class ) 
		and: [ aModel name = self name ]
! !

!Participant class methodsFor: 'not yet classified'!

named: aName

	^ self new initializeNamed: aName
! !

Object subclass: #Participants
	instanceVariableNames: 'collection'
	category: 'DDModel'!

!Participants methodsFor: 'not yet classified'!

initializeWith: aCollection

	collection := aCollection
!

do: aBlock

	^ collection do: aBlock
!

first 
	^ collection first
!

second 
	^ collection second
!

moveUp: anElement
| index theRest |
	index := collection indexOf: anElement.
	collection remove: anElement.
	theRest := collection removeFrom: ( index - 1 ) to: collection size.
	collection add: anElement.
	collection add: theRest.
!

add: anElement
	collection add: anElement
!

participants

	^ collection
!

last
	^ collection last
! !

!Participants class methodsFor: 'not yet classified'!

with: aCollection

	^ self basicNew initializeWith: aCollection
!

new

	^ self with: Array new.
! !

