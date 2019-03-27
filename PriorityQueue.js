//优先队列的实现
function PriorityQueue() {
    var items = [];
    //利用构造器函数创建队列元素
    function QueueElement(element,prioroty) {
        this.element = element;
        this.priority = prioroty;
    };
    //查看队列是否为空
    this.isEmpty = function () {
        return items.length > 0 ? false :true;
    }
    //入队操作
    this.enqueue = function (element,priority) {
        var queueElement = new QueueElement(element,priority);
        //空的时候直接插入
       if(this.isEmpty()){
           items.push(queueElement);
       } else{
           var added = false;
           for(var i = 0; i < items.length;i++){
               if(queueElement.priority < items[i].priority){
                   //数字越小，排在越前面，所以此时已经到了最小值，排在items[i]的前面
                   items.splice(i,0,queueElement); //在第i个位置开始，删除0个元素，插入一个元素
                   added = true;
                   break;
               }
           }
           //否则在最后插入
           if(!added){
               items.push(queueElement);
           }
       }
    }
    this.toString = function () {
        var string = '';
        for (var i = 0; i < items.length; i++) {
            string += items[i].element + '-' + items[i].priority + (items.length - i > 1 ? ',' : '');
        }
        return string;
    };
}
var priorityQueue = new PriorityQueue();
priorityQueue.enqueue('张三',1);
priorityQueue.enqueue('李四',1);
priorityQueue.enqueue('王五',3);
console.log(priorityQueue.toString());