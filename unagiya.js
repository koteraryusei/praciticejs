/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
 const main = () => {

    let count = 0
    const N1 = lines[0].split(' ')
    const numberOfSeats = N1[0]
    const numberOfGroups = N1[1]
    let seatArray = new Array( n );

    for(i=1 ,i < numberOfGroups+2 ,i++){   
        seatTag = lines[i][1]
        numberOfTeammates = lines[i][0]
        for (seatTag, seatTag<=seatTag+numberOfTeammates, seatTag++){
            if(seatArray[seatTag])
        }
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