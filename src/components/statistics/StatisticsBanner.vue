<script>
export default {
  props: {
    stats: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <div class="data-header">
    <div class="header-item" v-for="s in stats" :key="s.id">
      <div class="data">
        {{s.value}}
      </div>
      <div class="data-type">
        {{s.message}}
      </div>
    </div>
  </div>  
</template>

<style scoped>
  .data-header {
    background-color: #f8f8f8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: fit-content;
    padding: 0.6em 1.5em;
  }

  .data {
    font-weight: 400;
    font-size: 2em;
    height: 1.3em;
  }

  .data-type {
    font-weight: 300;
    font-size: 0.9em;
  }
</style>