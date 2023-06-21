import {isEven} from '@test/is-even';
import {isTen} from '@test/is-even/dist/lib/isTen'

export const isOdd = (x: number) => !isEven(x);
// 在当前目录执行nodemon index.ts
// 查看is-even执行build前后的区别
console.log("🚀 ~ file: index.ts:4 ~ isOdd:", isOdd(1))
console.log("🚀 ~ file: index.ts:3 ~ isTen:", isTen(10))
