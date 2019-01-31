<template>
  <v-app id="inspire">
  <div id="app-container">
    <v-content>
        <page-header />
        <router-view></router-view>
        <page-footer />
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
