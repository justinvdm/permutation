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


  function commented(text) {
    return ['/*', text, '*/'].join('\n')
  }


  function logInput(logger, input) {
    append(logger, input)
  }


  function logResult(logger, result) {
    append(logger, '')
  }


  function logError(logger, error) {
    append(logger, commented(error.stack) + '\n')
  }


  permutation.makeLogger = makeLogger
  permutation.logInput = logInput
  permutation.logResult = logResult
  permutation.logError = logError
})()
