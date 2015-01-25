permutation.control = function() {
  var p = permutation


  var editor = p.makeEditor(p.makeTextbox('editor'))
  var logger = p.makeLogger(p.makeTextbox('logger'))
  
  p.keypress('ctrl-alt-enter', function() {
    run()
  })

  p.keypress('ctrl-alt-backspace', function() {
    clear()
  })

  p.keypress('ctrl-shift-backspace', function() {
    clear()
  })
    
  p.keypress('ctrl-shift-enter', function() {
    run()
    clear()
  })

  p.init()

  editor.setValue(p.intro())
  editor.clearSelection()
  run()


  function run() {
    return p.runEditor(editor, evaluate, logInput, logResult, logError)
  }


  function evaluate(input, succeed, fail) {
    return p.evaluate(input, succeed, fail)
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


  return {
    editor: editor,
    logger: logger
  }
}
