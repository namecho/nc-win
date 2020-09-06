import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import(/* webpackChunkName: "layout" */ "../layout"),
    redirect: "index",
    children: [
      {
        path: "index",
        name: "index",
        component: () =>
          import(/* webpackChunkName: "layout" */ "../views/index")
      },
      {
        path: "proxy",
        name: "proxy",
        component: () =>
          import(/* webpackChunkName: "layout" */ "../views/proxy")
      },
      {
        path: "buy",
        name: "buy",
        component: () => import(/* webpackChunkName: "layout" */ "../views/buy")
      },
      {
        path: "log",
        name: "log",
        component: () => import(/* webpackChunkName: "layout" */ "../views/log")
      },
      {
        path: "settings",
        name: "settings",
        component: () =>
          import(/* webpackChunkName: "layout" */ "../views/settings")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
