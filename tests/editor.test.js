describe("editor", function() {
  var makeTextbox = p.makeTextbox,
      makeEditor = p.makeEditor,
      runEditor = p.runEditor

  var el

  function noop() {}

  beforeEach(function() {
    el = document.createElement('div')
    document.body.appendChild(el)
  })

  afterEach(function() {
    document.body.removeChild(el)
  })

  describe("runEditor", function() {
    it("should log the editor's input", function(done) {
      var editor = makeEditor(makeTextbox(el))

      editor.setValue('1 + 2')
      runEditor(editor, noop, logInput, noop, noop)

      function logInput(input) {
        input.should.equal('1 + 2')
        done()
      }
    })

    it("should log the result of evaluating the input", function(done) {
      var editor = makeEditor(makeTextbox(el))
      runEditor(editor, evaluate, noop, logResult, noop)

      function evaluate(input, succeed, fail) {
        succeed(3)
      }

      function logResult(result) {
        result.should.equal(3)
        done()
      }
    })

    it("should log errors encountered when evaluating the input", function(done) {
      var editor = makeEditor(makeTextbox(el))
      var error = new Error(':/')

      runEditor(editor, evaluate, noop, noop, logError)

      function evaluate(input, succeed, fail) {
        fail(error)
      }

      function logError(e) {
        e.should.equal(error)
        done()
      }
    })
  })
})
