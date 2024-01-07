const mongoose = require('mongoose');

const rehabCenterSchema = new mongoose.Schema({
  centerName: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  affiliationId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const RehabCenter = mongoose.model('RehabCenter', rehabCenterSchema);

module.exports = RehabCenter;
