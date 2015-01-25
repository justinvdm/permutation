;(function() {
  var map = warped.map,
      randInt = warped.randInt,
      randVal = warped.randVal,
      repeat = warped.repeat,
      concat = warped.concat


  var headTypes = [
    function() {
      return [
        "vv('k ~ k s ~ ~, h*4')",
        "  (motif, samples)"
      ]
    },
    function() {
      return [
        "vv('c, k, [t*3, t*2]*2')",
        "  (motif, samples)"
      ]
    },
  ]

  var modifierTypes = [
    function() {
      return [
        "  (every, " + (randInt(1, 4) * 2) + ", function(beats) {",
        "    return vv(beats)",
        "      (slice, -(beats.length / 2))",
        "      (repeat, randInt(1, 2) * 2)",
        "      (concatValues)",
        "      ()",
        "  })"
      ]
    },
    function() {
      return [
        "  (every, " + (randInt(1, 4) * 2) + ", function(beats) {",
        "    var i = -randInt(1, 2) * 2",
        "    return concat(slice(beats, 0, i), vv(beats)",
        "      (slice, i)",
        "      (repeat, randInt(1, 2) * 2)",
        "      (concatValues)",
        "      ())",
        "  })"
      ]
    },
    function() {
      var p = -randVal([0.2, 0.6, 1.2, 2, 2.3, 2.5])
      var n = randInt(2, 3)
      return ["  (every, " + n + ", deepMap, ctl, {pitch: " + p + "})"]
    },
    function() {
      var p = randVal([0.3, 0.5, 1.5, 3.3])
      var n = randInt(2, 6)
      return ["  (every, " + n + ", deepMap, ctl, {pitch: " + p + "})"]
    }
  ]


  function intro() {
    var head = randVal(headTypes)()

    var modifiers = vv(null)
      (repeat, randInt(2, modifierTypes.length))
      (map, function() { return randVal(modifierTypes)() })
      (cat)
      ()

    return cat([
      head,
      "  (sync)",
      "  (loop)",
      "  (result)",
      modifiers,
      "  (to, s1)"
    ]).join('\n')
  }


  function cat(arr) {
    return arr.reduce(function(a, b) {
      return concat(a, b)
    })
  }


  permutation.intro = intro
})()
