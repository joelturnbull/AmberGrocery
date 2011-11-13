Widget subclass: #SmackboneView
	instanceVariableNames: 'el'
	category: 'Smackbone'!

!SmackboneView methodsFor: 'not yet classified'!

render
	el empty.
	self renderOn: (HTMLCanvas onJQuery: el).
!

el
	^ el
!

initialize
	super initialize.
	el := '<div>' asJQuery.
! !

Object subclass: #SmackboneRouter
	instanceVariableNames: ''
	category: 'Smackbone'!

!SmackboneRouter methodsFor: 'not yet classified'!

navigate: aString
	self perform: (self routes at: aString).
!

doesRespondTo: aString
	^ self routes keys includes: aString.
! !

!SmackboneRouter class methodsFor: 'not yet classified'!

start
! !

Object subclass: #SmackboneHistorian
	instanceVariableNames: 'routes started'
	category: 'Smackbone'!

!SmackboneHistorian methodsFor: 'not yet classified'!

initialize
	routes := Array new. "Array because Set does not support select: right now. Will be converted into a Set later. Don't rely on ordering!!"
	started := false.
!

addRoute: aRoute
	routes add: aRoute
!

start
	started := true.
	self navigate: self location.
!

navigate: aString
	Transcript show: 'navigating to ', aString.
	started ifFalse: [ ^ self ].
	(routes select: [ :route | route doesRespondTo: aString ]) asSet do: [ :route | route navigate: aString ]
!

handleHashChanged
	self navigate: self location.
!

window
	^ window
!

routeView: aView to: aString
	self addRoute: (SmackboneViewRouter view: aView route: aString).
!

location
	^ self window location hash replace: '#' with: ''
! !

SmackboneRouter subclass: #SmackboneViewRouter
	instanceVariableNames: ''
	category: 'Smackbone'!

!SmackboneViewRouter methodsFor: 'not yet classified'!

doesRespondTo: aString
	^ route = aString.
!

navigate: aString
	(aString = route) ifFalse: [ ^ false ].
	view render.
!

view: aView
	view := aView.
!

route: aString
	route := aString
! !

!SmackboneViewRouter class methodsFor: 'not yet classified'!

view: aView route: aString
	^ self new view: aView; route: aString; yourself.
! !

