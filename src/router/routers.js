import Main from '@/view/main'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/news',
    name: 'news',
    meta: {
      icon: 'logo-buffer',
      title: '新闻管理'
    },
    component: Main,
    children: [
      {
        path: 'list_page',
        name: 'list_page',
        meta: {
          icon: 'md-trending-up',
          title: '全部新闻'
        },
        component: () => import('@/view/ssnews/list_page.vue')
      },
      {
        path: 'type_page',
        name: 'type_page',
        meta: {
          icon: 'md-grid',
          title: '新闻分类'
        },
        component: () => import('@/view/ssnews/type_page.vue')
      },
      {
        path: 'tags_page',
        name: 'tags_page',
        meta: {
          icon: 'md-pause',
          title: '新闻标签'
        },
        component: () => import('@/view/ssnews/tags_page.vue')
      },
      {
        path: 'statistics_page',
        name: 'statistics_page',
        meta: {
          icon: 'md-pause',
          title: '新闻统计'
        },
        component: () => import('@/view/ssnews/statistics_page.vue')
      }
    ]
  },
  {
    path: '/videos',
    name: 'videos',
    meta: {
      icon: 'logo-buffer',
      title: '视频管理'
    },
    component: Main,
    children: [
      {
        path: 'list_page',
        name: 'videos_list_page',
        meta: {
          icon: 'md-trending-up',
          title: '全部视频'
        },
        component: () => import('@/view/ssvideo/list_page.vue')
      },
      {
        path: 'type_page',
        name: 'videos_type_page',
        meta: {
          hide: true,
          icon: 'ios-infinite',
          title: '视频分类'
        },
        component: () => import('@/view/ssvideo/type_page.vue')
      },
      {
        path: 'tags_page',
        name: 'videos_tags_page',
        meta: {
          icon: 'md-grid',
          title: '视频标签'
        },
        component: () => import('@/view/ssvideo/tags_page.vue')
      },
      {
        path: 'statistics_page',
        name: 'videos_statistics_page',
        meta: {
          icon: 'md-pause',
          title: '视频统计'
        },
        component: () => import('@/view/ssvideo/statistics_page.vue')
      }
    ]
  },
  {
    path: '/ssgoods',
    name: 'goods',
    meta: {
      icon: 'md-cloud-upload',
      title: '商品发布'
    },
    component: Main,
    children: [
      {
        path: 'list_page',
        name: 'goods_list_page',
        meta: {
          icon: 'ios-document',
          title: '全部商品'
        },
        component: () => import('@/view/ssgoods/list_page.vue')
      },
      {
        path: 'type_page',
        name: 'goods_type_page',
        meta: {
          icon: 'md-clipboard',
          title: '商品分类'
        },
        component: () => import('@/view/ssgoods/type_page.vue')
      },
      {
        path: 'attribute_page',
        name: 'goods_attribute_page',
        meta: {
          icon: 'md-clipboard',
          title: '商品属性'
        },
        component: () => import('@/view/ssgoods/attribute_page.vue')
      },
      {
        path: 'statistics_page',
        name: 'goods_statistics_page',
        meta: {
          icon: 'md-clipboard',
          title: '销售统计'
        },
        component: () => import('@/view/ssgoods/statistics_page.vue')
      }
    ]
  },
  {
    path: '/need',
    name: 'need',
    meta: {
      icon: 'ios-stats',
      title: '用户需求'
    },
    component: Main,
    children: [
      {
        path: 'list_page',
        name: 'need_list_page',
        meta: {
          icon: 'md-add',
          title: '全部需求'
        },
        component: () => import('@/view/ssneed/list_page.vue')
      },
      {
        path: 'type_page',
        name: 'need_type_page',
        meta: {
          icon: 'md-download',
          title: '需求分类'
        },
        component: () => import('@/view/ssneed/type_page.vue')
      },
      {
        path: 'attribute_page',
        name: 'need_attribute_page',
        meta: {
          icon: 'md-download',
          title: '需求属性'
        },
        component: () => import('@/view/ssneed/attribute_page.vue')
      },
      {
        path: 'statistics_page',
        name: 'need_statistics_page',
        meta: {
          icon: 'md-download',
          title: '需求报表'
        },
        component: () => import('@/view/ssneed/statistics_page.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      icon: 'ios-stats',
      title: '会员管理'
    },
    component: Main,
    children: [
      {
        path: 'list_page',
        name: 'user_list_page',
        meta: {
          icon: 'md-add',
          title: '全部会员'
        },
        component: () => import('@/view/ssuser/list_page.vue')
      },
      {
        path: 'invitation_code_page',
        name: 'user_invitation_code_page',
        meta: {
          icon: 'md-download',
          title: '会员邀请码'
        },
        component: () => import('@/view/ssuser/invitation_code_page.vue')
      },
      {
        path: 'recharge_page',
        name: 'user_recharge_page',
        meta: {
          icon: 'md-download',
          title: '会员财务'
        },
        component: () => import('@/view/ssuser/recharge_page.vue')
      },
      {
        path: 'put_forward_page',
        name: 'user_put_forward_page',
        meta: {
          icon: 'md-download',
          title: '提现申请'
        },
        component: () => import('@/view/ssuser/put_forward_page.vue')
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      icon: 'ios-stats',
      title: '系统设置'
    },
    component: Main,
    children: [
      {
        path: 'system_info',
        name: 'setting_system_info',
        meta: {
          icon: 'md-add',
          title: '基本信息设置'
        },
        component: () => import('@/view/sssetting/system_info.vue')
      },
      {
        path: 'email',
        name: 'setting_email',
        meta: {
          icon: 'md-download',
          title: '邮件服务设置'
        },
        component: () => import('@/view/sssetting/email.vue')
      },
      {
        path: 'administrator',
        name: 'setting_administrator',
        meta: {
          icon: 'md-download',
          title: '管理员设置'
        },
        component: () => import('@/view/sssetting/administrator.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
