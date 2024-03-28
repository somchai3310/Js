console.group('----while loop----')

let count = 1;
while (count <= 5) {
    console.log('hello world');
    if (count == 4) {
        break;
    }
    count++;
}
console.groupEnd();

console.group('----while loop----')

for (let i = 0; i < 5 ; i++) {
    console.log('hello for');
}

console.groupEnd();

let dow = 1;
do {
    console.log(dow);
    dow++;
} while (dow <= 5);