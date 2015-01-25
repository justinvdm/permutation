describe("logger", function() {
  var makeTextbox = p.makeTextbox,
      makeLogger = p.makeLogger,
      logInput = p.logInput,
      logResult = p.logResult

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
      logger.getValue().should.equal([
          '1 + 2',
          ''
      ].join('\n'))

      logInput(logger, '3 + 4')
      logger.getValue().should.equal([
          '1 + 2',
          '',
          '3 + 4',
          ''
      ].join('\n'))

      logInput(logger, '5 + 6')
      logger.getValue().should.equal([
          '1 + 2',
          '',
          '3 + 4',
          '',
          '5 + 6',
          ''
      ].join('\n'))
    })
  })

  describe("logResult", function() {
    it("should append the result to the logger", function() {
      el.id = 'target'
      var logger = makeLogger(makeTextbox('target'))

      logResult(logger, 3)
      logger.getValue().should.equal([
          '/*',
          '3',
          '*/',
          ''
      ].join('\n'))

      logResult(logger, 23)
      logger.getValue().should.equal([
          '/*',
          '3',
          '*/',
          '',
          '/*',
          '23',
          '*/',
          ''
      ].join('\n'))

      logResult(logger, 23.3)
      logger.getValue().should.equal([
          '/*',
          '3',
          '*/',
          '',
          '/*',
          '23',
          '*/',
          '',
          '/*',
          '23.3',
          '*/',
          ''
      ].join('\n'))
    })
  })
})
