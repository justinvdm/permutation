# [permutation](http://justinvdm.github.io/permutation)

![Build Status](https://api.travis-ci.org/justinvdm/permutation.png)

live pattern coding in the browser

## what is this?

permutation is basically an online repl with a few libraries' functions made directly available, with the aim of providing a way of experimenting with live coding in the browser.

The functions from the following libraries are available to be used directly inside permutation's editor/repl thing:

  - [sig](https://github.com/justinvdm/sig)
  - [motif](https://github.com/justinvdm/motif)
  - [museq](https://github.com/justinvdm/museq)
  - [wires](https://github.com/justinvdm/wires)
  - [warped](https://github.com/justinvdm/warped)

Additionally, permutation exposes [a few other things](https://github.com/justinvdm/permutation/tree/master/src/scripts/init.js):
  - sequencers `s1` to `s6`: [sig](https://github.com/justinvdm/sig) signals that take in arrays or signals that output arrays, sequences them and outputs them
  - `samplers`: a few sampling functions. Each can be played by invoking the function, then passing the result to [`out()`](https://github.com/justinvdm/wires#outugen-bus), or by sequencing them, as is done in the example that appears when permutation is opened up.

## credits

The samples are from [drumsamples.org](http://www.drumsamples.org/).
