<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="blue">
                <v-toolbar-title>Log In</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    prepend-icon="mdi-email"
                    id="email"
                    name="email"
                    label="Email"
                    type="text"
                    autocomplete="current-email"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    prepend-icon="mdi-key-variant"
                    name="password"
                    label="Password"
                    type="password"
                    autocomplete="current-password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
              <v-btn
                dark
                class="cyan"
                @click="login"
              >
                Login
              </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        // redirect to actions
        this.$router.push({
          name: 'action'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
