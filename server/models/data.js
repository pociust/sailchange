const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  sailnumber: { type: String },
  country: { type: String },
  name: { type: String },
  owner: { type: String },
  rating: {
    gph: { type: Number },
    osn: { type: Number },
    triple_offshore: {
      0: { type: Number },
      1: { type: Number },
      2: { type: Number },
    }
  },
  boat: {
    builder: { type: String },
    type: { type: String, required = true },
    designer: { type: String },
    year: { type: Number },
    sizes: {
      loa: { type: Number },
      beam: { type: Number },
      draft: { type: Number },
      displacement: { type: Number },
      genoa: { type: Number },
      main: { type: Number },
      spinnaker: { type: Number, default: 0 },
      spinnaker_asym: { type: Number, default: 0 },
      crew: { type: Number },
      wetted_surface: { type: Number },

    }
  },
  vpp: {
    angles: {
      0: 52,
      1: 60,
      2: 75,
      3: 90,
      4: 110,
      5: 120,
      6: 135,
      7: 150,
    },
    speeds: {
      0: 6,
      1: 8,
      2: 10,
      3: 12,
      4: 14,
      5: 16,
      6: 20,
    },
    52: {
      0: { type: Number },
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
    },
    60: {
      0: { type: Number },
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
    },
    75: {
      0: { type: Number },
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
    },
    90: {
      0: { type: Number },
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
    },
    110: {
      0: { type: Number },
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
    },
    120: {
      0: { type: Number },
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
    },
    135: {
      0: { type: Number },
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
    },
    150: {
      0: { type: Number },
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
    },
    beat_angle: {
      0: { type: Number },
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
    },
    beat_vmg: {
      0: { type: Number },
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
    },
    run_angle: {
      0: { type: Number },
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
    },
    run_vmg: {
      0: { type: Number },
      1: { type: Number },
      2: { type: Number },
      3: { type: Number },
      4: { type: Number },
      5: { type: Number },
      6: { type: Number },
    }

  }
});

const Data = mongoose.model("sail_change", dataSchema)

module.exports = Data;