const inquirer = require('inquirer')
const Creator = require('./Creator')
const Generator = require('./Generator')
const executeCommand = require('./utils/executeCommand')
const path = require('path')

async function create(name) {
  // 获取所有选项(vue-router、vuex、bable、lint)
  const prompts = getPromptModules()
  const creator = new Creator()
  prompts.forEach((m) => m(creator)) // 注入choise、prompts

  // 弹出选项让用户选择
  const answers = await inquirer.prompt(creator.getFinalPrompts())

  // 填入 vue webpack 必选项，无需用户选择
  answers.features.unshift('vue', 'webpack')

  // package.json 文件内容
  const pkg = {
    name,
    version: '0.1.0',
    dependencies: {},
    devDependencies: {},
  }
  const generator = new Generator(pkg, path.join(process.cwd(), name))
  // 根据用户选择的选项加载相应的模块，在 package.json 写入对应的依赖项
  answers.features.forEach((feature) => {
    require(`./generator/${feature}`)(generator, answers)
  })
  await generator.generate()

  console.log('\n正在下载依赖...\n')
  // 下载依赖
  // 执行install
  await executeCommand('npm install', path.join(process.cwd(), name))
  console.log('\n依赖下载完成! 执行下列命令开始开发：\n')
  console.log(`cd ${name}`)
  console.log(`npm run dev`)
}

function getPromptModules() {
  return ['router', 'linter', 'vuex', 'bable'].map((file) =>
    require(`./promptModules/${file}`)
  )
}

module.exports = create
