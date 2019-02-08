<template>
  <nav>
    <v-toolbar app flat>
      <v-toolbar-side-icon v-if="$store.state.isUserLoggedIn" class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Raptor</span>
        <span>VUE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        color="red"
        @click="logout"
      >
        <span>Sign Out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        color="blue"
        :to="{ name: 'login' }"
      >
        <span>Login</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        color="blue"
        :to="{ name: 'register' }"
        >
        <span>New account</span>
        <v-icon right>mdi-account-plus</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app enable-resize-watcher class="cyan elevation-5">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        {icon: 'mdi-home', text: 'Dashboard', route: '/dashboard'},
        {icon: 'mdi-folder', text: 'Dashboard', route: '/dashboard'},
        {icon: 'mdi-account-details', text: 'Dashboard', route: '/dashboard'}
      ]
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // redirect to index
      this.$router.push({
        name: 'goodbye'
      })
    }
  }
}
</script>

<style>
</style>
