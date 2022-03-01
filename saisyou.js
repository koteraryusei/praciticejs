/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
 const main = () => {

    const N1 = lines[0]
    const N2 = lines[1]
    const N3 = lines[2]
    const N4 = lines[3]
    const N5 = lines[4]

    min = Math.min(N1,N2,N3,N4,N5) 

    // 空行
    console.log(min)
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