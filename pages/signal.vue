<template>
  <div>
    <v-toolbar class="mb-5 mt-2 transparent" flat>
      <div class="mb-2">
        <v-btn icon>
          <v-icon>mdi-grid-large</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-view-agenda-outline</v-icon>
        </v-btn>
        Confidence
      </div>
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
        :menu-props="{ bottom: true, offsetY: true }"
        placeholder="Class"
        style="width: 150px"
        :items="['FX', 'Commodities', 'Indices', 'Crypto', 'Stocks']"
        single-line
      ></v-select>
      <v-select
        class="mx-2"
        filled
        dense
        hide-details
        :menu-props="{ bottom: true, offsetY: true }"
        :items="[
          'Expired',
          'Sell Limit',
          'Sell Stop',
          'Buy Limit',
          'Buy stop',
          'Live Trade',
        ]"
        style="width: 150px"
        placeholder="Status"
      ></v-select>
    </v-toolbar>
    <v-row>
      <v-col cols="3" v-for="i in 18" :key="i">
        <v-card outlined flat :class="`${i % 2 == 0 ? 'bgGreen' : 'bgRed'}`">
          <v-card-title>
            <IconsBitcoin />
            <v-spacer></v-spacer>
            <span class="body-2"> {{ i % 2 == 0 ? "Buy" : "Sell" }} Limit</span>
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
            <v-btn
              large
              @click="
                chartDialog = true;
                operation = i % 2 == 0 ? 'Buy' : 'Sell';
              "
              outlined
              width="100"
              >{{ i % 2 == 0 ? "Buy" : "Sell" }}</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <dialogs-chart
      v-if="chartDialog"
      :dialog="chartDialog"
      :operation="operation"
      @close-dialog="chartDialog = false"
    />
  </div>
</template>

<script>
import DialogsChart from "../components/dialogs/DialogsChart.vue";
export default {
  components: { DialogsChart },
  head() {
    return {
      script: [
        {
          src: "https://s3.tradingview.com/tv.js",
        },
      ],
    };
  },
  data() {
    return {
      chartDialog: false,
      operation: "buy",
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