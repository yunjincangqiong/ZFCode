
// 测试
// console.log(getNAllDecompositionCombinations(0))
// console.log(getNAllDecompositionCombinations(3))
// console.log(getNAllDecompositionCombinations(6))
// console.log(getNAllDecompositionCombinations(15))
// console.log(getNAllDecompositionCombinations(10000))
console.time()
console.log(getNAllDecompositionCombinations(10000))
console.timeEnd()
// 平均5.3ms 偶尔出现7.?ms

/**
 * 输出N的所有分解组合
 * @param N Number
 * @return String / NONE
 */
function getNAllDecompositionCombinations(N) {
  // 设置上限, 当值超过N自身的一半时, 将不能产生分解值
  var UpperLimit = Math.ceil(N / 2)
  // 结果
  var res = []
  // 存贮各个结果上限和下限值
  var arr = []
  // 从1开始查找能成功的分解值上下限
  for (var i = 1; i < UpperLimit; i++) {
    var sum = 0
    // 将i赋值, 以免对i产生影响
    var index = i
    while (sum < N) {
      sum += index
      // 存贮分解值的上限下限
      if (sum === N) {
        var tempArr1 = []
        tempArr1.push(i, index)
        arr.push(tempArr1)
        // 当前已产生结果结束本次循环
        break
      }
      index++
    }
  }
  // 遍历arr, 处理结果格式
  for (var j = 0; j < arr.length; j++) {
    var str = ''
    for (var k = arr[j][0]; k <= arr[j][1]; k++) {
      str += k + ' '
    }
    res.push(str)
  }
  // 隐式转换[] == 0, 空数组即为没有分解值
  return res == 0 ? 'NONE' : res.join('\n')
}
