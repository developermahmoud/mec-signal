<template>
  <div>
    <v-toolbar class="mb-5 mt-2 transparent" flat>
      <v-toolbar-title></v-toolbar-title>
      <div class="mb-2">Confidence</div>
      <v-range-slider
        v-model="range"
        hide-details
        class="mx-2"
        max="50"
        min="-50"
      >
        <template v-slot:prepend> {{ range[0] }}% </template>
        <template v-slot:append> {{ range[1] }}% </template>
      </v-range-slider>
      <v-select
        filled
        dense
        hide-details
        placeholder="Class"
        single-line
      ></v-select>
      <v-select
        class="mx-2"
        filled
        dense
        hide-details
        placeholder="Status"
      ></v-select>
      <v-select filled dense hide-details placeholder="Language"></v-select>
    </v-toolbar>
    <v-row>
      <v-col cols="2" v-for="i in 18" :key="i">
        <v-card outlined flat :class="`${i % 2 == 0 ? 'bgGreen' : 'bgRed'}`">
          <v-card-title>
            <IconsBitcoin />
            <v-spacer></v-spacer>
            <span class="body-2"> Buy Limit</span>
          </v-card-title>
          <v-card-text class="white--text">
            <h2 class="text-center">Ethereum</h2>
            <div class="mt-5 d-flex justify-space-between">
              <div></div>
              <div class="align-right">Confidence</div>
              <div>60%</div>
            </div>
            <div class="mt-2 d-flex justify-space-between">
              <div></div>
              <div>Target</div>
              <div>0.849</div>
            </div>
            <div class="mt-5 d-flex justify-space-between">
              <div></div>
              <div>Entry</div>
              <div>0.801</div>
            </div>
            <div class="mt-2 d-flex justify-space-between">
              <div></div>
              <div>Stop</div>
              <div>0.784</div>
            </div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn large outlined width="100">{{
              i % 2 == 0 ? "Sell" : "Buy"
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      range: [-20, 70],
    };
  },
};
</script>

<style scoped>
.bgGreen {
  background: url(https://prodstorage.azureedge.net/Widgets/lib/@1.0.0/af19e2ef3969884139d89620ff76e38e.svg)
      no-repeat 15% 50%,
    linear-gradient(0deg, #20ac69 0, #48485f 150px);
}
.bgRed {
  background: url(https://prodstorage.azureedge.net/Widgets/lib/@1.0.0/af19e2ef3969884139d89620ff76e38e.svg)
      no-repeat 15% 50%,
    linear-gradient(0deg, #eb3d52 0, #48485f 150px);
}
</style>