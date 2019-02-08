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
              <td>{{ props.item.version }}</td>
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.comment }}</td>
              <td>{{ props.item.forproduct }}</td>
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
  name: 'Items',
  data () {
    return {
      title: 'Items',
      search: '',
      headers: [
        {
          text: 'Version',
          value: 'version'
        },
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Comment',
          value: 'comment'
        },
        {
          text: 'Product',
          value: 'forproduct'
        }
      ],
      items: [
        {
          version: '18-E',
          name: 'User A click on dashboard, he can see the dashboard properly working',
          comment: 'this is a comment',
          forproduct: 'kureha'
        }
      ]
    }
  }
}
</script>
