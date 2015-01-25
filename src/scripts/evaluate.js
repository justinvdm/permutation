;(function() {
  function evaluate(input, succeed, fail) {
    succeed = succeed || noop
    fail = fail || thrower
    try { succeed(eval(input)) }
    catch (e) { fail(e) }
  }


  function noop() {
  }


  function thrower(e) {
    throw e
  }

  permutation.evaluate = evaluate
})()
