describe("permutation", function() {
  var edit = permutation.edit,
      inject = permutation.inject

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

  describe(".inject", function() {
    it("should inject the object into the global namespace", function() {
      expect(window).to.not.have.property('foo')
      expect(window).to.not.have.property('bar')

      inject({
        foo: 3,
        bar: 23
      })

      window.foo.should.equal(3)
      window.bar.should.equal(23)
    })
  })
})
