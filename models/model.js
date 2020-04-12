const idMaker = require('shortid')
const jsonFile = require('jsonfile')
const fs = require('fs')
const JSON_INDENT_SPACES = 4

class Model {

  static _connection = ''
  static _keysToCheck = ['_id']

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
    if (!fs.existsSync(this._connection)) {
      throw `DB for ${this.name} does not exist`
    }
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
    await this._createDBIfNotExist()
    const jsonArr = this._fetchAll()
    if (await this.hasDuplicates(this.constructor._keysToCheck)) {
      throw Error(`duplicates found while saving`)
    }
    // if (jsonArr.some(item => item._id === this.id)) {
    //   throw`Error saving, duplicate id.`
    // }
    jsonArr.push(this)
    return this._save(jsonArr)
  }

  // for all keys, if any duplicate from in all objs,return false
  async hasDuplicates (keysToCheck) {
    const allObjs = this._fetchAll()
    keysToCheck.every(key => {
      allObjs.some(item => {
        if (item[key] === this[key]) {
          console.warn(`Duplicate value found in ${key}, value is ${item[key]}`)
          return true
        }
        return false
      })

    })
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
      // append if value does not exist
      if (!allObjs[indexToUpdate].includes(value)) {
        allObjs[indexToUpdate][key].push(value)
      }
    } else {
      allObjs[indexToUpdate][key] = value
    }
    this._save(allObjs).catch(e => console.log(e))
  }

  async _createDBIfNotExist () {
    if (!this.isDbExist()) {
      jsonFile.writeFile(this.constructor._connection, [])
        .then(() => console.info(`database created at ${this.constructor._connection}`))
        .catch(e => console.error(`error creating ${this.constructor._connection}`))
    } else {
      console.info(`db found at location ` + this.constructor._connection)
    }
  }

  isDbExist () {
    return fs.existsSync(this.constructor._connection)
  }

  async _save (objArr) {
    await jsonFile.writeFile(this.constructor._connection, objArr, { spaces: JSON_INDENT_SPACES })
    console.info(`${JSON.stringify(this)} has been saved.`)
  }

}

module.exports = Model