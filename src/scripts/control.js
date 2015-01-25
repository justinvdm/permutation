permutation.control = function() {
  var p = permutation


  var ns = {}
  var editor = p.makeEditor(p.makeTextbox('editor'))
  var logger = p.makeLogger(p.makeTextbox('logger'))
  
  ;[sig,
    wires,
    museq,
    warped
  ].forEach(function(g) {
    p.extend(ns, g)
  })

  keymage('ctrl-enter', function() {
    run()
  })

  keymage('ctrl-backspace', function() {
    clear()
  })
    
  keymage('ctrl-shift-enter', function() {
    run()
    clear()
  })


  function run() {
    return p.runEditor(editor, evaluate, logInput, logResult, logError)
  }


  function evaluate(input, succeed, fail) {
    return p.evaluate(ns, input, succeed, fail)
  }


  function clear() {
    return p.clearEditor(editor)
  }


  function logInput(input) {
    return p.logInput(logger, input)
  }


  function logResult(result) {
    return p.logResult(logger, result)
  }


  function logError(error) {
    return p.logError(logger, error)
  }
}
