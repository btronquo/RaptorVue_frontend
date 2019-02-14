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
            v-model="valid"
          >
            <v-text-field
              label="Version"
              v-model="item.version"
              :rules="versionRules"
              required
            ></v-text-field>

            <v-select
              v-model="item.forproduct"
              :items="products"
              name="products"
              label="Product"
              item-text="name"
              item-value="id"
              :rules="forproductRules"
              required
            ></v-select>

            <v-text-field
              label="Name and description of item"
              v-model="item.name"
              :rules="descriptionRules"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              @click="add"
            >
              Create
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
            :custom-sort="items.id"
            :disable-initial-sort="true"
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
import ProductsService from '@/services/ProductsService'

export default {
  name: 'Items',
  data () {
    return {
      id: 1,
      title: 'Items',
      search: '',
      valid: true,
      items: [],
      products: [],
      item: {
        version: null,
        forproduct: null,
        name: null
      },
      versionRules: [
        v => !!v || 'Version is required'
      ],
      forproductRules: [
        v => !!v || 'Product name is required'
      ],
      descriptionRules: [
        v => !!v || 'Description is required'
      ],
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
      if (this.$refs.form.validate()) {
        await ItemsService.post(this.item).then(() => {
          this.items.push(this.item)
          this.item = {}
          this.$refs.form.reset()
        })
      }
    }
  },
  async mounted () {
    // request to the backend to get items
    this.items = (await ItemsService.index()).data
    this.products = (await ProductsService.index()).data
  }
}
</script>
