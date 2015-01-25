;(function() {
  function evaluate(input, succeed, fail) {
    try { succeed(eval(input)) }
    catch (e) { fail(e) }
  }


  permutation.evaluate = evaluate
})()
