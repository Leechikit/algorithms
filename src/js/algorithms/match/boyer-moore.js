/**
* @name: boyer-moore
* @description: 字符串匹配的boyer-moore算法
* @author: lizijie
* @update: 
*/

function replace(content, pattern) {
    let result = [];

    var boyerMoore = function (content, pattern, fromIndex) {
        var cLen = content.length,
            pLen = pattern.length,
            i = pLen - 1,
            badCharMap = {},
            goodSuffixMap = {},
            index, item, suffix, pre, j;

        fromIndex = fromIndex || i;

        for (; i > 0; i--) {
            item = pattern[i];

            // 创建坏字符规则表
            if (badCharMap[item] === undefined) {
                badCharMap[item] = i;
            }

            // 创建好后缀规则表
            suffix = pattern.slice(i);
            pre = pattern.slice(0, i);

            if (suffix.length <= pre.length) {
                for (j = pre.length - 1; j >= 0; j--) {
                    item = pre.slice(j - suffix.length + 1, j + 1);

                    if (suffix === item) {
                        if (goodSuffixMap[suffix] === undefined) {
                            goodSuffixMap[suffix] = j - suffix.length + 1;
                        }
                    }
                }
            }
        }

        var search = function (lastIndex) {
            var i = pLen - 1,   // 搜索字符串的索引标记
                j = lastIndex,  // 被搜索字符串的索引标记
                g = 0,  // 标记好后缀的长度
                badChar, goodSuffix, goodSuffixMove, badCharMove, badCharIndex, goodSuffixIndex;

            for (; i > 0; i--) {
                badChar = content[j];

                if (badChar === pattern[i]) {
                    g++;
                }
                else {
                    // 需要查找坏字符在搜索词上一次（lastIndexOf从右往左查找）的出现为止
                    badCharIndex = badCharMap[badChar];

                    if (badCharIndex === undefined) {
                        badCharIndex = -1;
                    }

                    badCharMove = i - badCharIndex;

                    if (badCharMove <= 0) {
                        badCharMove = 1;
                    }

                    // 如果存在好后缀，则计算好后缀可以移动的位置
                    if (g) {
                        for (i = g; i > 0; i--) {
                            goodSuffix = pattern.slice(0 - i);

                            if (goodSuffix in goodSuffixMap) {
                                goodSuffixIndex = goodSuffixMap[goodSuffix];
                                goodSuffixMove = pLen - i - goodSuffixIndex;
                                break;
                            }
                        }

                        if (goodSuffixIndex === undefined) {
                            goodSuffixMove = pLen - g - 1;
                        }

                        // 取坏字符和好后缀规则中移动位数最大者
                        lastIndex += Math.max(goodSuffixMove, badCharMove);
                    }
                    else {
                        lastIndex += badCharMove;
                    }

                    /* 测试代码 start
                        console.log( content );
        
                        for( var i = 0, space = '', len = lastIndex - pLen + 1; i &lt; len; i++ ){
                            space += ' ';
                        }
        
                        console.log( space + pattern );
                        console.log( lastIndex );
                        console.log( '-----------------------------' );
                        测试代码 end */

                    break;
                }

                j--;
            }

            if (pLen - 1 !== g) {
                // 已到末尾
                if (lastIndex + 1 > cLen) {
                    index = -1;
                }
                // 没到末尾将继续搜索
                else {
                    search(lastIndex);
                }
            }
            // 完全匹配
            else {
                index = lastIndex + 1 - pLen;
            }
        };

        search(fromIndex);
        // return index;
        if (index > -1) {
            result.push(index);
            boyerMoore(content, pattern, index + pLen);
        }
    };

    boyerMoore(content, pattern);
    if (result.length > 0) {
        return result;
    } else {
        return -1;
    }
}

module.exports = replace;