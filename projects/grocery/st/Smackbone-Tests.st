TestCase subclass: #SmackboneViewTest
	instanceVariableNames: ''
	category: 'Smackbone-Tests'!

!SmackboneViewTest methodsFor: 'not yet classified'!

testRenderSetsContentsOfEl
	| view |
	view := SmackboneTestStringRenderingView new.
	self assert: 'rendered' equals: view render el text.
!

testContentsOfElAreEmpty
	| view |
	view := SmackboneTestStringRenderingView new.
	self assert: '' equals: view el text.
! !

TestCase subclass: #SmackboneRouterTest
	instanceVariableNames: ''
	category: 'Smackbone-Tests'!

!SmackboneRouterTest methodsFor: 'not yet classified'!

testNavigateCallsAssociatedMethod
	| router |
	router := SmackboneTestSimpleRouter new.
	self assert: (router message = nil).
	router navigate: 'another one'.
	self assert: 'called anotherOne' equals: router message.
!

testDoesRespondTo
	| router |
	router := SmackboneTestSimpleRouter new.
	self assert: (router doesRespondTo: '').
	self assert: (router doesRespondTo: 'another one').
	self deny: (router doesRespondTo: 'missing one').
! !

SmackboneView subclass: #SmackboneTestStringRenderingView
	instanceVariableNames: ''
	category: 'Smackbone-Tests'!

!SmackboneTestStringRenderingView methodsFor: 'not yet classified'!

renderOn: html
	html with: 'rendered'
! !

SmackboneRouter subclass: #SmackboneTestSimpleRouter
	instanceVariableNames: 'message'
	category: 'Smackbone-Tests'!

!SmackboneTestSimpleRouter methodsFor: 'not yet classified'!

routes
	^ Dictionary with: '' -> 'default' with: 'another one' -> 'anotherOne' with: 'funky-one' -> 'funky'
!

default
	message := 'called default'.
!

message
	^ message
!

anotherOne
	message := 'called anotherOne'
!

funky
	message := 'called funky'
! !

TestCase subclass: #SmackboneHistorianTest
	instanceVariableNames: ''
	category: 'Smackbone-Tests'!

!SmackboneHistorianTest methodsFor: 'not yet classified'!

testStartNavigatesToDefaultOnRoutes
	| historian router |
	historian := SmackboneHistorian new.
	router := SmackboneTestSimpleRouter new.
	historian addRoute: router.
	historian start.
	self assert: 'called default' equals: router message.
!

testNavigateSkipsRoutesThatDontRespond
	| historian router |
	historian := SmackboneHistorian new.
	router := SmackboneTestSimpleRouter new.
	historian addRoute: router.
	historian start.
	historian navigate: 'missing one'.
	self assert: 'called default' equals: router message.
!

testDoesNotNavigateUntilStartIsCalled
	| historian router |
	historian := SmackboneHistorian new.
	router := SmackboneTestSimpleRouter new.
	historian addRoute: router.
	historian navigate: 'another one'.
	self assert: (router message = nil).
!

testNavigateCallsAssociatedRoutes
	| historian router |
	historian := SmackboneHistorian new.
	router := SmackboneTestSimpleRouter new.
	historian addRoute: router.
	historian start.
	historian navigate: 'another one'.
	self assert: 'called anotherOne' equals: router message.
!

testHandleHashChangedNavigates
	| historian router |
	historian := SmackboneTestHistorianWithFakeWindow new.
	router := SmackboneTestSimpleRouter new.
	historian addRoute: router.
	historian start.
	historian window hash: '#funky-one'.
	historian handleHashChanged.
	self assert: 'called funky' equals: router message.
!

testNavigateToViewBypassingRouter
	| history view |
	view := SmackboneTestStringRenderingView new.
	history := SmackboneHistorian new.
	history routeView: view to: 'gogogo'.
	history start.
	self deny: (view el text = 'rendered').
	history navigate: 'gogogo'.
	self assert: 'rendered' equals: view el text.
!

testStartNavigatesToWindowHash
	| historian router |
	historian := SmackboneTestHistorianWithFakeWindow new.
	router := SmackboneTestSimpleRouter new.
	historian addRoute: router.
	historian window hash: '#funky-one'.
	historian start.
	self assert: 'called funky' equals: router message.
! !

Object subclass: #SmackboneTestFakeWindow
	instanceVariableNames: 'hash'
	category: 'Smackbone-Tests'!

!SmackboneTestFakeWindow methodsFor: 'not yet classified'!

hash: aString
	hash := aString
!

hash
	^ hash
!

location
!

initialize
	hash := ''
! !

SmackboneHistorian subclass: #SmackboneTestHistorianWithFakeWindow
	instanceVariableNames: 'fakeWindow'
	category: 'Smackbone-Tests'!

!SmackboneTestHistorianWithFakeWindow methodsFor: 'not yet classified'!

initialize
	super initialize.
	fakeWindow := SmackboneTestFakeWindow new.
!

window
	^ fakeWindow
! !

TestCase subclass: #SmackboneViewRouterTest
	instanceVariableNames: ''
	category: 'Smackbone-Tests'!

!SmackboneViewRouterTest methodsFor: 'not yet classified'!

testDoesRespondTo
	| router view |
	view := SmackboneTestStringRenderingView new.
	router := SmackboneViewRouter view: view route: 'chicken'.
	self assert: (router doesRespondTo: 'chicken').
	self deny: (router doesRespondTo: 'turkey').
!

testNavigatePerformsRender
	| router view |
	view := SmackboneTestStringRenderingView new.
	router := SmackboneViewRouter view: view route: 'chicken'.
	router navigate: 'chicken'.
	self assert: 'rendered' equals: view el text.
!

testNavigateToDifferentRouteSkipsRender
	| router view |
	view := SmackboneTestStringRenderingView new.
	router := SmackboneViewRouter view: view route: 'chicken'.
	router navigate: 'turkey'.
	self deny: (view el text = 'rendered').
! !

TestCase subclass: #CorysCanvasTest
	instanceVariableNames: ''
	category: 'Smackbone-Tests'!

!CorysCanvasTest methodsFor: 'not yet classified'!

testNewCanvasIsNotReadyForDrawing
	| canvas |
	canvas := CorysCanvas new.
	self deny: canvas isReadyForDrawing.
!

testCanvasIsNotReadyForDrawingAfterOneClick
	| canvas |
	canvas := CorysCanvas new.
	canvas click: (Point x: 10 y: 25).
	self deny: canvas isReadyForDrawing.
!

testCanvasIsReadyForDrawingAfterTwoClicks
	| canvas |
	canvas := CorysCanvas new.
	canvas click: (Point x: 10 y: 25).
	canvas click: (Point x: 10 y: 250).
	self assert: canvas isReadyForDrawing.
!

testDrawOnCallsDrawLineWithStartAndEndPoints
	| canvas view startPoint endPoint |
	startPoint := Point x: 10 y: 25. 
	endPoint := Point x: 10 y: 250.
	canvas := CorysCanvas new.
	canvas click: startPoint.
	canvas click: endPoint.
	view := TestReportingView new.
	canvas drawOn: view.
	self assert: (view start = startPoint).
	self assert: (view end = endPoint).
! !

Object subclass: #TestReportingView
	instanceVariableNames: 'start end'
	category: 'Smackbone-Tests'!

!TestReportingView methodsFor: 'not yet classified'!

drawLineFrom: startPoint to: endPoint
	start := startPoint.
	end := endPoint.
!

start
	^ start
!

end
	^ end
! !

