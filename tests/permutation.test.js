describe("permutation", function() {
  var inject = permutation.inject


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
