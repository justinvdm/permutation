;(function() {
  function makeLogger(textbox) {
    textbox.setReadOnly(true)
    textbox.renderer.setShowGutter(false)
    return textbox
  }


  function logInput(logger, input) {
  }


  function logResult(logger, result) {
  }


  function logError(logger, error) {
  }


  permutation.makeLogger = makeLogger
  permutation.logInput = logInput
  permutation.logResult = logResult
  permutation.logError = logError
})()
