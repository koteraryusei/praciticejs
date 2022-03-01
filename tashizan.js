/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
 const main = () => {

    const Nn = lines[0].split(' ')
    const N1 = Number(Nn[0])
    const N2 = Number(Nn[1])
    N1N2 = N1 + N2 

    // 空行
    console.log(N1N2)
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