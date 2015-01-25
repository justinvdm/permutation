;(function() {
  function makeLogger(textbox) {
    textbox.setReadOnly(true)
    textbox.renderer.setShowGutter(false)
    return textbox
  }


  function append(logger, text) {
    text = [logger.getValue(), text]
      .join('\n')
      .trim() + '\n'

    logger.setValue(text)
  }


  function commented(text) {
    return ['/*', text, '*/'].join('\n')
  }


  function logInput(logger, input) {
    append(logger, input)
  }


  function logResult(logger, result) {
    append(logger, commented(result))
  }


  function logError(logger, error) {
    append(logger, commented(error.stack))
  }


  permutation.makeLogger = makeLogger
  permutation.logInput = logInput
  permutation.logResult = logResult
  permutation.logError = logError
})()
