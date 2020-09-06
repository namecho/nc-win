<template>
  <div class="win-sidebar">
    <div class="speedometer">
      <div class="item">
        <span>↑</span>
        <span>100</span>
        <span>kb/s</span>
      </div>
      <div class="item">
        <span>↓</span>
        <span>100</span>
        <span>kb/s</span>
      </div>
    </div>
    <div class="divider"></div>
    <ul class="menu">
      <li
        v-for="item in menuList"
        :key="item.type"
        @click="menuChange(item.type, item.path)"
        class="item"
        :class="{
          active: menuActive === item.type,
          'bottom-right-radius': menuActive === item.type + 1,
          'top-right-radius': menuActive === item.type - 1
        }"
      >
        {{ item.name }}
      </li>
    </ul>
    <div class="divider"></div>
    <div class="date">{{ date }}</div>
    <div class="internet">
      <span
        class="icon"
        :class="{
          connected: internet,
          disconnected: !internet
        }"
      ></span>
      <span>{{ internet ? "已连接互联网" : "已断开互联网" }}</span>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      menuList: [
        { path: "/index", name: "总览", type: 1 },
        { path: "/proxy", name: "代理", type: 2 },
        { path: "/buy", name: "购买", type: 3 },
        { path: "/log", name: "日志", type: 4 },
        { path: "/settings", name: "设置", type: 5 }
      ],
      menuActive: 1,
      date: moment().format("HH : mm : ss"),
      internet: window.navigator.onLine
    };
  },
  mounted() {
    setInterval(() => {
      this.date = moment().format("HH : mm : ss");
      this.internet = window.navigator.onLine;
    }, 1000);
  },
  methods: {
    menuChange(type, path) {
      this.menuActive = type;
      this.$router.push({ path });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
