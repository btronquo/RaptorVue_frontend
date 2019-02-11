<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">{{ title }}</h1>
    <v-container class="my-5">
      <v-card flat class="pa-3" color="blue-grey lighten-5">
        <v-card-title>
          Add item
        </v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            lazy-validation
          >
            <v-text-field
              label="Version"
              v-model="item.version"
              required
            ></v-text-field>

            <v-text-field
              label="Name and description of item"
              v-model="item.name"
              required
            ></v-text-field>

            <v-btn
              color="success"
              @click="add"
            >
              Create
            </v-btn>

            <v-btn
              color="error"
              @click="reset"
            >
              Reset Form
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
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
            :items="items"
            :search="search"
          >
            <template slot="items" slot-scope="props" >
              <td> {{ props.item.version }}</td>
              <td> {{ props.item.forproduct }}</td>
              <td> {{ props.item.name }}</td>
              <td> {{ props.item.comment }}</td>
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
import ItemsService from '@/services/ItemsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  name: 'Items',
  data () {
    return {
      id: 1,
      title: 'Items',
      search: '',
      valid: true,
      items: [],
      item: {
        version: null,
        name: null
      },
      headers: [
        {
          text: 'Version',
          value: 'version'
        },
        {
          text: 'Product',
          value: 'forproduct'
        },
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Comment',
          value: 'comment'
        }
      ]
    }
  },
  methods: {
    async add () {
      await ItemsService.post(this.item).then(() => {
        this.items.push(this.item)
        this.item = {}
      })

    }
  },
  async mounted () {
    // request to the backend to get item
    this.items = (await ItemsService.index()).data
  }
}
</script>
