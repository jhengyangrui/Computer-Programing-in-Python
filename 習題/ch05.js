//ch5 0101
function average0501(...numbers0501) {
    let sum0501 = numbers0501.reduce((acc0501, num0501) => acc0501 + num0501, 0);
    return sum0501 / numbers0501.length;
}

// 示例调用:
console.log(average0501(1, 2, 3, 4, 5));  // 输出: 3

//ch5 0102
function isPrime0502(num0502) {
    if (num0502 <= 1) return false;
    for (let i0502 = 2; i0502 <= Math.sqrt(num0502); i0502++) {
        if (num0502 % i0502 === 0) return false;
    }
    return true;
}

// 示例调用:
console.log(isPrime0502(29));  // 输出: true

//ch5 0103
function toBinaryString0503(num0503) {
    return num0503.toString(2);
}

// 示例调用:
console.log(toBinaryString0503(10));  // 输出: "1010"

//ch5 0104
function findMinMax0504(array0504) {
    let min0504 = Math.min(...array0504);
    let max0504 = Math.max(...array0504);
    return { min0504, max0504 };
}

// 示例调用:
let array0504 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findMinMax0504(array0504));  // 输出: { min0504: 1, max0504: 9 }

//ch5 0201
function fibonacci0501(n0501) {
    if (n0501 <= 1) return n0501;
    return fibonacci0501(n0501 - 1) + fibonacci0501(n0501 - 2);
}

// 示例调用:
let n0501 = 10;
console.log(fibonacci0501(n0501));  // 输出: 55

//ch5 0202
function gcd0502(a0502, b0502) {
    if (!b0502) {
        return a0502;
    }
    return gcd0502(b0502, a0502 % b0502);
}

// 示例调用:
let a0502 = 48;
let b0502 = 18;
console.log(gcd0502(a0502, b0502));  // 输出: 6


