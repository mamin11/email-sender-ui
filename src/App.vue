<template>
  <v-app>
    <v-app-bar app color="dark" dark class="app-bar">
      <v-spacer class="app-row">EMAIL-SENDER</v-spacer>

      <v-row class="app-row" align="center" justify="end">
        <v-col cols="2">
          <v-badge color="red" :content="totalOrders" overlap>
            total orders
            <v-btn icon>
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </v-badge>
        </v-col>

        <v-col cols="2">
          <v-badge color="green" :content="emailsSent" overlap>
            email sent
            <v-btn icon>
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </v-badge>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters} from 'vuex';

export default {
  name: "App",

  mounted() {
    this.getAndSetData()
  },

  data: () => ({
    //
  }),

  computed: {
    ...mapGetters({
      totalOrders: 'getTotalOrders',
      emailsSent: 'getEmailsSent',
      send_notification_response: 'getSendNotificationResponse'
    })
  },

  methods: {
    async getAndSetData() {
      const formData = new FormData();
      formData.append("_method", "GET")

      await this.$store.dispatch('setTotalOrders', formData)
      await this.$store.dispatch('setEmailsSent', formData)
    }
  }

};
</script>

<style scoped>
.app-bar {
  padding: 15px 10px !important;
}
.app-row {
  padding-bottom: 15px;
}
</style>
