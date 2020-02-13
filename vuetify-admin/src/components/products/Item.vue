<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 12 : 2"
      :loading="loading"
      class="mx-auto"
    >
      <v-img
        height="250"
        alt="Vue logo"
        :src="itemSrc"
      >
        <v-expand-transition>
        <div
          v-if="hover"
          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
          style="height: 100%;"
        >
          ${{ itemPrice }}
        </div>
      </v-expand-transition>
      </v-img>
      <v-card-title>{{ itemName }}</v-card-title>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 subtitle-1 black--text">
          $ • {{ itemPrice }}
        </div>

        <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <!-- <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text> -->

      <v-card-actions>
        <v-btn
          color=""
          text
          @click="reserve"
        >
          <v-icon left>mdi-heart</v-icon>
          Favorite
        </v-btn>
        <v-btn
          color="green accent-4"
          right
          @click="reserve"
        >
          <v-icon left>mdi-cart</v-icon>
          By now
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ['itemSrc', 'itemName', 'itemPrice'],
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
