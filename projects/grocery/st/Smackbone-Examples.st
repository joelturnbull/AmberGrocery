SmackboneView subclass: #SmackboneWelcome
	instanceVariableNames: 'numRenders'
	category: 'Smackbone-Examples'!

!SmackboneWelcome methodsFor: 'not yet classified'!

renderOn: html
	html h1: 'Welcome to Smackbone!!'.
	html p: ('This is a Smackbone view. It is similar to an Amber Widget in that you define its appearance by implementing renderOn: in your widget subclass. ' ,
		'A SmackboneView can attach itself to a DOM element, and then be told to render whenever you want to update the user''s view.').
	html p: 'Smackbone also provides a simple routing system so you can build apps that transition through different sections via url clicks'.
	html p: 'Amber and Smackbone make it really easy to write automated tests for your Javascript code, whether it''s models, routers, or views.'.
	html p with: [ 
          html with: 'Start the '.
          html a href: '#tutorial'; with: 'tutorial'.
          html with: ' or check out the '.
          html a href: '#examples'; with: 'examples'.
          html with: '.'. ].
! !

SmackboneView subclass: #SmackboneTutorial
	instanceVariableNames: 'page'
	category: 'Smackbone-Examples'!

!SmackboneTutorial methodsFor: 'not yet classified'!

renderOn: html
	html h1: 'Smackbone Tutorial'.
	self perform: 'renderPage' , page asString , 'On:' withArguments: {html}.
	self renderNavLinksOn: html.
!

renderPage1On: html
	html p: ('This is a Smackbone view. It is similar to an Amber Widget in that you define its appearance by implementing renderOn: in your widget subclass. ' ,
		'A SmackboneView can attach itself to a DOM element, and then be told to render whenever you want to update the user''s view.').
!

initialize
	super initialize.
	page := 1.
!

hasMorePages
	^ (self basicAt:  '_renderPage' , (page + 1) asString , 'On_') notNil.
!

renderNavLinksOn: html
	self hasPrevPages ifTrue: [ html a href: '#tutorial-previous'; onClick: [ self previous ]; with: 'previous' ].
	html with: ' '.
	self hasMorePages ifTrue: [ html a href: '#tutorial-next'; onClick: [ self next ]; with: 'next' ].
!

hasPrevPages
	^ (self basicAt:  '_renderPage' , (page - 1) asString , 'On_') notNil.
!

renderPage2On: html
	html p: 'Smackbone views are nifty things. They can show you the code that builds the page.'.
!

next
	self hasMorePages ifTrue: [ page := page + 1. ].
	self render.
!

previous
	Transcript show: 'called previous!!'.
	self hasPrevPages ifTrue: [ page := page - 1. ].
	self render.
!

renderPage3On: html
	html p: 'Here''s how I built the previous page!!'.
	self el append: (SmackboneCodeView onClass: SmackboneTutorial method: 'renderPage2On:') render el.
!

renderPage4On: html
	html p: 'Here''s how you can build the welcome page'.
	self el append: (SmackboneCodeView onClass: SmackboneWelcome method: 'renderOn:') render el.
!

renderPage5On: html
	html p: 'Amber lets you build HTML views programmatically. You can create links that execute a block of code when clicked. This block has access to javascript objects like window and document'.
	html code with: (html pre with: 'html a href: ''#''; onClick: [ window alert: ''Smalltalk in the browser. Cool!!'']; with: ''Click Here...'' .').
	html p: (html a href: '#'; onClick: [ :e | window alert: 'Smalltalk in the browser. Cool!!'. e preventDefault ]; with: 'Click Here...').
!

