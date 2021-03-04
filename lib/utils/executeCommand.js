const execa = require('execa')

module.exports = function executeCommand(command, cwd) {
  return new Promise((resolve, reject) => {
    const child = execa(
      'npm',
      ['install', '--registry https://registry.npm.taobao.org'],
      {
        cwd,
        stdio: ['inherit', 'pipe', 'inherit'],
      }
    )
    // child.stdout.on('data', (buffer) => {
    //   process.stdout.write(buffer)
    // })
    child.stdout.pipe(process.stdout)
    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`command failed: ${command}`))
        return
      }
      resolve()
    })
  })
}
