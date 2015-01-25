;(function() {
  function makeEditor(textbox) {
    return textbox
  }


  function runEditor(editor, evaluate, logInput, logResult, logError) {
    var input = editor.getValue()
    logInput(input)
    evaluate(input, logResult, logError)
  }


  function clearEditor(editor) {
    editor.setValue('')
  }


  permutation.makeEditor = makeEditor
  permutation.runEditor = runEditor
  permutation.clearEditor = clearEditor
})()
