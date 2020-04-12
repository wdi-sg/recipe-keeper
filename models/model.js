const idMaker = require('shortid')
const jsonFile = require('jsonfile')
const fs = require('fs')
const JSON_INDENT_SPACES = 4

class Model {

  static _connection = ''

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

  // read and return all objects
  static async findAll () {
    return jsonFile.readFile(this._connection)
  }

  // check ids of objs in arr can be found in db
  static async haveValidRefs (objArr, fk) {
    const allObjs = await this.findAll()
    return objArr.every(obj => {
      const idToCheck = obj[fk]
      return allObjs.some(item => item.id === idToCheck)
    })
  }

  // if not found return undefined else return new obj
  // deseialized to obj for easier update/delete ops
  static async findById (id) {
    try {
      const objs = await jsonFile.readFile(this._connection)
      const raw = objs.find(item => item._id === id)
      if (raw) {
        return this.deSerializeJson(raw)
      }
    } catch (e) {
      console.error('Error reading file:', e)
    }
  }

  static async deSerializeJson (rawJson) {
    return Object.create(this.prototype, Object.getOwnPropertyDescriptors(rawJson))
  }

  // fetch existing array and append new
  async save () {
    this._createDBIfNotExist()
    const jsonArr = await this._fetchAll()
    if (jsonArr.some(item => item._id === this.id)) {
      throw`Error saving, duplicate id.`
    }
    jsonArr.push(this)
    this._save(jsonArr)
  }

  async _fetchAll () {
    return jsonFile.readFile(this.constructor._connection)
  }

  // if appendArr, append new values into existing arr
  async update ([key, value], appendArr = false) {
    const allObjs = await this._fetchAll()
    if (!value) {
      console.warn(`empty value is provided to update ${key}`)
    }
    const indexToUpdate = allObjs.findIndex(item => item._id === this.id)
    if (indexToUpdate < 0) {
      console.warn(`could not find item of id ${this.id}`)
      return false
    }
    if (appendArr && Array.isArray(allObjs[indexToUpdate][key])) {
      allObjs[indexToUpdate][key].push(value)
    } else {
      allObjs[indexToUpdate][key] = value
    }
    this._save(allObjs).catch(e => console.log(e))
  }

  _createDBIfNotExist () {
    if (!fs.existsSync(this.constructor._connection)) {
      jsonFile.writeFile(this.constructor._connection, [])
        .then(() => console.info(`database created at ${this.constructor._connection}`))
        .catch(e => console.error(`error creating ${this.constructor._connection}`))
    } else {
      console.info(`db found at location ` + this.constructor._connection)
    }
  }

  async _save (objArr) {
    try {
      await jsonFile.writeFile(this.constructor._connection, objArr, { spaces: JSON_INDENT_SPACES })
      console.info(`${JSON.stringify(this)} has been saved.`)
    } catch (e) {
      console.error(`error saving ${this.constructor.name}: ${JSON.stringify(objArr)}. \n ${e}`)
    }
  }

}

module.exports = Model