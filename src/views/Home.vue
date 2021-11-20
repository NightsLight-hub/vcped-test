<template>
  <div class="home">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
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
