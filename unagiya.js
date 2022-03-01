/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
const main = () => {

    const N1 = lines[0].split(' ')
    const numberOfSeats = Number(N1[0])
    const numberOfGroups = Number(N1[1])
    const seatArray = new Array(numberOfSeats).fill(1)
    let count = 0

    for (i = 1; i < (numberOfGroups + 2); i++) {
        const tempLine = lines[i].split(' ')
        console.log(tempLine)
        let numberOfTeammates = Number(tempLine[0])
        let seatTag = Number(tempLine[1])
        let tempCount = 0
        for (j = seatTag; j < (seatTag + numberOfTeammates); j++) {
            let seatTagFinal = j % numberOfSeats
            console.log(seatTagFinal)
            if (seatArray[seatTagFinal] == 1) {
                tempCount += 1
            }
            if (tempCount == numberOfTeammates) {
                seatArray.fill(2, seatTag-1, seatTagFinal-1)
                count += numberOfTeammates
            }
        }
    }

    console.log(count)

}

console.log("start")
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