Smalltalk current createPackage: 'DDTest' properties: #{'methods'->[object Object]. 'inheritedMethods'->[object Object]. 'klass'->Array. '_size'->a BlockClosure. '_at_put_'->a BlockClosure}!
TestCase subclass: #DDTest
	instanceVariableNames: 'factory'
	category: 'DDTest'!

!DDTest methodsFor: 'not yet classified'!

setUp

	factory := DDFactory new
! !

Object subclass: #DDFactory
	instanceVariableNames: 'participants participant members'
	category: 'DDTest'!

!DDFactory methodsFor: 'not yet classified'!

participants

	^ participants ifNil: [ 
		participants := Array 
          		with: self participant
          		with: ( Participant named: 'Asmedeus' )]
!

participant

	^ participant ifNil: [ participant := Participant named: 'Thokul Longclaw' ]
! !

DDTest subclass: #ParticipantViewTest
	instanceVariableNames: ''
	category: 'DDTest'!

!ParticipantViewTest methodsFor: 'not yet classified'!

testDisplaysName
| model view |

	model := factory participant.
	view := ( ParticipantView on: model ) render.
	self assert: ( view el text includesSubString: model name ).
! !

DDTest subclass: #ParticipantsViewTest
	instanceVariableNames: ''
	category: 'DDTest'!

!ParticipantsViewTest methodsFor: 'not yet classified'!

testDisplaysNames
| collection view |

	collection := factory participants.
	view := ( ParticipantsView on: collection ) render.
	collection 
		do: [ :aParticipant | self assert: ( view el text includesSubString: aParticipant name )]
! !

DDTest subclass: #ParticipantTest
	instanceVariableNames: ''
	category: 'DDTest'!

!ParticipantTest methodsFor: 'not yet classified'!

testIsNamed
| model name |
	
	model := Participant named: 'Thokul Longclaw'.
	self assert: model name = 'Thokul Longclaw'.
! !

