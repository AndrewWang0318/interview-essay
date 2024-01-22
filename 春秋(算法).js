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