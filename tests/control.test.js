describe("control", function() {
  var control = p.control,
      origInit = p.init,
      origIntro = p.intro,
      origKeypress = p.keypress


  var el
  var listeners = {}


  function keypress(keys, fn) {
    if (arguments.length < 2) return listeners[keys]()
    listeners[keys] = fn
  }


  function makeEl() {
    var el = document.createElement('div')
    document.body.appendChild(el)

    var editor = document.createElement('div')
    editor.id = 'editor'
    el.appendChild(editor)

    var logger = document.createElement('div')
    logger.id = 'logger'
    el.appendChild(logger)

    return el
  }


  beforeEach(function() {
    p.keypress = keypress
    p.init = function() {}
    p.intro = function() { return '' }
    el = makeEl()
  })

  afterEach(function() {
    p.init = origInit
    p.intro = origIntro
    p.keypress = origKeypress
    document.body.removeChild(el)
  })

  it("should initialise permutation", function(done) {
    p.init = function() { done() }
    control()
  })

  it("should add the intro code to the editor", function() {
    p.intro = function() { return '1 + 2' }
    var c = control()
    c.editor.getValue().should.equal('1 + 2')
  })

  it("should run the editor when ctrl-alt-enter is pressed", function() {
    var c = control()
    c.editor.setValue('1 + 2')

    c.logger.getValue().should.equal('')
    keypress('ctrl-alt-enter')
    c.logger.getValue().should.equal([
        '1 + 2',
        ''
    ].join('\n'))

    c.editor.getValue().should.equal('1 + 2')
  })

  it("should clear the editor when ctrl-shift-backspace is pressed", function() {
    var c = control()
    c.editor.setValue('2+2')
    keypress('ctrl-shift-backspace')
    c.editor.getValue().should.equal('')
  })

  it("should clear the editor when ctrl-alt-backspace is pressed", function() {
    var c = control()
    c.editor.setValue('2+2')
    keypress('ctrl-alt-backspace')
    c.editor.getValue().should.equal('')
  })

  it("should run and clear the editor when ctrl-shift-enter is pressed", function() {
    var c = control()
    c.editor.setValue('1 + 2')

    c.logger.getValue().should.equal('')
    keypress('ctrl-shift-enter')
    c.logger.getValue().should.equal([
        '1 + 2',
        ''
    ].join('\n'))

    c.editor.getValue().should.equal('')
  })
})
