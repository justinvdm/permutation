describe("logger", function() {
  var makeTextbox = p.makeTextbox,
      makeLogger = p.makeLogger,
      logInput = p.logInput,
      logResult = p.logResult,
      logError = p.logError


  var el

  beforeEach(function() {
    el = document.createElement('div')
    document.body.appendChild(el)
  })

  afterEach(function() {
    document.body.removeChild(el)
  })

  describe("logInput", function() {
    it("should append the input to the logger", function() {
      el.id = 'target'
      var logger = makeLogger(makeTextbox('target'))

      logInput(logger, '1 + 2')
      logger.getValue().should.equal('1 + 2')

      logInput(logger, '3 + 4')
      logger.getValue().should.equal([
          '1 + 2',
          '3 + 4'
      ].join('\n'))

      logInput(logger, '5 + 6')
      logger.getValue().should.equal([
          '1 + 2',
          '3 + 4',
          '5 + 6'
      ].join('\n'))
    })
  })

  describe("logResult", function() {
    it("should append an empty line", function() {
      el.id = 'target'
      var logger = makeLogger(makeTextbox('target'))

      logResult(logger, 3)
      logger.getValue().should.be.empty

      logger.setValue('3')
      logResult(logger, 3)
      logger.getValue().should.equal('3\n')

      logResult(logger, 23)
      logger.getValue().should.equal('3\n\n')

      logResult(logger, 23.3)
      logger.getValue().should.equal('3\n\n\n')
    })
  })

  describe("logError", function() {
    it("should append the error to the logger", function() {
      el.id = 'target'
      var logger = makeLogger(makeTextbox('target'))

      var e1 = new Error(':/')
      var e2 = new Error('o_O')
      var e3 = new Error('-_-')

      logError(logger, e1)
      logger.getValue().should.equal([
          '/*',
          e1.stack,
          '*/',
          ''
      ].join('\n'))

      logError(logger, e2)
      logger.getValue().should.equal([
          '/*',
          e1.stack,
          '*/',
          '',
          '/*',
          e2.stack,
          '*/',
          ''
      ].join('\n'))

      logError(logger, e3)
      logger.getValue().should.equal([
          '/*',
          e1.stack,
          '*/',
          '',
          '/*',
          e2.stack,
          '*/',
          '',
          '/*',
          e3.stack,
          '*/',
          ''
      ].join('\n'))
    })
  })
})
