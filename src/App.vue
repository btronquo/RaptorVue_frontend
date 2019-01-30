<template>
  <v-app id="inspire">
  <div id="app">
    <v-content>
      <v-container fluid>
        <page-header />
        <router-view></router-view>
        <page-footer />
      </v-container>
    </v-content>
  </div>
  </v-app>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>
