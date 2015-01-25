describe("extend", function() {
  var extend = p.extend

  it("should assign the source object's properties to the target", function() {
    var target = {}

    extend(target, {
      foo: 3,
      bar: 23
    })

    target.foo.should.equal(3)
    target.bar.should.equal(23)
  })
})
