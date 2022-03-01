/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
 const main = () => {

    const N = lines[0]
    let amari3 = N % 3
    let amari5 = N % 5
    if(amari3==0 && amari5 ==0){
        console.log('FizZBuzz')
    }else if(amari3 == 0){
        console.log('Fizz')
    }else if(amari5 == 0){
        console.log('Buzz')
    }

}

/**
 * 標準入出力のための処理
 */
const reader = require('readline')

process.stdin.resume()
process.stdin.setEncoding('utf8')
const rl = reader.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines = []
rl.on('line', (line) => {
    lines.push(line)
})

rl.on('close', main)