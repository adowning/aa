<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ion-button @click="showDialogAlert" full>Show Alert Box</ion-button>
    <ion-button @click="notify" full>Show Alert Box</ion-button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// eslint-disable-next-line
import { Plugins } from '@capacitor/core';
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted(){
  },
   methods: {
    notify() {
      this.$ionic.alertController
        .create({
          header: 'Notification',
          subHeader: null,
          message: 'Hello World',
          buttons: ['Bye'],
        })
        .then(a => a.present())
        .catch(console.error)
    },
     async showDialogAlert(){
      await Plugins.Modals.alert({
          title: 'Alert',
          message: 'This is an example alert box'
      });
    }
  },
}
</script>
