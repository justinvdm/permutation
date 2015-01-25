describe("textbox", function() {
  var makeTextbox = p.makeTextbox

  var el

  beforeEach(function() {
    el = document.createElement('div')
    document.body.appendChild(el)
  })

  afterEach(function() {
    document.body.removeChild(el)
  })

  describe("makeTextbox", function() {
    it("should embed a text box at the given element", function() {
      el.id = 'target'
      el.classList.contains('ace_editor').should.be.false
      var t = makeTextbox('target')
      el.classList.contains('ace_editor').should.be.true
      expect(t).to.be.an.instanceof(Object)
    })
  })
})
