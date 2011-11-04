Smalltalk current createPackage: 'HelloApp' properties: #{'methods'->[object Object]. 'inheritedMethods'->[object Object]. 'klass'->Array. '_size'->a BlockClosure. '_at_put_'->a BlockClosure}!
Object subclass: #Hello
	instanceVariableNames: ''
	category: 'HelloApp'!

!Hello methodsFor: 'not yet classified'!

begin
"Makes me say hello to the user."

| msg button result | 
msg := 'Hello worldz!!'.
result := jQuery
      ajax: 'http://127.0.0.1:5984/mycouchshop/_design/sandwiches/_view/sandwiches'
      options: #{
        'type' -> 'GET'.
	'dataType' ->'jsonp'
      }.
button := '#sayHello' asJQuery.
button click: [button after: '<p>' , result name , '</p>'].
!

oldbegin
"Makes me say hello to the user."

| msg button | 
msg := 'Hello worldz!!'.
button := '#sayHello' asJQuery.
button click: [button after: '<p>' , msg , '</p>'].
! !

