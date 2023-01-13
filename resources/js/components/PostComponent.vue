<template>
  <div class="text-center bg-success">
    <div>111111111-444444444444</div>
    <div>Имя: {{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",

  data() {
    return {
      name: 'Дима',
      age: 47,
      arr: [11, '22', true],
      someObj: {
        personName: 'Damayita'
      }
    }
  },

}
</script>

<style scoped>

</style>