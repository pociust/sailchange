const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  sailnumber: { type: String, required: false },
  country: { type: String, required: false },
  name: { type: String, required: false },
  owner: { type: String, required: false },
  rating: {
    gph: { type: Number, required: false },
    osn: { type: Number, required: false },
    triple_offshore: {
      0: { type: Number, required: false },
      1: { type: Number, required: false },
      2: { type: Number, required: false },
    }
  },
  boat: {
    builder: { type: String, required: false },
    type: { type: String, required: true },
    designer: { type: String, required: false },
    year: { type: Number, required: false },
    sizes: {
      loa: { type: Number, required: false },
      beam: { type: Number, required: false },
      draft: { type: Number, required: false },
      displacement: { type: Number, required: false },
      genoa: { type: Number, required: false },
      main: { type: Number, required: false },
      spinnaker: { type: Number, default: 0 },
      spinnaker_asym: { type: Number, default: 0 },
      crew: { type: Number, required: false },
      wetted_surface: { type: Number, required: false },

    }
  },
  vpp: {
    angles: {
      0: { type: Number, default: 52 },
      1: { type: Number, default: 60 },
      2: { type: Number, default: 75 },
      3: { type: Number, default: 90 },
      4: { type: Number, default: 110 },
      5: { type: Number, default: 120 },
      6: { type: Number, default: 135 },
      7: { type: Number, default: 150 },
    },
    speeds: {
      0: { type: Number, default: 6 },
      1: { type: Number, default: 8 },
      2: { type: Number, default: 10 },
      3: { type: Number, default: 12 },
      4: { type: Number, default: 14 },
      5: { type: Number, default: 16 },
      6: { type: Number, default: 20 },
    },
    52: {
      0: { type: Number, required: false },
      1: { type: Number, required: false },
      2: { type: Number, required: false },
      3: { type: Number, required: false },
      4: { type: Number, required: false },
      5: { type: Number, required: false },
      6: { type: Number, required: false },
    },
    60: {
      0: { type: Number, required: false },
      1: { type: Number, required: false },
      2: { type: Number, required: false },
      3: { type: Number, required: false },
      4: { type: Number, required: false },
      5: { type: Number, required: false },
      6: { type: Number, required: false },
    },
    75: {
      0: { type: Number, required: false },
      1: { type: Number, required: false },
      2: { type: Number, required: false },
      3: { type: Number, required: false },
      4: { type: Number, required: false },
      5: { type: Number, required: false },
      6: { type: Number, required: false },
    },
    90: {
      0: { type: Number, required: false },
      1: { type: Number, required: false },
      2: { type: Number, required: false },
      3: { type: Number, required: false },
      4: { type: Number, required: false },
      5: { type: Number, required: false },
      6: { type: Number, required: false },
    },
    110: {
      0: { type: Number, required: false },
      1: { type: Number, required: false },
      2: { type: Number, required: false },
      3: { type: Number, required: false },
      4: { type: Number, required: false },
      5: { type: Number, required: false },
      6: { type: Number, required: false },
    },
    120: {
      0: { type: Number, required: false },
      1: { type: Number, required: false },
      2: { type: Number, required: false },
      3: { type: Number, required: false },
      4: { type: Number, required: false },
      5: { type: Number, required: false },
      6: { type: Number, required: false },
    },
    135: {
      0: { type: Number, required: false },
      1: { type: Number, required: false },
      2: { type: Number, required: false },
      3: { type: Number, required: false },
      4: { type: Number, required: false },
      5: { type: Number, required: false },
      6: { type: Number, required: false },
    },
    150: {
      0: { type: Number, required: false },
      1: { type: Number, required: false },
      2: { type: Number, required: false },
      3: { type: Number, required: false },
      4: { type: Number, required: false },
      5: { type: Number, required: false },
      6: { type: Number, required: false },
    },
    beat_angle: {
      0: { type: Number, required: false },
      1: { type: Number, required: false },
      2: { type: Number, required: false },
      3: { type: Number, required: false },
      4: { type: Number, required: false },
      5: { type: Number, required: false },
      6: { type: Number, required: false },
    },
    beat_vmg: {
      0: { type: Number, required: false },
      1: { type: Number, required: false },
      2: { type: Number, required: false },
      3: { type: Number, required: false },
      4: { type: Number, required: false },
      5: { type: Number, required: false },
      6: { type: Number, required: false },
    },
    run_angle: {
      0: { type: Number, required: false },
      1: { type: Number, required: false },
      2: { type: Number, required: false },
      3: { type: Number, required: false },
      4: { type: Number, required: false },
      5: { type: Number, required: false },
      6: { type: Number, required: false },
    },
    run_vmg: {
      0: { type: Number, required: false },
      1: { type: Number, required: false },
      2: { type: Number, required: false },
      3: { type: Number, required: false },
      4: { type: Number, required: false },
      5: { type: Number, required: false },
      6: { type: Number, required: false },
    }

  }
});


const Data = mongoose.model("Sail_data", dataSchema)

module.exports = Data;