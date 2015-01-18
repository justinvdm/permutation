describe("permutation", function() {
  var el

  beforeEach(function() {
    el = document.createElement('div')
    document.body.appendChild(el)
  })

  afterEach(function() {
    document.body.removeChild(el)
  })

  describe(".edit", function() {
    it("should embed the editor at the given element", function() {
      el.id = 'editor'
      el.classList.contains('ace_editor').should.be.false
      permutation.edit('editor')
      el.classList.contains('ace_editor').should.be.true
    })
  })
})
