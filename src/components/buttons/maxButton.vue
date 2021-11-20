<template>
  <a-button id="maxButton" type="text" @click="maxWindow">
    <template #icon><FullscreenOutlined /></template>
  </a-button>
</template>

<script>
import { FullscreenOutlined } from '@ant-design/icons-vue';
export default {
  name: 'maxButton',
  components: {
    FullscreenOutlined
  },
  methods: {
    maxWindow () {
      const ipcRenderer = window.ipcRenderer;
      ipcRenderer.send('control', 'max');
    }
  }
};
</script>

<style>
#maxButton {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 5px;
  right: 60px;
  margin: auto 0;
  -webkit-app-region: no-drag;
}
</style>
