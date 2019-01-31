<template>
  <v-app id="error">
      <v-container fluid fill-height>
        <v-layout align-center justify-center row>
          <div class="text-md-center">
            <h1 class="display-4">4..0..4</h1>
            <h2 class="display-2">Hum, it seems that the page your looking for doesn't exist..</h2>
            <div>
              <v-btn color="primary" @click="$router.push({ name: 'home' })">Go To Home</v-btn>
            </div>
          </div>
        </v-layout>
      </v-container>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>
