function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
// - operator on number type
var NUMBER;
var NUMBER1 = [
    1,
    2
];
function foo() {
    return 1;
}
var A = /*#__PURE__*/ function() {
    "use strict";
    function A() {
        _classCallCheck(this, A);
    }
    _createClass(A, null, [
        {
            key: "foo",
            value: function foo() {
                return 1;
            }
        }
    ]);
    return A;
}();
var M;
(function(M1) {
    var n;
    M1.n = n;
})(M || (M = {}));
var objA = new A();
// number type var
var ResultIsNumber1 = -NUMBER;
var ResultIsNumber2 = -NUMBER1;
// number type literal
var ResultIsNumber3 = -1;
var ResultIsNumber4 = -{
    x: 1,
    y: 2
};
var ResultIsNumber5 = -{
    x: 1,
    y: function(n) {
        return n;
    }
};
// number type expressions
var ResultIsNumber6 = -objA.a;
var ResultIsNumber7 = -M.n;
var ResultIsNumber8 = -NUMBER1[0];
var ResultIsNumber9 = -foo();
var ResultIsNumber10 = -A.foo();
var ResultIsNumber11 = -(NUMBER - NUMBER);
// miss assignment operators
-1;
-NUMBER;
-NUMBER1;
-foo();
-objA.a;
-M.n;
-objA.a, M.n;
