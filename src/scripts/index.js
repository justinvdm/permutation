;(function() {
  function edit(el) {
    var editor = ace.edit(el)
    var session = editor.getSession()

    editor.setTheme('ace/theme/monokai')
    session.setUseWorker(false)
    session.setMode('ace/mode/javascript')
    return editor
  }


  function inject(source) {
    for (var k in source) {
      if (!source.hasOwnProperty(k)) continue
      if (k in window) continue
      window[k] = source[k]
    }
  }


  function pollute() {
    ;[sig,
      wires,
      museq,
      warped
    ].forEach(inject)
  }


  pollute()
  var permutation = {}
  permutation.edit = edit
  permutation.inject = inject
  window.permutation = permutation
})();
