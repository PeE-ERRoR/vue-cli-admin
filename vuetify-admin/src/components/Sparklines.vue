<template>
  <v-card
    class="mx-auto text-center"
    color="teal lighten-2"
    drak
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
             ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">Sales Last 24h</div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn block text>Go to Report</v-btn>
    </v-card-actions>
    <v-btn @click="logsa">33</v-btn>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      sale: this.$store.state.sales,
      value: [
        1, 2, 3, 4
      ]
    }
  },
  methods: {
    logsa () {
      console.log(555)
      console.log(this.sale.price)
    }
  }

}
</script>
