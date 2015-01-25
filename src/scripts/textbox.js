;(function() {
  function makeTextbox(el) {
    var textbox = ace.edit(el)
    var session = textbox.getSession()

    textbox.setShowPrintMargin(false)
    textbox.setTheme('ace/theme/monokai')
    session.setUseWorker(false)
    session.setMode('ace/mode/javascript')

    return textbox
  }


  permutation.makeTextbox = makeTextbox
})()
