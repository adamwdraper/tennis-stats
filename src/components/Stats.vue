<template>
  <Stats>
    <stat>
      <name>Record</name>
      <value>{{ stats.wins }} - {{ stats.losses }}</value>
    </stat>
  </Stats>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'stats'
      ])
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
