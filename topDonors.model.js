const mongoose = require('mongoose');

const topDonorSchema = new mongoose.Schema({
  donorId: { type: mongoose.Types.ObjectId, required: true, ref: 'Donor' },
  month: { type: Number, required: true }, // 1..12
  year: { type: Number, required: true },
  totalDonatedILS: { type: Number, required: true }, // نجمّع بعد تحويل لـ ILS
  donationsCount: { type: Number, default: 0 },
  rank: { type: Number },
  snapshotName: { type: String },   // اسم لحظة التسجيل (اختياري)
  snapshotImage: { type: String },  // صورة لحظة التسجيل (اختياري)
  createdAt: { type: Date, default: Date.now }
}, { collection: 'topdonors' });

module.exports  = mongoose.models.TopDonor || mongoose.model('TopDonor', topDonorSchema);

