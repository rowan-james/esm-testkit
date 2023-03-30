# ESM Testkit

A very simple test suite that supports CJS and ESM.

## Getting Started

```
import test from 'esm-testkit'
import assert from 'assert'

test('my tests', t => {
  t('pass', () => assert(true))
  t('fail', () => assert(false))
})

//   my tests
//    fail: failed
//       AssertionError [ERR_ASSERTION] false == true
//    pass: passed
```

