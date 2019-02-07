<template>
    <v-app class="grey lighten-4">
        <Navbar />
        <v-content class="mx-4 mb-4">
          <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
// import PageHeader from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>
