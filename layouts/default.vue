<template>
  <v-app dark>
    <navbar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer app class="justify-center">
      <div>
        © Copyright {{ new Date().getFullYear() }} Everything Trading. All
        rights reserved
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "../components/partials/Navbar.vue";
export default {
  components: { Navbar },
  name: "DefaultLayout",
  data() {
    return {
      drawer: true,
    };
  },
};
</script>
