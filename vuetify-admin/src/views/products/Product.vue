<template>
    <v-container>
      <div class="row">
        <div class="col-3">
          <list-product></list-product>
        </div>
        <div class="col">
          <h3>TITEL</h3>
          <div class="row">
            <div class="col-4" v-for="item in items" :key="item.id">
              <item :itemName="item.name" :itemPrice="item.price" :itemSrc="item.src"/>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="10"
          :total-visible="7"
        ></v-pagination>
      </div>
    </v-container>
</template>

<script>
import Item from '@/components/products/Item.vue'
import ListProduct from '@/components/menus/ListProduct.vue'
export default {
  dada () {
    return {
      items: []
    }
  },
  created () {
    this.setItems()
    // console.log(this.colors)
  },
  methods: {
    setItems () {
      this.items = this.$store.state.items
      console.log(this.items)
    }
  },
  components: {
    Item,
    ListProduct
  }
}
</script>
