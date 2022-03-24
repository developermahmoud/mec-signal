<template>
  <div>
    <v-dialog v-model="dialog" transition="dialog-top-transition" persistent>
      <v-card>
        <v-card-title></v-card-title>
        <v-card-text>
          <div>
            <v-btn text @click="$emit('close-dialog')"
              ><v-icon>mdi-arrow-left</v-icon> Back to list</v-btn
            >
          </div>
          <div class="grey darken-3 mt-7">
            <v-row no-gutters>
              <v-col cols="3">
                <div class="d-flex justify-space-between align-center">
                  <div class="text-center mb-10" style="width: 10%">
                    <IconsFilter />
                  </div>
                  <div class="text-center white--text" style="width:60%;">
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
  background: linear-gradient(80deg, #51b75a 0%, #424242 100%);
}
.bgRed {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff0000),
    to(#48485f)
  );
  background: linear-gradient(80deg, #ff0000 0%, #424242 100%);
}
</style>