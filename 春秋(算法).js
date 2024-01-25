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
function ListNode(val=null) {
  this.val = val;
  this.next = null;
}
const head = new ListNode()
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3)

/* 添加链表元素 */
head.next = node1
node1.next = node2

/* 插入链表元素：将node3插入到node1与node2之间, 重心在目标节点的前驱节点 */
node3.next = node1.next;
node1.next = node3;

/*  删除链表元素node3；只需要遍历时可以跳过目标元素即可 (将目标元素的前驱元素的next等于 后驱元素的next) */
node1.next = node3.next

/*  遍历链表,访问链表 */
let target = head;
const idx = 2;
for (let i = 0; i < idx; i++) {
  target = target.next
}
console.log(target)


/* 树由根节点 节点 叶节点 组成；从叶节点到根节点的层级为高度,一个节点开叉多少个子树被称为度 */

// 二叉树
/* 二叉树可以没有根节点作为一颗空树存在；
  否则，它由根节点和左子树以及右子树连结，且左子树和右子树都是二叉树，是不能调换的
*/
function TreeNode(val = null){
  this.val = val;
  this.left = this.right = null;
}
const tree = new TreeNode('A');

const temp_tree = {
  val: 'A',
  left:  {
    val: 'B',
    left:  { val: 'D', right: null, left: null },
    right:  { val: 'E', right: null, left: null }
  },
  right:  {
    val: 'C',
    left: null,
    right:  { val: 'F', right: null, left: null }
  }
}
console.log(tree)

// 中序遍历
// 所有遍历函数的入参都是树的根结点对象
function preorder(root) {
  // 递归边界，root 为空
  if(!root) {
    return 
  }
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val)  
  // 递归遍历左子树 
  preorder(root.left)  
  // 递归遍历右子树  
  preorder(root.right)
}
console.log(temp_tree);
preorder(temp_tree);