//链表的实现
function LinkedList() {
    //链表的私有变量是一个指针head 私有变量length记录长度
    //私有构造器函数node来构造节点
    var Node= function (element) {
        this.element = element;
        this.next = null;
    };
    var length = 0;
    var head = null;
    /*链表应该长这样
    {
    element:15
    next:{
    element:10
    next:null
    },
    next始终指向下一个节点
     */ //append方法的添加
    this.append = function (element) {
        var newNode = new Node(element);
        var current;
        //如果当前head为null的话 就直接赋予 否则就
        //进行遍历，直到最后一个
        if(head == null)
            head = newNode;
        else {
            current = head;
            while (current.next != null)
                current = current.next;

            current.next = newNode;
        }
        //长度+1 head是一个对象，所以是引用类型，改变了current就相当于改变了head
        length++;
    },
        //删除指定位置的元素 注意数组的下标是从0开始的
        this.removeAt = function (index) {
            //前驱找到 后驱找到 随后凭借
            var i = 0;
            var temp = head;
            if (index === 0) {
                var now = head;
                head = current.next;

            } else {
                while (i < index - 1) {
                    temp = temp.next;
                    i++;
                }
                //当前要删除的节点
                var now = temp.next;
                var after = now.next;
                //进行删除操作 中间一个置为0
                temp.next = after;
            }
            length--;
            return now.element;
        }
    //增加指定位置的元素 注意数组的下标是从0开始的
   this.insertAtIndex = function (index,element) {
        var node = new Node(element);
        if(index == 0) {
            node.next = (head);
            head = node;
        }else{
            var i = 0;
            var temp = head;
            while(i < index - 1){
                temp = temp.next;
                i++;
            }
            node.next = temp.next;
            temp.next = node;
        }
        length++;
        return this.toString();

   }

        //toString字符串，将链表转化为字符串输出
    this.toString = function () {
        var current = head;
        var resStr = '';
        while (current != null) {
            resStr += current.element + (current.next != null ? ',' : '');
            current = current.next;

        }
        return resStr;
    }
};
//这里创建的是不带头结点的
var newLinkList = new LinkedList();
newLinkList.append(1);
newLinkList.append(2);
newLinkList.append(5);
newLinkList.append(4);
console.log(newLinkList.toString());
console.log(newLinkList.removeAt(2));
console.log(newLinkList.toString());
console.log(newLinkList.insertAtIndex(0,10));