Smalltalk current createPackage: 'HelloApp' properties: #{'methods'->[object Object]. 'inheritedMethods'->[object Object]. 'klass'->Array. '_size'->a BlockClosure. '_at_put_'->a BlockClosure}!

Object subclass: #Hello
	instanceVariableNames: ''
	category: 'HelloApp'!

!Hello methodsFor: 'not yet classified'!

begin
"Makes me say hello to the user."

| msg button | 
msg := 'Hello world!!'.
button := '#sayHello' asJQuery.
button click: [button after: '<p>' , msg , '</p>'].
! !

