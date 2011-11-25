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
		participants := Participants with: ( Array 
          		with: self participant
          		with: self participantB )]
!

participant

	^ participant ifNil: [ participant := Participant named: 'Thokul Longclaw' ]
!

participantB

	^ participant ifNil: [ participant := Participant named: 'Asmedeus' ]
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
!

testEquality
| a b |
	
	a := Participant named: 'Thokul Longclaw'.
	b := Participant named: 'Thokul Longclaw'.
	self assert: a = b.
! !

DDTest subclass: #ParticipantsTest
	instanceVariableNames: ''
	category: 'DDTest'!

!ParticipantsTest methodsFor: 'not yet classified'!

testMoveUp
| participants |
	participants := factory participants.
	self assert: participants first = factory participant.
	self assert: participants second = factory participantB.
	participants moveUp: factory participantB.
	self assert: participants first = factory participantB.
	self assert: participants second = factory participant.
!

testMoveUpFirst
| participants |
	participants := factory participants.
	self assert: participants first = factory participant.
	self assert: participants second = factory participantB.
	participants moveUp: factory participant.
	self assert: participants first = factory participantB.
	self assert: participants second = factory participant.
!

testMoveUpMiddle
| participants a b c d e |
	participants := Participants new.
	a := Participant named: 'a'.
	b := Participant named: 'b'.
	c := Participant named: 'c'.
	d := Participant named: 'd'.
	e := Participant named: 'e'.
	participants add: a; add: b; add: c; add: d; add: e.
	self assert: participants first = a.
	self assert: participants second = b.
	self assert: participants last = e.
	participants moveUp: c.
	self assert: participants first = a.
	self assert: participants second = c.
	self assert: participants last = e.
!

testNew
| model |
	model := Participants new.
	self assert: model participants isEmpty.
! !

