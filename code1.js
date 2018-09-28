// 本人理解 单词忽略大小写 
// s = 'this a that'; t = 'that a this' 输出 'this' 以第一个字符串中出现单词的顺序为主

// 测试
// var s = 'This is C programming text'
// var t = 'This is a text for C programming'
var s = 'a bb aa aaa bbbb'
var t = 'bb aa a aaa bbbb'
console.log(getSecondPublicLongWord(s, t))

/**
 * 获取s, t字符串的第二公共长单词
 * @param s String
 * @param t String
 * @return String / NULL
 */
function getSecondPublicLongWord(s, t) {
  var sArr = s.toLowerCase().split(' ')
  var tArr = t.toLowerCase().split(' ')
  // 存储按字符串长度分组的s, t字符串单词
  var arr1 = []
  var arr2 = []
  // 存储s, t的字符串单词的长度
  var l1 = []
  var l2 = []
  // 按单词的长度不同分别存贮在2维数组中
  sArr.forEach(function (v) {
    var l = v.length
    if (!arr1[l]) {
      arr1[l] = []
      l1.push(l)
    }
    arr1[l].push(v)
  })
  tArr.forEach(function (v) {
    var l = v.length
    if (!arr2[l]) {
      arr2[l] = []
      l2.push(l)
    }
    arr2[l].push(v)
  })
  // 从长度大到小查找, 因为返回倒数第二长的单词
  l1.sort(function (a, b) { return b - a })
  l2.sort(function (a, b) { return b - a })
  // 存贮l1, l2公共单词长度
  var l3 = []
  l1.forEach(function (v) {
    if(l2.indexOf(v) !== -1) {
      l3.push(v)
    }
  })
  // 返回的结果
  var result = 'NULL'
  // 按共有单词长度从大到小依次查找
  // 为什么用for而不是forEach, forEach在内部return数据时不会阻止程序继续运行
  for (var j = 0; j < l3.length; j++) {
    var v = l3[j]
    for (var i = 0; i < arr1[v].length; i++) {
      var item = arr1[v][i]
      if (arr2[v].indexOf(item) !== -1) {
        // 如果结果不是NULL, 证明之前值重新赋值过一次, 该次即为结果
        if (result !== 'NULL') return item
        result = item
        // 当前共有长度已经有共有单词, 跳出本次长度查找
        break
      }
    }
  }
  return result
}
