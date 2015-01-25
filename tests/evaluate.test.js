describe("evaluate", function() {
  var evaluate = p.evaluate


  function badPath() {
    return new Error("path shouldn't have been reached")
  }

  it("should call the success function with the eval result", function(done) {
    evaluate("2 + 2", succeed, fail)

    function succeed(result) {
      result.should.equal(4)
      done()
    }

    function fail() {
      done(badPath())
    }
  })

  it("should call the fail function when errors are encountered", function(done) {
    evaluate("throw new Error(':/')", succeed, fail)

    function succeed(result) {
      done(badPath())
    }

    function fail(e) {
      e.should.be.instanceof(Error)
      e.message.should.equal(':/')
      done()
    }
  })

  it("should use a noop as the default success function", function() {
    evaluate('3')
  })

  it("should throw errors if no failure function is given", function() {
    function test() {
      evaluate("throw new Error(':/')")
    }

    test.should.throw(':/')
  })
})
