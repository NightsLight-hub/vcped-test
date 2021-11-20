<template>
  <a-button id="minButton" type="text" @click="minWindow">
    <template #icon>
      <FullscreenExitOutlined />
    </template>
  </a-button>
</template>

<script>
import { FullscreenExitOutlined } from '@ant-design/icons-vue';
export default {
  name: 'MinButton',
  components: {
    FullscreenExitOutlined
  },
  methods: {
    minWindow () {
      const ipcRenderer = window.ipcRenderer;
      ipcRenderer.send('control', 'min');
    }
  }
};
</script>

<style>
#minButton {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 5px;
  right: 100px;
  margin: auto 0;
  -webkit-app-region: no-drag;
}
</style>
