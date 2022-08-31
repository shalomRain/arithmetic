// pushed 一直push 直到 popped的第一个值
var validateStackSequences = function(pushed, popped) {
  const list = []
  pushed.forEach(item => {
      // 往栈里推
    list.push(item)
    popMethods(list, popped)
  });
  return list.length === 0
};

const popMethods = (list, popped) => {
  if(list.length) {
    if(list[list.length - 1] === popped[0]) {
      list.pop()
      popped.shift()
      popMethods(list, popped)
    }
  }
}
validateStackSequences([1,2,3,4,5], [4,3,5,2,1])