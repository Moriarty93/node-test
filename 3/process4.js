

//放在下一个队列的前面
setImmediate(() => {
  console.log('setImmediate');
});

//放在当前队列和下个队列之间
setTimeout(() => {
  console.log('timeOut')
}, 0);


//放在当前队列的最后一个
process.nextTick(() => {
  console.log('nextTick');
});