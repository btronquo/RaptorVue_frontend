<template>
  <v-app id="inspire">
  <div id="app">
    <v-content>
      <v-container fluid>
        <page-header />
        <router-view></router-view>
      </v-container>
    </v-content>
  </div>

  </v-app>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>
