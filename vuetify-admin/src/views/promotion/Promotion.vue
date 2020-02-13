<template>
    <div>
        <v-container>
          <div>
            <v-breadcrumbs :items="menu">
              <template v-slot:divider>
                <v-icon>mdi-forward</v-icon>
              </template>
            </v-breadcrumbs>
          </div>

          <slot name="header"></slot>
            <div class="row">
              <div class="col-3">
                <slot name="lists"></slot>
              </div>
              <div class="col-9">
                <h3>FLASH SALE</h3>
                <div class="row">
                  <div class="col-1 col-sm-6 col-md-4 col-lg-4" v-for="item in items" :key="item.id">
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
    </div>
</template>

<script>
import Item from '@/components/products/Item'
export default {
  data () {
    return {
      menu: [
        {
          text: 'Home',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: 'Promotion',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ],
      items: this.$store.state.products,
      page: 1
    }
  },
  components: {
    Item
  }
}
</script>
