<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">{{ title }}</h1>
    <v-container class="my-5">
        <v-card flat class="pa-3">
          <v-card-title>
            Compliances list
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            >
            </v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="compliances"
            :search="search"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.version }}</td>
              <td>{{ props.item.productName }}</td>
              <td>{{ props.item.createdAt }}</td>
              <td>{{ props.item.state }}</td>
            </template>
            <v-alert slot="no-results" :value="true" color="warning" icon="mdi-alert">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
          </v-card>
    </v-container>
  </div>
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
      title: "Dashboard",
      search: '',
        headers: [
          {
            text: 'Name',
            value: 'name'
          },
          {
            text: 'Version',
            value: 'version'
          },
          {
            text: 'Product',
            value: 'productName'
          },
          {
            text: 'Created At',
            value: 'createdAt'
          },
          {
            text: 'State',
            value: 'state'
          }
        ],
        compliances: [
          {
            name: '18-U',
            version: 'production',
            productName: 'KOBBY',
            createdAt: '18-05-1989',
            state: '100%'
          },
          {
            name: '18-U',
            version: 'recette',
            productName: 'KOBBY',
            createdAt: '18-05-1989',
            state: '100%'
          }
        ]
    }
  }
}
</script>
