"use strict";
exports.__esModule = true;
exports.Node1 = void 0;
var Node1 = /** @class */ (function () {
    function Node1(data) {
        this.next = null;
        this.data = data;
    }
    Node1.prototype.readData = function () {
        return this.data;
    };
    return Node1;
}());
exports.Node1 = Node1;
