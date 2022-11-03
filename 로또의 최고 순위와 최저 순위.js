// 로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다. 아래는 로또의 순위를 정하는 방식입니다.

// 순위	당첨 내용
// 1	6개 번호가 모두 일치
// 2	5개 번호가 일치
// 3	4개 번호가 일치
// 4	3개 번호가 일치
// 5	2개 번호가 일치
// 6(낙첨)	그 외

// 로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 
// 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다. 
// 당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
// 알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다. 
// 당첨 번호 6개가 31, 10, 45, 1, 6, 19라면, 당첨 가능한 최고 순위와 최저 순위의 한 예는 아래와 같습니다.

function sortNum(nums) {
    switch(nums) {
        case 6:
            return 1
            break;
        case 5:
            return 2
            break;
        case 4:
            return 3
            break;
        case 3:
            return 4
            break;
        case 2:
            return 5
            break;
        default:
            return 6
    }
}

function solution(lottos, win_nums) {
    let bestAnswer = []
    let lowAnswer = []
    lottos.forEach((element1) => {
        if(element1 === 0) {
            bestAnswer.push(element1)
        }
        win_nums.forEach((element2) => {
            if(element1 === element2) {
                bestAnswer.push(element1)
            }
        })
    })
    bestAnswer.forEach((element1) => {
        if(element1 !== 0) {
            lowAnswer.push(element1)
        }
    })
    return [sortNum(bestAnswer.length), sortNum(lowAnswer.length)]
}