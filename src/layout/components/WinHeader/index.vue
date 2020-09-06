<template>
  <div class="win-header">
    <div class="win-top-menu"></div>
    <ul class="win-tools">
      <li class="iconfont" @click="windowMin">&#xebae;</li>
      <li class="iconfont" @click="windowChange">
        {{ isMaximized ? "&#xebc1;" : "&#xebc0;" }}
      </li>
      <li class="iconfont" @click="windowClose">&#xebbf;</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMaximized: true,
      ipcRenderer: window.require && window.require("electron").ipcRenderer
    };
  },
  mounted() {
    if (this.ipcRenderer) {
      this.ipcRenderer.on("window-change", (e, val) => {
        this.isMaximized = val;
      });
    }
  },
  methods: {
    windowMin() {
      this.ipcRenderer.send("window-min");
    },
    windowChange() {
      this.ipcRenderer.send("window-change");
    },
    windowClose() {
      this.ipcRenderer.send("window-close");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
