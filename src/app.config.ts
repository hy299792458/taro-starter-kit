export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/detail/index',
  ],
  tabBar: {
    position: 'bottom',
    list: [
      {
        pagePath: 'pages/home/index',
        text: 'Home'
      },
      {
        pagePath: 'pages/detail/index',
        text: 'Detail'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
