// 数组
const arr = new Array(7).fill(1);
console.log(arr)
// 矩阵(二维数组)
const arr2 = [
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4]
]
// 栈
/* 只允许从尾部添加元素,只允许从尾部取出元素 */
const stack = new Array();
stack.push('货物A');
stack.push('货物B');
stack.push('货物C');
stack.push('货物D');
while (stack.length > 0) {
  console.log(stack[stack.length - 1] + ' 已卖出')
  stack.pop();
}
// 队列
/* 只允许从尾部添加元素,只允许从头部添加元素 */
const queue = [];
queue.push('顾客 1')
queue.push('顾客 2')
queue.push('顾客 3')
queue.push('顾客 4')
while(queue.length > 0) {
  console.log(queue[0] + ' 已取餐')
  queue.shift()
}

// 链表
/* 链表的插入/删除效率高，但访问效率低，数组的访问效率高，但插入效率低 */
function ListNode(val) {
  this.val = val
  this.next = null
}
const head = new ListNode()
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3)

// 添加链表元素
head.next = node1
node1.next = node2

// 插入链表元素：将node3插入到node1与node2之间, 重心在目标节点的前驱节点
node3.next = node1.next;
node1.next = node3;

// 删除链表元素node3；只需要遍历时可以跳过目标元素即可
node1.next = node3.next

// 遍历链表,访问链表
let target = head
const idx = 2
for (let i = 0; i < idx; i++) {
  target = target.next
}

console.log(target.val)
