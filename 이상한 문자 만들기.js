// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

function solution(s) {
    let convertStr = s.split(" ")
    let newStr = ''
    let result = []
    convertStr.forEach((element1) => {
        for(let i = 0; i < element1.length; i++) {
            newStr += i % 2 === 0 ? element1[i].toUpperCase() : element1[i].toLowerCase()
        }
        result.push(newStr)
        newStr = ""
    })
    return result.join(" ")
}