<template>
<!--  使用antd的header 布局，作为标题栏-->
  <a-layout-header>
    <close-button></close-button>
    <max-button></max-button>
    <min-button></min-button>
  </a-layout-header>
  <a-layout-content class="layout-content">
    <div class="home">
      <span>{{ msg }}</span>
    </div>
  </a-layout-content>

</template>

<script>
// @ is an alias to /src
import CloseButton from '@/components/buttons/closeButton';
import MaxButton from '@/components/buttons/maxButton';
import MinButton from '@/components/buttons/minButton';
export default {
  name: 'Home',
  components: {
    CloseButton, MaxButton, MinButton
  },
  data () {
    return {
      msg: ''
    };
  },
  mounted () {
    // eslint-disable-next-line no-debugger
    debugger;
    window.ipcRenderer.receive('mainMsg', (event, ...args) => {
      console.log('get mainMsg');
      this.msg = args[0];
    });
  }
};
</script>
<style scoped>
.ant-layout-header{
  width: 100%;
  height: 65px;
  /* 标题栏设置个便于区分的颜色，可以拖拽用 */
  background-color: #18bae5;
  /* 设置标题栏可以拖拽 */
  -webkit-app-region: drag;

}
.layout-content{
  height: calc(100vh - 100px);
  width: 100%;
}
</style>
