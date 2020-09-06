<template>
  <div class="layout">
    <div class="header">
      <win-header></win-header>
    </div>
    <div class="main">
      <div class="sidebar">
        <win-sidebar></win-sidebar>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import WinHeader from "./components/WinHeader";
import WinSidebar from "./components/WinSidebar";
export default {
  components: { WinHeader, WinSidebar }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
