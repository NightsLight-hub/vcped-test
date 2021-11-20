<template>
  <a-button id="closeButton" type="text" title="close" @click="closeWindow">
    <template #icon><CloseOutlined /></template>
  </a-button>
</template>

<script>
import { CloseOutlined } from '@ant-design/icons-vue';
export default {
  name: 'closeButton',
  components: {
    CloseOutlined
  },
  methods: {
    closeWindow () {
      const ipcRenderer = window.ipcRenderer;
      ipcRenderer.send('control', 'close');
    }
  }
};
</script>

<style>
#closeButton {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 5px;
  right: 20px;
  margin: auto 0;
  -webkit-app-region: no-drag;
}
</style>
