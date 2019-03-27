'use strict'
function Queue() {
    //私有变量items.用于记录数组
    var items = [];
    //入队
    this.enqueue = function (value) {
        items.push(value);
    }
    //出队 在头部弹出
    this.dequeue = function () {
        return items.shift();
    }
    //查看第一个元素
    this.front = function () {
        return items[0];
    }
    //查看队列是否为空
    this.isEmpty = function () {
        return items.length > 0 ? false :true;
    }
    //查看队列的长度
    this.size = function () {
        return items.length;
    }
    //将数组转化为字符串
    this.toString = function () {
        return items.toString();
    }

};
var q = new Queue();
q.enqueue(2);
q.enqueue(3);
console.log(q.front());
