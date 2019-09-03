function checkAge(age) {
    return (age > 18) || confirm('Did your parents allow you?');
}

function min(a, b) {
    return (a < b) ? a : b;
}

function pow(x, n) {
    let answer = x;
    for (let i = 1; i < n; i++) {
        answer *= x;
    }
    return answer;
}

console.log(pow(5, 2));