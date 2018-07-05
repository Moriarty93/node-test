
//Buffer 用于处理二进制数据流
//实例类似整数组，大小固定
// C++ 代码在V8堆外分配物理内存

console.log(Buffer.alloc(10));

console.log(Buffer.alloc(20));

console.log(Buffer.alloc(5, 2));

console.log(Buffer.allocUnsafe(5, 2));

console.log(Buffer.from([2, 3, 6]));

console.log(Buffer.from('test'));

console.log(Buffer.from('test', 'base64'));


