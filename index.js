const isAsync = fn => fn.constructor.name === 'AsyncFunction'
const color = (msg, [open, close]) => `\x1b[${open}m${msg}\x1b[${close}m`

const it = async (message, fn) => {
  const testMessage = `    ${color(message, [90, 39])}:`

  try {
    await fn()
    console.log(testMessage, color('passed', [32, 39]))
  } catch (err) {
    console.log(testMessage, color('failed', [31, 39]))
    console.error('      ', color(`${err.name} ${err.message}`, [31, 39]))
  }
}

module.exports = (message, fn) => {
  const testFn = it
  console.log(' '.repeat(2), color(message, [33, 39]))
  fn(testFn)
}
