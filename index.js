console.log(2 == '2')  //true 나옴
console.log(2 === '2')  //false 나옴
// 자료의 타입까지 동일해야 함

if (1 == 1) {
    console.log('안녕')
}

function game(num) {
    if ( num % 3 == 0) {
        console.log('박수');
    } else{
        console.log('통과');
    }
}

game();
// 공백에 숫자 입력 시 F12 콘솔창에서 통과 또는 박수 라는 문자 출력.

function gamePlus(n) {
    if(n % 9 == 0) {
        console.log('박수x2');
    } else if(n % 3 == 0) {
        console.log('박수');
    } else{
        console.log('통과');
    }
}

gamePlus(17)

// 공인중개사 시험점수를 입력하면 합격인지 알려주는 함수를 만들어봅시다.
// 공인중개사 1차 시험은 개론, 민법 2개 과목이 있습니다.
// 과목마다 100점 만점이지만 두 과목 합해서 120점 이상이면 합격시켜줍니다. 
// 다만 한 과목이 40점 미만이면 과락으로 불합격됩니다.  
// 과목 점수 2개를 파라미터로 입력하면 합격인지 불합격인지 여부를 콘솔창에 출력하는 함수를 만들어보십시오. 
function test(n, n2) {
    if(n < 40 || n2 < 40){
        console.log('불합격(과락)')
    } else if(n+n2 < 120){
        console.log('불합격(120점 미만)')
    } else {
        console.log('합격')
    }
}

test(100, 39)