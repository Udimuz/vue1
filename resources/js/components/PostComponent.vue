<template>
  <div class="text-center bg-success">
    <div>------- Начало -------</div>
    <single-post-component></single-post-component>
    <div>Предок: {{ name }}</div>
    <button @click="sayHello">Hello</button>-
    <button @click="sayJay">Jay</button>
  </div>
</template>

<script>
import SinglePostComponent from "@/components/SinglePostComponent.vue";
//import SinglePostComponent from "./SinglePostComponent.vue";
export default {
  name: "PostComponent",

  data() {
    return {
      name: 'Мать',
      age: 62,
      arr: [false, 77, '108'],
      someObj: {
        personName: 'Fisya'
      }
    }
  },

  methods: {
    sayHello() {
      console.log('Hello')
    },
    sayJay() {
      alert(this.name + ' say: Jay')
    },
  },

  components: {
    SinglePostComponent
  },
}
</script>

<style scoped>

</style>