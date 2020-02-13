<template>
    <v-dialog
      v-model="dialogConfirm"
      max-width="290"
    >
    <template v-slot:activator="{ on }">
      <v-btn text icon v-on="on">
        <v-icon small>delete</v-icon>
      </v-btn>
    </template>
      <v-card>
        <v-card-title class="headline">Delete ?</v-card-title>

        <v-card-text>
         {{ index }}
         {{ btnStatus }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialogConfirm = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="deleteItem"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ['index', 'btnStatus'],
  data () {
    return {
      dialogConfirm: false,
      items: []
    }
  },
  methods: {
    deleteItem () {
      this.items = this.$store.state.items
      let key = this.items.find((item) => item.id === this.index)
      this.items.splice(this.items.indexOf(key), 1)
    }
  }
}
</script>
