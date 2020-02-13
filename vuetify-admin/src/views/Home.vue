<template>
  <div class="template">
    <v-system-bar></v-system-bar>
    <v-toolbar dark>
        <v-toolbar-title>
          <v-btn icon to="/">
            <v-icon>home</v-icon>
          </v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text to="products">Products</v-btn>
          <v-btn text to="dasbord">Dasbord</v-btn>
        </v-toolbar-items>

        <template v-if="$vuetify.breakpoint.smAndUp">
          <v-btn icon>
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
      </v-toolbar>

      <v-banner
        single-line
        :sticky="sticky"
      >
        <v-avatar
          slot="icon"
          color="deep-purple accent-4"
          size="40"
        >
          <v-icon
            icon="mdi-lock"
            color="white"
          >
            mdi-lock
          </v-icon>
        </v-avatar>
        We can't save your edits while you are in offline mode.

        <template v-slot:actions>
          <v-btn
            text
            color="deep-purple accent-4"
          >Get Online</v-btn>
        </template>
      </v-banner>

      <router-view>

        <template v-slot:header>
          <div class="row">
            <div class="col-3">
              <v-parallax
                height="400"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              >
                Promotion
              </v-parallax>
            </div>
            <div class="col-9">
              <v-carousel
                cycle
                height="400"
              >
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                  :src="slide.src"
                >
                </v-carousel-item>
              </v-carousel>
            </div>
          </div>
        </template>
        <template v-slot:lists>
          <v-card
            class="mx-auto"
            tile
          >
            <v-list shaped>
              <v-subheader>PRODUCTS</v-subheader>
              <v-list-item-group v-model="item" color="primary">
                <v-list-item
                  v-for="(list, i) in lists"
                  :key="i"
                  :to="list.link"
                >
                  <v-list-item-icon>
                    <v-icon v-text="list.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="list.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </template>
      </router-view>

      <v-footer
        dark
        padless
      >
        <v-card
          class="flex"
          flat
          tile
        >
          <v-card-title class="green darken-1">
            <strong class="subheading">Get connected with us on social networks!</strong>

            <v-spacer></v-spacer>

            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              dark
              icon
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: [
        { name: 'First', src: require('@/assets/images/rtx.jpg') },
        { name: 'First', src: require('@/assets/images/rtx2060.jpg') },
        { name: 'Second', src: require('@/assets/images/rtx2070.jpg') },
        { name: 'Third', src: require('@/assets/images/rtx2080ti.jpg') },
        { name: 'Fourth', src: require('@/assets/images/rtx2080ti-1.jpg') }
      ],
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ],
      list: 1,
      lists: [
        { text: 'ALL', icon: 'reorder', link: 'products' },
        { text: 'Graphic Card', icon: 'panorama', link: '' },
        { text: 'CPU', icon: 'dialpad', link: '' },
        { text: 'Moniter', icon: 'desktop_access_disabled', link: '' },
        { text: 'Mainbord', icon: 'business', link: '' }
      ]
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    setHeader () {

    }
  }
}
</script>
