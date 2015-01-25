;(function() {
  function makeEditor(textbox) {
    return textbox
  }


  function runEditor(editor, evaluate, logInput, logResult, logError) {
    var input = editor.getValue()
    logInput = logInput || noop
    logInput(input)
    evaluate(input, logResult, logError)
  }


  function clearEditor(editor) {
    editor.setValue('')
  }


  function noop() {}


  permutation.makeEditor = makeEditor
  permutation.runEditor = runEditor
  permutation.clearEditor = clearEditor
})()
