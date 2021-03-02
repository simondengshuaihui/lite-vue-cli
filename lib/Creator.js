module.exports = class Creator {
  constructor() {
    this.featurePrompt = {
      name: 'features',
      message: 'Check the features needed for your project:',
      pageSize: 10,
      type: 'checkbox',
      choices: [],
    }
    this.injectedPrompts = []
  }

  injectFeature(feture) {
    this.featurePrompt.choices.push(feture)
  }

  injectPrompt(prompt) {
    this.injectedPrompts.push(prompt)
  }

  getFinalPrompts() {
    return [this.featurePrompt, ...this.injectedPrompts]
  }
}
