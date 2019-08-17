export default {
  route: {
    dashboard: '首页',
    user: '用户',
    userAndPerssion: '用户和权限管理',
    role: '角色'
  },
  navbar: {
    dashboard: '首页',
    github: '项目地址',
    logOut: '退出登录',
    profile: '个人中心',
    theme: '换肤',
    size: '布局大小'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    message: {
      PasswordError: '密码错误'
    },
    validator: {
      UsernameError: '请输入正确的用户名',
      PasswordError: '请输入正确的密码',
      PasswordLengthLess: '密码至少5个字符'
    }
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    tagsView: '开启 Tags-View',
    fixedHeader: '固定 Header',
    sidebarLogo: '侧边栏 Logo'
  },
  userList: {
    tableColumn: {
      username: '用户名',
      isSuperuser: '超管',
      isActive: '有效'
    }
  }
}
