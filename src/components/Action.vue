<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center row fill-height>
          <v-card-text align-center>
            <h2 class="text-xs-center">A C T I O N </h2>
            <p class="text-xs-center">Vous êtes sur la page <strong>ACTION</strong></p>
          </v-card-text>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  name: 'Action',
  data(){
    return {
      title: "Action"
    }
  }
}
</script>
