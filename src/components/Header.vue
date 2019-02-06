<template>
  <v-toolbar app dark>
    <v-toolbar-title class="mr-4">
      <router-link :to="{ name: 'home' }">
        <img src="static/logo.png" width="16px" />
      </router-link>
      <router-link :to="{ name: 'home' }" class="text">
         RaptorVUE
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

<style>
.home {
  cursor: pointer;
}

.toolbar {
  font-weight: bold;
  font-size: 18px;
}

.text {
  padding-left: 15px;
  color: white;
  text-decoration:none;
}
</style>
