"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirstNode1 = function (data) {
        var node1 = new Node_1.Node1(data);
        node1.next = this.head;
        this.head = node1;
        if (!this.tail) {
            this.tail = node1;
        }
        this.size++;
    };
    LinkedList.prototype.insertLastNode = function (data) {
        if (!this.head) {
            this.insertFirstNode1(data);
        }
        else {
            var node1 = new Node_1.Node1(data);
            this.tail.next = node1;
            this.tail = node1;
            this.size++;
        }
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.readList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
