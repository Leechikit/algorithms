/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (!s1 || !s2) {
        return;
    }

    let remain = s2;
    while (remain) {
        const index = remain.indexOf(s1[0]);
        const len = s1.length;
        if (s1 === remain.slice(index, index + len)) {
            return true;
        }
        remain = remain.slice(index + len);
    }
    return false;
};

function permuteString(str) {
    var input = str.split('');//字符串转换为数组
    var permArr = [],
        usedChars = [];
    function main(input) {
        var ch;
        for (var i = 0, len = input.length; i < len; ++i) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }
            //console.log('input before:',input);
            main(input);
            input.splice(i, 0, ch);
            //console.log('input after:',input);
            usedChars.pop();
        }
        return permArr
    }
    return main(input);
};

function stringSearch(s1, s2) {
    const arr = permuteString(s1);
    let result = false;
    for (let i = 0, len = arr.length; i < len; i++) {
        if (checkInclusion(arr[i].join(""), s2)) {
            result = true;
            break;
        }
    }
    return result;
}