// package definition
smalltalk.addPackage('HelloApp', []);

// class definition
smalltalk.addClass('Hello', smalltalk.Object, [], 'HelloApp');

// method definition
smalltalk.addMethod(
unescape('_begin'),smalltalk.method({
    selector: unescape('begin'),

    // category assignment 
    category: 'not yet classified',
    fn: function (){

        // local variable definition
        var self=this;
        var msg=nil;
        var button=nil;

        // local variable initialization
        msg=unescape("Hello%20world%21");

        // jquery selector initialization 
        button=smalltalk.send(
          unescape("%23sayHello"), 
          "_asJQuery", []
        );

    // send messages to objects with parameters ( smalltalk )

    smalltalk.send(
      button,         // object ( jQuery selector )
      "_click_",      // message
      [(function () { // parameter ( a block )
        return smalltalk.send(
          button,          // object ( jQ selector )
          "_after_",       // message 
          [smalltalk.send( // parameter 
            smalltalk.send( 
              unescape("%3Cp%3E"), // object ( '</p>' )
              "__comma",           // message ( ',' )
              [msg]                // parameter ( 'Hello World' )
              ),         // object ( '<p> Hello World!' )
            "__comma", // message ( ',' )
            [unescape("%3C/p%3E")])] // parameter ( '</p>' )
        );
      })]
    );

    return self;
    },

    // begin takes no arguments
    args: [],

    source: unescape('begin%0A%22Makes%20me%20say%20hello%20to%20the%20user.%22%0A%0A%7C%20msg%20button%20%7C%0Amsg%20%3A%3D%20%27Hello%20world%21%27.%0Abutton%20%3A%3D%20%27%23sayHello%27%20asJQuery.%0Abutton%20click%3A%20%5Bbutton%20after%3A%20%27%3Cp%3E%27%20%2C%20msg%20%2C%20%27%3C/p%3E%27%5D.'),


    // why are the smalltalk messaage representations here?
    // interesting?
    messageSends: ["asJQuery", "click:", "after:", unescape("%2C")],

    // inheritance?
    referencedClasses: []

// add methods to class Hello
}), smalltalk.Hello);




