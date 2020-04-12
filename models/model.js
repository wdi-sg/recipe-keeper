const idMaker = require('shortid')
const jsonFile = require('jsonfile')

class Model {

  constructor () {
    this._id = idMaker.generate()
    this._date_created = new Date()
  }

  get id () {
    return this._id
  }

  get date_created () {
    return this._date_created
  }

  static _deSerialize (rawJson) {
    return rawJson.map(json => {
      return Object.create((this.prototype, Object.getOwnPropertyDescriptors(json)))
    })
  }

  // // return all ingredients obj json
  // static async findAll () {
  //   const rawJson = await jsonFile.readFile()
  //   return this._deSerialize(rawJson)
  // }
  //
  // static async findById (id) {
  //   let objs
  //   try {
  //     objs = await jsonFile.readFile(this._connection)
  //   } catch (e) {
  //     console.trace('Error reading file:', e)
  //     return -1
  //   }
  //   return objs.find(item => item._id === id)
  // }

  async save () {
    // check if file exist
    // open file
    // if file exist open file, else create file
    // check if id exist
    return jsonFile.writeFile(this._connection, JSON.stringify(this))
  }

}

module.exports = Model