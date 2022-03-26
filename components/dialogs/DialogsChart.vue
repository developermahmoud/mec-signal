<template>
  <div>
    <v-dialog v-model="dialog" transition="dialog-top-transition" persistent>
      <v-card class="secondaryBackground">
        <v-card-title></v-card-title>
        <v-card-text>
          <div>
            <v-btn text @click="$emit('close-dialog')"
              ><v-icon>mdi-arrow-left</v-icon> Back to list</v-btn
            >
          </div>
          <div class="background mt-7">
            <v-row no-gutters>
              <v-col cols="3">
                <div class="d-flex justify-space-between align-center">
                  <div class="text-center mb-10" style="width: 10%">
                    <IconsFilter />
                  </div>
                  <div class="text-center white--text" style="width: 60%">
                    <h2>Palladium</h2>
                    <strong>Palladium</strong>
                    <h4 class="mt-1">2531</h4>
                  </div>
                  <v-progress-circular
                    style="width: 20%"
                    class="my-2"
                    rotate="360"
                    size="69"
                    width="10"
                    value="100"
                    color="green"
                  >
                    100%
                  </v-progress-circular>
                  <div class="text-center" style="width: 10%">
                    <v-icon class="mb-10">mdi-information</v-icon>
                  </div>
                </div>
              </v-col>
              <v-col cols="9">
                <div class="d-flex align-center justify-space-between">
                  <div
                    style="width: 20%"
                    :class="`${
                      operation == 'Buy' ? 'bgGreen' : 'bgRed'
                    } py-5 text-center white--text`"
                  >
                    <div>{{ operation }} limit</div>
                    <strong>4.72626</strong>
                  </div>
                  <div style="width: 20%" class="text-center white--text">
                    <div>Target 1</div>
                    <strong>4.72627</strong>
                  </div>
                  <div style="width: 20%" class="text-center white--text">
                    <div>Target 2</div>
                    <strong>8.9191</strong>
                  </div>
                  <div style="width: 20%" class="text-center white--text">
                    <div>Stop</div>
                    <strong>6.22222</strong>
                  </div>
                  <div style="width: 20%" class="text-center white--text">
                    <div>Confidence</div>
                    <v-icon small color="green">mdi-minus-thick</v-icon>
                    <v-icon small color="green">mdi-minus-thick</v-icon>
                    <v-icon small color="green">mdi-minus-thick</v-icon>
                    <v-icon small color="black">mdi-minus-thick</v-icon>
                    <v-icon small color="black">mdi-minus-thick</v-icon>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
          <v-row class="my-5">
            <v-col cols="7">
              <h2 class="text-center white--text">Market Chart</h2>
              <div class="mt-5">
                <div class="tradingview-widget-container">
                  <div id="tradingview_2e912"></div>
                </div>
              </div>
            </v-col>
            <v-col cols="5">
              <v-row>
                <v-col cols="6">
                  <h2 class="text-center white--text">Total Idea</h2>
                </v-col>
                <v-col cols="6">
                  <h2 class="text-center white--text">
                    <v-icon
                      small
                      class="mr-2"
                      :color="operation == 'Buy' ? 'green' : 'red'"
                      >mdi-circle</v-icon
                    >{{ operation }} Stop
                  </h2>
                </v-col>
              </v-row>
              <div class="text-center white--text">
                <div class="pb-0 mb-0">Published: 03/25/2022 2:47 PM EET</div>
                <div>Expires: 03/26/2022 4:00 PM EET</div>
                <div class="mt-3">We are trading at overbought extremes</div>
                <div>Expect trading to remain mixed and volatile</div>
                <div>
                  A break of the recent low at 43600 should result in a further
                  move lower
                </div>
              </div>
              <h1 class="mt-5 text-center white--text">
                Next Volatility Events
              </h1>
              <div style="width: 40%; margin: auto" class="text-center">
                <v-list dense class="py-0">
                  <v-list-item class="secondaryBackground">
                    <v-list-item-avatar size="30" color="red">
                      P
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="justify-center"
                        >4:00 PM EET</v-list-item-title
                      >
                      <v-list-item-subtitle class="text-decoration-line-through"
                        >Pending Home Sales (MoM)</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="secondaryBackground">
                    <v-list-item-avatar size="30" color="green">
                      R
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="justify-center"
                        >4:00 PM EET</v-list-item-title
                      >
                      <v-list-item-subtitle class="text-decoration-line-through"
                        >Pending Home Sales (MoM)</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="secondaryBackground">
                    <v-list-item-avatar size="30" color="orange">
                      M
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="justify-center"
                        >4:00 PM EET</v-list-item-title
                      >
                      <v-list-item-subtitle class="text-decoration-line-through"
                        >Pending Home Sales (MoM)</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </div>
              <div class="d-flex justify-space-between align-center mt-8">
                <div class="text-center white--text">
                  <div class="red rounded" style="height: 40px; width: 7px">
                    &nbsp;
                  </div>
                </div>
                <div class="text-center white--text">
                  <strong>Resistance 2</strong>
                  <h2>45500</h2>
                </div>
                <div class="text-center white--text">
                  <strong>Resistance 3</strong>
                  <h2>45500</h2>
                </div>
                <div class="text-center white--text">
                  <strong>Resistance 1</strong>
                  <h2>45500</h2>
                </div>
              </div>
              <div class="d-flex justify-space-between align-center mt-8">
                <div class="text-center white--text">
                  <div class="green rounded" style="height: 40px; width: 7px">
                    &nbsp;
                  </div>
                </div>
                <div class="text-center white--text">
                  <strong>Support 2</strong>
                  <h2>45500</h2>
                </div>
                <div class="text-center white--text">
                  <strong>Support 3</strong>
                  <h2>45500</h2>
                </div>
                <div class="text-center white--text">
                  <strong>Support 1</strong>
                  <h2>45500</h2>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
    operation: {
      type: String,
      required: true,
    },
  },
  mounted() {
    new TradingView.widget({
      width: "100%",
      height: 500,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_2e912",
    });
  },
};
</script>

<style scope>
.bgGreen {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#51b75a),
    to(#48485f)
  );
  background: linear-gradient(80deg, #51b75a 0%, #1f2033 100%);
}
.bgRed {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff0000),
    to(#48485f)
  );
  background: linear-gradient(80deg, #ff0000 0%, #1f2033 100%);
}
</style>