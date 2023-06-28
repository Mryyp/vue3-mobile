module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: '✨feat(新功能)' },
    { value: 'fix', name: '🐛fix(修复)' },
    { value: 'docs', name: '📝docs(文档变更)' },
    { value: 'style', name: '🎨style(代码格式-不影响代码运行的变动)' },
    { value: 'refactor', name: '💩refactor(重构)' },
    { value: 'perf', name: '⚡️perf(性能优化)' },
    { value: 'test', name: '✅test(增加测试)' },
    { value: 'chore', name: '🔧chore(构建过程或辅助工具的变动)' },
    { value: 'build', name: '🚀build(打包)' },
    { value: 'ci', name: '🔨ci(与持续集成服务有关的改动)' },
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
  },

  // 取消 scope 类型选择
  skipEmptyScopes: true,
  // 跳过问题
  skipQuestions: ['footer'],
  // subject文字长度默认是72
  subjectLimit: 72,
}

// 增加  scope 类型
// scopes: [
//   ['components', '组件相关'],
//   ['hooks', 'hook 相关'],
//   ['utils', 'utils 相关'],
//   ['element-ui', '对 element-ui 的调整'],
//   ['styles', '样式相关'],
//   ['deps', '项目依赖'],
//   ['auth', '对 auth 修改'],
//   ['other', '其他修改'],
//   // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
//   ['custom', '以上都不是？我要自定义']
// ].map(([value, description]) => {
//   return {
//     value,
//     name: `${value.padEnd(30)} (${description})`
//   }
// }),
