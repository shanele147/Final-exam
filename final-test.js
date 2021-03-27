/* Cho n số nguyên liên tiếp từ 0 đến n-1 được biểu diễn trên một vòng tròn, 
khoảng cách giữa các số bằng nhau(và tất nhiên là 0 và số n - 1 cũng ở cạnh nhau).
Biết rằng n là số nguyên dương chẵn nằm trong khoảng từ 4 đến 20 */

let n;
function findOppositeNumber(n, inputNumber) {
    if (n <= 4 || n >= 20 || (n % 2 !=0)) {
        console.log("Vui lòng nhập lại n, n phải là số nguyên chẵn nằm trong khoảng từ 4 - 20!");
    }
    else {
        if (inputNumber < 0 || inputNumber > n - 1) {
            console.log(`Vui lòng nhập lại! Số cần kiểm tra phải lớn hơn 0 và nhỏ hơn ${n}!`);
        }
        else {
            let distance = n / 2;
            let result = 0;
            if (inputNumber < distance) {
                result = distance + inputNumber;
            }
            else {
                result = inputNumber - distance ;
            }
            console.log(result);
        }
    }    
}

console.log("Kết quả bài 1: ");
findOppositeNumber(10, 2);
findOppositeNumber(10, 6);

/*Viết 1 hàm nhận vào 2 chuỗi s1 và s2, trả về đầu ra là một chuỗi mới chứa các kí tự xen kẽ cùng vị trí vị trí của 2 chuỗi với nhau. */
function merge2String(string1, string2) {
    let mergeString = "";
    let newStr = "";
    if (string1.length >= string2.length) {
        newStr = string1.substr(string2.length);
        for (let i = 0; i < string2.length; i++) {
            mergeString = mergeString.concat(string1[i], string2[i]);
        }
        mergeString = mergeString + newStr;
    }
    else {
        newStr = string2.substr(string1.length);
        for ( let j= 0; j < string1.length; j++) {
            mergeString = mergeString.concat(string1[j], string2[j]);
        }
        mergeString = mergeString + newStr;
    }        
    console.log(mergeString);
}

console.log("Kết quả bài 2: ");
merge2String("abc", "123");
merge2String("abc", "0123");
merge2String("abcd","123");