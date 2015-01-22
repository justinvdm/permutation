describe("permutation.edit", function() {
  var edit = permutation.edit

  var el


  beforeEach(function() {
    el = document.createElement('div')
    document.body.appendChild(el)
  })

  afterEach(function() {
    document.body.removeChild(el)
  })

  it("should embed the editor at the given element", function() {
    el.id = 'editor'
    el.classList.contains('ace_editor').should.be.false
    edit('editor')
    el.classList.contains('ace_editor').should.be.true
  })
})
