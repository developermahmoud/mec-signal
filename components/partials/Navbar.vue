<template>
  <div>
    <v-navigation-drawer class="secondaryBackground" v-model="drawer" fixed app>
      <div class="ma-3">
        <v-img src="https://www.houseofborse.com/img/houseofborse-logo.svg" />
      </div>
      <v-list class="py-0">
        <v-list-item router exact to="/" active-class="primary">
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Trading Tools</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item link to="/signal">
            <v-list-item-icon>
              <v-icon>mdi-circle-small</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Signal centry</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/video">
            <v-list-item-icon>
              <v-icon>mdi-circle-small</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Video commentary</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app class="background">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar tile size="25" class="mr-5" v-bind="attrs" v-on="on">
            <v-img src="/gb.ef28e7d9.svg"></v-img>
          </v-avatar>
        </template>
        <v-list class="py-0" dense>
          <v-list-item class="secondaryBackground">
            <v-list-item-title>EN(ENGLISH)</v-list-item-title>
            <v-list-item-action><v-img width="40" src="/gb.ef28e7d9.svg"></v-img></v-list-item-action>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar v-bind="attrs" v-on="on">
            <v-icon large>mdi-account-circle</v-icon>
          </v-avatar>
        </template>
        <v-list class="py-0" dense>
          <v-list-item class="secondaryBackground">
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="secondaryBackground">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>