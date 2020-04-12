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
  static async haveValidRefs (objArr) {
    const allObjs = await this.findAll()
    return objArr.all(obj => {
      const idToCheck = obj._id
      return allObjs.some(obj.id === idToCheck)
    })
  }

  //if not found return undefined
  static async findById (id) {
    let objs
    try {
      objs = await jsonFile.readFile(this._connection)
      return objs.find(item => item._id === id)
    } catch (e) {
      console.error('Error reading file:', e)
    }
  }

  // takes in new ingredient obj
  async save () {
    this._createDBIfNotExist()
    const jsonArr = await this._fetchData()
    if (jsonArr.some(item => item._id === this.id)) {
      throw(`Error saving, duplicate id.`)
    }
    jsonArr.push(this)
    await this._save(jsonArr)
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

  // static _deSerialize (rawJson) {
  //   return rawJson.map(json => {
  //     return Object.create((this.prototype, Object.getOwnPropertyDescriptors(json)))
  //   })
  // }

  // // return all ingredients obj json
  // static async findAll () {
  //   const rawJson = await jsonFile.readFile()
  //   return this._deSerialize(rawJson)
  // }

  async _fetchData () {
    return jsonFile.readFile(this.constructor._connection)
  }

}

module.exports = Model