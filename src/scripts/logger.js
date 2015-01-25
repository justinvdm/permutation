;(function() {
  function makeLogger(textbox) {
    textbox.setReadOnly(true)
    textbox.renderer.setShowGutter(false)
    return textbox
  }


  function append(logger, text) {
    var currentText = logger.getValue()
    text = currentText.length
      ? [currentText, text].join('\n')
      : text

    logger.setValue(text)
    logger.clearSelection()
  }


  function appendOutput(logger, output) {
    append(logger, commented(output) + '\n')
  }


  function commented(text) {
    return ['/*', text, '*/'].join('\n')
  }


  function logInput(logger, input) {
    append(logger, input)
  }


  function logResult(logger, result) {
    appendOutput(logger, result)
  }


  function logError(logger, error) {
    appendOutput(logger, error.stack)
  }


  permutation.makeLogger = makeLogger
  permutation.logInput = logInput
  permutation.logResult = logResult
  permutation.logError = logError
})()
