Smalltalk current createPackage: 'DDView' properties: #{'methods'->[object Object]. 'inheritedMethods'->[object Object]. 'klass'->Array. '_size'->a BlockClosure. '_at_put_'->a BlockClosure}!
SmackboneView subclass: #DDView
	instanceVariableNames: 'model'
	category: 'DDView'!

!DDView methodsFor: 'not yet classified'!

initializeOn: aModel

	model := aModel
! !

!DDView class methodsFor: 'not yet classified'!

on: aModel

	^ self new initializeOn: aModel
! !

DDView subclass: #ParticipantView
	instanceVariableNames: ''
	category: 'DDView'!

!ParticipantView methodsFor: 'not yet classified'!

renderOn: html

	html div with: model name
! !

DDView subclass: #ParticipantsView
	instanceVariableNames: ''
	category: 'DDView'!

!ParticipantsView methodsFor: 'not yet classified'!

renderOn: html
	model 
		do: [ :aParticipant | ( ParticipantView on: aParticipant ) renderOn: html ]
! !

