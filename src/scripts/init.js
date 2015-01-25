permutation.init = function() {
  var extend = permutation.extend,
      deepMap = warped.deepMap,
      run = warped.run,
      sampler = wires.sampler,
      val = sig.val,
      ensure = sig.ensure,
      update = sig.update,
      flatten = sig.flatten,
      map = sig.map,
      put = sig.put,
      out = wires.out,
      seq = museq.seq,
      interval = museq.interval


  window.result = result

  window.samples = {
    c: sampler('/static/c.wav'),
    h: sampler('/static/h.wav'),
    k: sampler('/static/k.wav'),
    s: sampler('/static/s.wav'),
    t: sampler('/static/t.wav')
  }

  window.s1 = sequencer()
  window.s2 = sequencer()
  window.s3 = sequencer()
  window.s4 = sequencer()
  window.s5 = sequencer()
  window.s6 = sequencer()

  ;[sig,
    wires,
    museq,
    warped
  ].forEach(function(g) {
    extend(window, g)
  })

  put(interval, 1200)


  function result(s) {
    return map(s, deepMap, run)
  }


  function sequencer() {
    var s = val()

    vv(s)
      (ensure)
      (update)
      (seq)
      (flatten)
      (map, out)

    return s
  }
}
