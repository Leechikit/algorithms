var requireTree = {
    "name": "page.js",
    "require": [
        {
            "name": "A.js",
            "require": [
                {
                    "name": "C.js",
                    "require": [
                        {
                            "name": "F.js"
                        }
                    ]
                }
            ]
        },
        {
            "name": "B.js",
            "require": [
                {
                    "name": "D.js",
                    "require": [
                        {
                            "name": "F.js"
                        }
                    ]
                },
                {
                    "name": "E.js",
                    "require": []
                }
            ]
        },
    ]
}

function comnoUrl(requireTree, domain) {
    let stack = [];
    let set = new Set();
    function getRequire(obj, beforeArr = []) {
        if (obj.name) {
            let arr = beforeArr.concat(obj.name);
            if (obj.require && obj.require.length > 0) {
                obj.require.forEach(item => {
                    getRequire(item, arr);
                })
            } else {
                stack.unshift(arr);
            }
        }
    }
    getRequire(requireTree);
    let maxLen = Math.max.apply(null, stack.map(item => item.length - 1));
    for (let i = maxLen; i >= 0; i--) {
        stack.forEach(item => {
            if (item[i]) {
                set.add(item[i]);
            }
        })
    }
    return domain + [...set].join(',');
}

console.log(comnoUrl(requireTree, 'http://res.wx.qq.com/'));