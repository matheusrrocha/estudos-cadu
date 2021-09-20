//missing item #1

const missingNumber = arr => {
    for(let i = 1; i <= 100; i++) {
        if(arr.indexOf(i) == -1)  {
            return i;
        }
    }

    return 0;
}


// duplicated
const findDuplicated = (arr) => {
    const total = arr.length
    let i = 1;
    let duplited;

    arr.forEach(el => {
        if(i <= total) {
            
            if(el == arr[i] && !duplited) {
                duplited = el;
            }
        }

        i++;
    })

    return duplited
} 

//minmax
const findMax = (arr) => {
    let max = arr[0];
    arr.forEach(element => {
        if (element > max)
            max = element
    });
    return max;
}

const findMin = (arr) => {
    let min = arr[0];
    arr.forEach(element => {
        if (element < min)
            min = element
    });
    return min;
}


//minmax multi
const findMax = arr => {
    let max = arr[0][0];

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j <= arr[i].length; j++) {
            if(arr[i][j] > max) {
                max = arr[i][j];
            }
        }
    }

    return max;
}

const findMin = arr => {
    let min = arr[0][0];

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j <= arr[i].length; j++) {
            if(arr[i][j] < min) {
                min = arr[i][j];
            }
        }
    }

    return min;
}

//polindromo
const isPolindrome = (str1, str2) => {
    let reveredString = str1.split("").reverse().join("");
    return reveredString == str2
}
/*
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
*/
//removechar
const removeChar = (str, char) => {
    let newString = "";
    str.split("").forEach(element => {
        if(element != char)
            newString += element
    });

    return newString;
}


//char occurrencies
const countChar = (string, char) => string.split("").filter(el => el == char).length;