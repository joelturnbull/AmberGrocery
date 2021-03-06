smalltalk.addClass('Counter', smalltalk.SmackboneView, ['count', 'header'], 'Examples');
smalltalk.addMethod(
'_increase',
smalltalk.method({
selector: 'increase',
fn: function (){
var self=this;
self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;}
}),
smalltalk.Counter);

smalltalk.addMethod(
'_decrease',
smalltalk.method({
selector: 'decrease',
fn: function (){
var self=this;
self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]));
return self;}
}),
smalltalk.Counter);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
self['@count']=(0);
return self;}
}),
smalltalk.Counter);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
self['@header']=(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(self['@count'], "_asString", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_h1", []));
(function($rec){smalltalk.send($rec, "_with_", [unescape("++")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_increase", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", [unescape("--")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_decrease", []);})]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.Counter);



smalltalk.addClass('Tetris', smalltalk.Widget, ['renderingContext', 'timer', 'speed', 'score', 'rows', 'movingPiece'], 'Examples');
smalltalk.addMethod(
'_width',
smalltalk.method({
selector: 'width',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_width", []);
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_height", []);
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_squares',
smalltalk.method({
selector: 'squares',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_squares", []);
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_gluePiece_',
smalltalk.method({
selector: 'gluePiece:',
fn: function (aPiece){
var self=this;
smalltalk.send(aPiece, "_glueOn_", [self]);
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_rows',
smalltalk.method({
selector: 'rows',
fn: function (){
var self=this;
return self['@rows'];
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_addRow_',
smalltalk.method({
selector: 'addRow:',
fn: function (aCollection){
var self=this;
smalltalk.send(smalltalk.send(self, "_rows", []), "_add_", [aCollection]);
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_startNewGame',
smalltalk.method({
selector: 'startNewGame',
fn: function (){
var self=this;
smalltalk.send(self, "_newGame", []);
(($receiver = self['@timer']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@timer'], "_clearInterval", []);})() : nil;
self['@timer']=smalltalk.send((function(){return smalltalk.send(self, "_nextStep", []);}), "_valueWithInterval_", [self['@speed']]);
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_nextStep',
smalltalk.method({
selector: 'nextStep',
fn: function (){
var self=this;
(($receiver = self['@movingPiece']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_newPiece", []);})() : $receiver;
((($receiver = smalltalk.send(self['@movingPiece'], "_canMoveIn_", [self])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@movingPiece'], "_position_", [((($receiver = smalltalk.send(self['@movingPiece'], "_position", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send((0), "__at", [(1)]) : smalltalk.send($receiver, "__plus", [smalltalk.send((0), "__at", [(1)])]))]);})() : (function(){return smalltalk.send(self, "_newPiece", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@movingPiece'], "_position_", [((($receiver = smalltalk.send(self['@movingPiece'], "_position", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send((0), "__at", [(1)]) : smalltalk.send($receiver, "__plus", [smalltalk.send((0), "__at", [(1)])]))]);}), (function(){return smalltalk.send(self, "_newPiece", []);})]));
smalltalk.send(self, "_redraw", []);
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_redraw',
smalltalk.method({
selector: 'redraw',
fn: function (){
var self=this;
smalltalk.send(self['@renderingContext'], "_clearRect_y_to_y_", [(0), smalltalk.send(self, "_width", []), (0), smalltalk.send(self, "_height", [])]);
(function($rec){smalltalk.send($rec, "_drawMap", []);return smalltalk.send($rec, "_drawPiece", []);})(self);
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_drawMap',
smalltalk.method({
selector: 'drawMap',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_fillStyle_", [unescape("%23fafafa")]);return smalltalk.send($rec, "_fillRect_y_to_y_", [(0), (0), smalltalk.send(self, "_width", []), smalltalk.send(self, "_height", [])]);})(self['@renderingContext']);
(function($rec){smalltalk.send($rec, "_lineWidth_", [(0.5)]);return smalltalk.send($rec, "_strokeStyle_", [unescape("%23999")]);})(self['@renderingContext']);
smalltalk.send((0), "_to_do_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_squares", []), "_x", []), (function(each){var x=nil;
x=((($receiver = each).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(self, "_class", []), "_squareSize", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(self, "_class", []), "_squareSize", [])]));return smalltalk.send(self, "_drawLineFrom_to_", [smalltalk.send(x, "__at", [(0)]), smalltalk.send(x, "__at", [smalltalk.send(self, "_height", [])])]);})]);
smalltalk.send((0), "_to_do_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_squares", []), "_y", []), (function(each){var y=nil;
y=((($receiver = each).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(self, "_class", []), "_squareSize", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(self, "_class", []), "_squareSize", [])]));return smalltalk.send(self, "_drawLineFrom_to_", [smalltalk.send((0), "__at", [y]), smalltalk.send(smalltalk.send(self, "_width", []), "__at", [y])]);})]);
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_drawLineFrom_to_',
smalltalk.method({
selector: 'drawLineFrom:to:',
fn: function (aPoint, anotherPoint){
var self=this;
(function($rec){smalltalk.send($rec, "_beginPath", []);smalltalk.send($rec, "_moveTo_y_", [smalltalk.send(aPoint, "_x", []), smalltalk.send(aPoint, "_y", [])]);smalltalk.send($rec, "_lineTo_y_", [smalltalk.send(anotherPoint, "_x", []), smalltalk.send(anotherPoint, "_y", [])]);return smalltalk.send($rec, "_stroke", []);})(self['@renderingContext']);
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_newGame',
smalltalk.method({
selector: 'newGame',
fn: function (){
var self=this;
self['@rows']=[];
self['@movingPiece']=nil;
self['@speed']=(200);
self['@score']=(0);
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_newPiece',
smalltalk.method({
selector: 'newPiece',
fn: function (){
var self=this;
self['@movingPiece']=smalltalk.send((smalltalk.TetrisPiece || TetrisPiece), "_atRandom", []);
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_drawRows',
smalltalk.method({
selector: 'drawRows',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_rows", []), "_do_", [(function(each){return nil;})]);
(($receiver = self['@movingPiece']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@movingPiece'], "_drawOn_", [self['@renderingContext']]);})() : nil;
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_drawPiece',
smalltalk.method({
selector: 'drawPiece',
fn: function (){
var self=this;
(($receiver = self['@movingPiece']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@movingPiece'], "_drawOn_", [self['@renderingContext']]);})() : nil;
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
smalltalk.send(self, "_newGame", []);
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["tetris"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_h3", []), "_with_", ["Tetris"]);smalltalk.send(self, "_renderCanvasOn_", [html]);return smalltalk.send(self, "_renderButtonsOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_renderCanvasOn_',
smalltalk.method({
selector: 'renderCanvasOn:',
fn: function (html){
var self=this;
var canvas=nil;
canvas=smalltalk.send(html, "_canvas", []);
smalltalk.send(canvas, "_at_put_", ["width", smalltalk.send(smalltalk.send(self, "_width", []), "_asString", [])]);
smalltalk.send(canvas, "_at_put_", ["height", smalltalk.send(smalltalk.send(self, "_height", []), "_asString", [])]);
self['@renderingContext']=smalltalk.send(smalltalk.send(canvas, "_element", []), "_getContext_", ["2d"]);
smalltalk.send(self, "_redraw", []);
return self;}
}),
smalltalk.Tetris);

smalltalk.addMethod(
'_renderButtonsOn_',
smalltalk.method({
selector: 'renderButtonsOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["tetris_buttons"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["New game"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_startNewGame", []);})]);})(smalltalk.send(html, "_button", []));return (function($rec){smalltalk.send($rec, "_with_", [unescape("play/pause")]);return smalltalk.send($rec, "_onClick_", [(function(){return nil;})]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.Tetris);


smalltalk.addMethod(
'_squareSize',
smalltalk.method({
selector: 'squareSize',
fn: function (){
var self=this;
return (22);
return self;}
}),
smalltalk.Tetris.klass);

smalltalk.addMethod(
'_width',
smalltalk.method({
selector: 'width',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_squareSize", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(self, "_squares", []), "_x", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(self, "_squares", []), "_x", [])]));
return self;}
}),
smalltalk.Tetris.klass);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_squareSize", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(self, "_squares", []), "_y", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(self, "_squares", []), "_y", [])]));
return self;}
}),
smalltalk.Tetris.klass);

smalltalk.addMethod(
'_squares',
smalltalk.method({
selector: 'squares',
fn: function (){
var self=this;
return smalltalk.send((10), "__at", [(15)]);
return self;}
}),
smalltalk.Tetris.klass);


smalltalk.addClass('TetrisPiece', smalltalk.Widget, ['rotation', 'position'], 'Examples');
smalltalk.addMethod(
'_rotation',
smalltalk.method({
selector: 'rotation',
fn: function (){
var self=this;
return (($receiver = self['@rotation']) == nil || $receiver == undefined) ? (function(){return self['@rotation']=(1);})() : $receiver;
return self;}
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_rotation_',
smalltalk.method({
selector: 'rotation:',
fn: function (aNumber){
var self=this;
self['@rotation']=aNumber;
return self;}
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_position',
smalltalk.method({
selector: 'position',
fn: function (){
var self=this;
return (($receiver = self['@position']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(((($receiver = ((($receiver = smalltalk.send(smalltalk.send((smalltalk.Tetris || Tetris), "_squares", []), "_x", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]))).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), "__at", [(0)]);})() : $receiver;
return self;}
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_position_',
smalltalk.method({
selector: 'position:',
fn: function (aPoint){
var self=this;
return self['@position']=aPoint;
return self;}
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_bounds',
smalltalk.method({
selector: 'bounds',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_color',
smalltalk.method({
selector: 'color',
fn: function (){
var self=this;
return unescape("%23afa");
return self;}
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
fn: function (){
var self=this;
return (2);
return self;}
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_drawOn_',
smalltalk.method({
selector: 'drawOn:',
fn: function (aRenderingContext){
var self=this;
smalltalk.send(aRenderingContext, "_fillStyle_", [smalltalk.send(self, "_color", [])]);
smalltalk.send(smalltalk.send(self, "_bounds", []), "_do_", [(function(each){var from=nil;
var to=nil;
from=((($receiver = ((($receiver = each).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_position", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_position", [])]))).klass === smalltalk.Number) ? $receiver *smalltalk.send((smalltalk.Tetris || Tetris), "_squareSize", []) : smalltalk.send($receiver, "__star", [smalltalk.send((smalltalk.Tetris || Tetris), "_squareSize", [])]));to=((($receiver = smalltalk.send((1), "__at", [(1)])).klass === smalltalk.Number) ? $receiver *smalltalk.send((smalltalk.Tetris || Tetris), "_squareSize", []) : smalltalk.send($receiver, "__star", [smalltalk.send((smalltalk.Tetris || Tetris), "_squareSize", [])]));return (function($rec){smalltalk.send($rec, "_fillRect_y_to_y_", [smalltalk.send(from, "_x", []), smalltalk.send(from, "_y", []), smalltalk.send(to, "_x", []), smalltalk.send(to, "_y", [])]);smalltalk.send($rec, "_strokeStyle_", [unescape("%23999")]);smalltalk.send($rec, "_lineWidth_", [(2)]);return smalltalk.send($rec, "_strokeRect_y_to_y_", [smalltalk.send(from, "_x", []), smalltalk.send(from, "_y", []), smalltalk.send(to, "_x", []), smalltalk.send(to, "_y", [])]);})(aRenderingContext);})]);
return self;}
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_canMove',
smalltalk.method({
selector: 'canMove',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(self, "_position", []), "_y", [])).klass === smalltalk.Number) ? $receiver <((($receiver = smalltalk.send(smalltalk.send((smalltalk.Tetris || Tetris), "_squares", []), "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(self, "_height", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(self, "_height", [])])) : smalltalk.send($receiver, "__lt", [((($receiver = smalltalk.send(smalltalk.send((smalltalk.Tetris || Tetris), "_squares", []), "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(self, "_height", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(self, "_height", [])]))]));
return self;}
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_canMoveIn_',
smalltalk.method({
selector: 'canMoveIn:',
fn: function (aTetris){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(self, "_position", []), "_y", [])).klass === smalltalk.Number) ? $receiver <((($receiver = smalltalk.send(smalltalk.send(aTetris, "_squares", []), "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(self, "_height", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(self, "_height", [])])) : smalltalk.send($receiver, "__lt", [((($receiver = smalltalk.send(smalltalk.send(aTetris, "_squares", []), "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(self, "_height", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(self, "_height", [])]))]));
return self;}
}),
smalltalk.TetrisPiece);


smalltalk.addMethod(
'_atRandom',
smalltalk.method({
selector: 'atRandom',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_subclasses", []), "_at_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_subclasses", []), "_size", []), "_atRandom", [])]), "_new", []);
return self;}
}),
smalltalk.TetrisPiece.klass);


smalltalk.addClass('TetrisPieceO', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
'_bounds',
smalltalk.method({
selector: 'bounds',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(1)])]);smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(1)])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;}
}),
smalltalk.TetrisPieceO);



smalltalk.addClass('TetrisPieceL', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
'_bounds',
smalltalk.method({
selector: 'bounds',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(1)])]);smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(2)])]);smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(2)])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;}
}),
smalltalk.TetrisPieceL);

smalltalk.addMethod(
'_color',
smalltalk.method({
selector: 'color',
fn: function (){
var self=this;
return unescape("%23ffa");
return self;}
}),
smalltalk.TetrisPieceL);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
fn: function (){
var self=this;
return (3);
return self;}
}),
smalltalk.TetrisPieceL);



smalltalk.addClass('TetrisPieceJ', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
'_color',
smalltalk.method({
selector: 'color',
fn: function (){
var self=this;
return unescape("%23aaf");
return self;}
}),
smalltalk.TetrisPieceJ);

smalltalk.addMethod(
'_bounds',
smalltalk.method({
selector: 'bounds',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(1)])]);smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(2)])]);smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(2)])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;}
}),
smalltalk.TetrisPieceJ);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
fn: function (){
var self=this;
return (3);
return self;}
}),
smalltalk.TetrisPieceJ);



smalltalk.addClass('TetrisPieceI', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
'_color',
smalltalk.method({
selector: 'color',
fn: function (){
var self=this;
return unescape("%23faa");
return self;}
}),
smalltalk.TetrisPieceI);

smalltalk.addMethod(
'_bounds',
smalltalk.method({
selector: 'bounds',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(1)])]);smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(2)])]);smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(3)])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;}
}),
smalltalk.TetrisPieceI);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
fn: function (){
var self=this;
return (4);
return self;}
}),
smalltalk.TetrisPieceI);



smalltalk.addClass('TetrisPieceT', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
'_bounds',
smalltalk.method({
selector: 'bounds',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((2), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(1)])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;}
}),
smalltalk.TetrisPieceT);

smalltalk.addMethod(
'_color',
smalltalk.method({
selector: 'color',
fn: function (){
var self=this;
return unescape("%23aaf");
return self;}
}),
smalltalk.TetrisPieceT);



