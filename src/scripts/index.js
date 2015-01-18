;(function() {
  function edit(el) {
    var editor = ace.edit(el)
    var session = editor.getSession()

    editor.setTheme('ace/theme/monokai')
    session.setUseWorker(false)
    session.setMode('ace/mode/javascript')
    return editor
  }


  var permutation = {}
  permutation.edit = edit
  window.permutation = permutation
})();
