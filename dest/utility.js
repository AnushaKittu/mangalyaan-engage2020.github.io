"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* -------- Queue ------- */
var Queue = exports.Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.items = new Array();
  }

  _createClass(Queue, [{
    key: "dequeue",
    value: function dequeue() {
      return this.items.shift();
    }
  }, {
    key: "enqueue",
    value: function enqueue(element) {
      this.items.push(element);
      return;
    }
  }, {
    key: "empty",
    value: function empty() {
      return this.items.length === 0;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.items = new Array();
      return;
    }
  }]);

  return Queue;
}();

/*------ Min Heap ----- */

var minHeap = exports.minHeap = function () {
  function minHeap() {
    _classCallCheck(this, minHeap);

    this.heap = [];
  }

  _createClass(minHeap, [{
    key: "isEmpty",
    value: function isEmpty() {
      return this.heap.length == 0;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.heap = [];
      return;
    }
  }, {
    key: "getMin",
    value: function getMin() {
      if (this.isEmpty()) {
        return null;
      }
      var min = this.heap[0];
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap[this.heap.length - 1] = min;
      this.heap.pop();
      if (!this.isEmpty()) {
        this.siftDown(0);
      }
      return min;
    }
  }, {
    key: "push",
    value: function push(item) {
      this.heap.push(item);
      this.siftUp(this.heap.length - 1);
      return;
    }
  }, {
    key: "parent",
    value: function parent(index) {
      if (index == 0) {
        return null;
      }
      return Math.floor((index - 1) / 2);
    }
  }, {
    key: "children",
    value: function children(index) {
      return [index * 2 + 1, index * 2 + 2];
    }
  }, {
    key: "siftDown",
    value: function siftDown(index) {
      var children = this.children(index);
      var leftChildValid = children[0] <= this.heap.length - 1;
      var rightChildValid = children[1] <= this.heap.length - 1;
      var newIndex = index;
      if (leftChildValid && this.heap[newIndex][0] > this.heap[children[0]][0]) {
        newIndex = children[0];
      }
      if (rightChildValid && this.heap[newIndex][0] > this.heap[children[1]][0]) {
        newIndex = children[1];
      }
      // No sifting down needed
      if (newIndex === index) {
        return;
      }
      var val = this.heap[index];
      this.heap[index] = this.heap[newIndex];
      this.heap[newIndex] = val;
      this.siftDown(newIndex);
      return;
    }
  }, {
    key: "siftUp",
    value: function siftUp(index) {
      var parent = this.parent(index);
      if (parent !== null && this.heap[index][0] < this.heap[parent][0]) {
        var val = this.heap[index];
        this.heap[index] = this.heap[parent];
        this.heap[parent] = val;
        this.siftUp(parent);
      }
      return;
    }
  }]);

  return minHeap;
}();