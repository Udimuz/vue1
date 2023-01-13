<template>
  <div class="text-center bg-success">
    <div>- Одно вложенное сообщение -</div>
    <div>Потомок: {{ name }}. Статус: {{ dasServ }}</div>
  </div>
</template>

<script>
export default {
  name: "SinglePostComponent",

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

  computed: {
    dasServ() {
      return this.name + ' развивается во Vue'
    }
  },

}
</script>

<style scoped>

</style>