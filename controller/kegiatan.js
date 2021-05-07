const kegiatanmodel = require('../model/kegiatan')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) => {
  kegiatanmodel.create(data)
  .then(() => {
      resolve ({
          status: true,
          pesan: 'Berhasil input Kegiatan'
      })
  }).catch(() => reject ({
      status: false,
      pesan: 'Gagal Input Kegiatan'
  }))
})

exports.getAll = () =>
new Promise((resolve, reject) => {
    kegiatanmodel.find()
    .then(result => {
        resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data',
            result: result
        })
    }).catch(() => reject({
        status: true,
        pesan: 'Gagal Mendapatkan Data',
        result: []
    }))
})

exports.getById = (id) =>
new Promise((resolve, reject) => {
        kegiatanmodel.findOne({
            _id: objectId(id)
        }).then(result => resolve({
            status: true,
            pesan: 'Berhasil Mendapatkan Data',
            result: result
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Mendapatkan Data',
            result: null
        }))
})

exports.update = (id, data) =>
    new Promise((resolve, reject) => {
        kegiatanmodel.updateOne({
            _id: objectId(id)
        }, data).then(() => resolve({
            status: true,
            pesan: 'Berhasil Update Data'
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Update'
        }))
    })

exports.delete = (id) =>
    new Promise((resolve, reject) => {
        kegiatanmodel.deleteOne({
            _id: objectId(id)
        }).then(() => resolve({
            status: true,
            pesan: 'Berhasil Hapus Data'
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Hapus Data'
        }))
    })