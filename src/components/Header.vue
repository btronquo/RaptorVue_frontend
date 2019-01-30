<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{
        name: 'home'
        }">
        Raptor<b>VUE</b>
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
        name: 'action'
        }">
        Actions
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
        name: 'login'
        }">
        <v-icon>mdi-login</v-icon> Login
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
        name: 'register'
        }">
        <v-icon>mdi-account-plus</v-icon> Register
      </v-btn>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        @click="logout">
        <v-icon>mdi-logout</v-icon> Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
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

<style scoped>
.home {
  cursor: pointer;
}
</style>
