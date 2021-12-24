<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col cols="12">
        <v-img class="my-3" contain height="200" />
      </v-col>

      <v-btn
        :loading="loading"
        :disabled="loading"
        color="green"
        class="ma-2 white--text"
        @click="sendEmails"
        large
      >
        Launch
        <v-icon right dark> mdi-rocket-launch </v-icon>
      </v-btn>

    <v-snackbar
      v-model="snackbar"
    >
      {{ send_notification_response }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    </v-row>
  </v-container>
</template>

<script>
import { mapGetters} from 'vuex';

export default {
  name: "HelloWorld",

  data: () => ({
    loading: false,
    snackbar: false
  }),

  computed: {
    ...mapGetters({
      send_notification_response: 'getSendNotificationResponse'
    })
  },

  methods: {
    async sendEmails() {
      this.loading = true
      const formData = new FormData();
      formData.append("_method", "POST")

      await this.$store.dispatch('launchTask', formData)
      this.snackbar = true
      this.loading = false
      await this.$store.dispatch('setTotalOrders', formData)
      await this.$store.dispatch('setEmailsSent', formData)
      
    }
  }

  // },
};
</script>
