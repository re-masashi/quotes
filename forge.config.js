module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-bitbucket',
      config: {
        repository: {
          owner: '__Nafi__',
          name: 'quotes'
        },
        auth: {
          username: "__Nafi__"
          appPassword: process.env.BITBUCKET_APP_PASSWORD // string
        }
    }
  ]
}