renderPage6On: html
	html p: 'In addition to rendering views as a result of an onClick: handler, you can use routers to define a set of behaviors to perform when a user clicks a link. ' ,
			'Your router subclass defines #routes and maps a route to a method.'.
	el append: (SmackboneCodeView onClass: SmackboneWelcomeRouter method: 'routes') render el.

	html p: 'This sets up a route so that calling SmackboneHistory navigate: '''' calls the welcome method, which tells a SmackboneWelcome view to render its nice welcome message:'.
	el append: (SmackboneCodeView onClass: SmackboneWelcomeRouter method: 'welcome') render el.
	el append: (SmackboneCodeView onClass: SmackboneWelcome method: 'renderOn:') render el.

	html p with: [
          html with: 'That''s it for now. You can head back to the '.
          html a href: '#'; with: 'welcome page'.
          html with: ' or take a look at some of the '.
          html a href: '#examples'; with: 'examples'.
          html with: '. Thanks for checking out Amber Smalltalk and Smackbone!!'. ]
! !

SmackboneRouter subclass: #SmackboneWelcomeRouter
	instanceVariableNames: 'welcome tutorial examples counter hello'
	category: 'Smackbone-Examples'!

!SmackboneWelcomeRouter methodsFor: 'not yet classified'!

routes
	^ (Dictionary new)
		at: '' put: 'welcome';
		at: 'tutorial' put: 'tutorial';
		at: 'examples' put: 'examples';
		at: 'counter' put: 'counter';
		at: 'hello' put: 'hello';
		yourself.
!

domRoot
	^ '#smackbone-welcome' asJQuery
!

welcome
	self domRoot empty append: welcome render el.
!

tutorial
	self domRoot empty append: tutorial render el.
!

initialize
	welcome := SmackboneWelcome new.
	tutorial := SmackboneTutorial new.
	examples := SmackboneExampleListView new.
	counter := SmackboneCounter new.
	hello := SmackboneHello new.
!

tutorialNext
	tutorial next.
!

tutorialPrevious
	tutorial previous.
!

examples
	self domRoot empty append: examples render el.
!

counter
	self domRoot empty append: counter render el.
!

hello
	self domRoot empty append: hello render el.
!

counterView
	^ counter
! !

SmackboneView subclass: #SmackboneCodeView
	instanceVariableNames: 'klass methodName'
	category: 'Smackbone-Examples'!

!SmackboneCodeView methodsFor: 'not yet classified'!

klass: aClass
	klass := aClass
!

methodName: aString
	methodName := aString
!

renderOn: html
	html h2: klass asString , '#' , methodName.
	html code with: (html pre with: (klass methodAt: methodName) source).
! !

!SmackboneCodeView class methodsFor: 'not yet classified'!

onClass: klass method: methodName
	^ self new klass: klass; methodName: methodName; yourself.
! !

SmackboneView subclass: #SmackboneExampleListView
	instanceVariableNames: ''
	category: 'Smackbone-Examples'!

!SmackboneExampleListView methodsFor: 'not yet classified'!

renderOn: html
	html p: 'Here are a few Smackbone examples to help get you started:'.
	html ul: [
          html li with: [
            html a href: '#counter'; with: 'SmackboneCounter'.
            html with: ' - it has '.
            (html a href: '#'; onClick: [ :e | Browser openOn: SmackboneCounterTest. e preventDefault ]; with: 'tests!!') ].
          html li with: [
            html a href: '#hello'; with: 'SmackboneHello' ] ].
	html p: (html a href: '#'; with: 'Go back home...').
! !

SmackboneView subclass: #SmackboneCounter
	instanceVariableNames: 'count'
	category: 'Smackbone-Examples'!

!SmackboneCounter methodsFor: 'not yet classified'!

initialize
	super initialize.
	count := 0.
!

renderOn: html
	html h1: count asString.
	html a href: '#'; onClick: [ :e | self decrease. e preventDefault. ]; with: '--'.
	html with: ' '.
	html a href: '#'; onClick: [ :e | self increase. e preventDefault ]; with: '++'.
	html p: (html a href: '#'; onClick: [ :e | Browser openOn: SmackboneCounterTest. e preventDefault ]; with: 'See the tests').
	html p: (html a href: '#'; with: 'home').
!

decrease
	count := count - 1.
	self render.
!

increase
	count := count + 1.
	self render.
! !

TestCase subclass: #SmackboneCounterTest
	instanceVariableNames: ''
	category: 'Smackbone-Examples'!

!SmackboneCounterTest methodsFor: 'not yet classified'!

testCounterStartsAt0
	| counter |
	counter := SmackboneCounter new.
	self assert: '0' equals: (counter render el find: 'h1') text.
!

testIncreaseAddsOne
	| counter |
	counter := SmackboneCounter new.
	counter increase.
	self assert: '1' equals: (counter render el find: 'h1') text.
!

testDecreaseSubtractsOne
	| counter |
	counter := SmackboneCounter new.
	counter decrease.
	self assert: '-1' equals: (counter render el find: 'h1') text.
! !

SmackboneView subclass: #SmackboneHello
	instanceVariableNames: 'personName'
	category: 'Smackbone-Examples'!

!SmackboneHello methodsFor: 'not yet classified'!

renderOn: html
	html p: [ 
          html with: 'Hello!!'.
          personName ifNil: [ self renderNameFormOn: html ] ifNotNil: [ self renderHelloOn: html ] ].
        html p: (html a href: '#'; onClick: [ :e | self render. e preventDefault ]; with: 'refresh' ).
!

renderNameFormOn: html
	html with: ' I don''t know you. What''s your name? '.
	html input class: 'person-name'; type: 'text'.
	html with:  ' '.
	html input type: 'submit'; onClick: [ :e | self collectPersonName. e preventDefault ]; value: 'Continue'.
!

collectPersonName
	personName := (el find: 'input.person-name') val.
	self render.
!

renderHelloOn: html
	html with: ' It''s nice to meet you, ' , personName.
	html with: ' '.
	html a href: '#'; onClick: [ :e | personName := nil. self render. e preventDefault ]; with: 'Forget about me'.
! !

SmackboneView subclass: #SmackboneTodo
	instanceVariableNames: ''
	category: 'Smackbone-Examples'!

!SmackboneTodo methodsFor: 'not yet classified'!

renderOn: html
	html h1: 'Smackbone Todo list'.
! !

Object subclass: #CorysCanvas
	instanceVariableNames: 'startPoint endPoint'
	category: 'Smackbone-Examples'!

!CorysCanvas methodsFor: 'not yet classified'!

isReadyForDrawing
	^ startPoint notNil and: [ endPoint notNil ].
!

click: aPoint
	startPoint ifNil: [ startPoint := aPoint ] ifNotNil: [ endPoint := aPoint ].
!

drawOn: view
	view drawLineFrom: startPoint to: endPoint
! !

Object subclass: #Html5Drawer
	instanceVariableNames: 'canvas'
	category: 'Smackbone-Examples'!

!Html5Drawer methodsFor: 'not yet classified'!

drawLineFrom: start to: end
! !

