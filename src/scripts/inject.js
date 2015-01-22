permutation.inject = function() {
  function inject(source) {
    for (var k in source) {
      if (!source.hasOwnProperty(k)) continue
      if (k in window) continue
      window[k] = source[k]
    }
  }


  return inject
}()
