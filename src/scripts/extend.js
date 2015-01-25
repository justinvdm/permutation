;(function() {
  function extend(target, source) {
    for (var k in source) {
      if (!source.hasOwnProperty(k)) continue
      if (k in target) continue
      target[k] = source[k]
    }
  }


  permutation.extend = extend
})()
