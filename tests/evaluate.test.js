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
})
