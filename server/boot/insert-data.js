'use strict'

module.exports = function(app) {

  var customers = [{
    "name": {
      "suffix": "Dr",
      "firstName": "Howard",
      "middleName": "Tom",
      "lastName": "Rose"
    },
    "birthDate": "1957-07-11T00:00:00.000Z",
    "emails": [{
      "address": "howard29@seattletimes.com"
    }],
    "customdata": {
      "obj": {
        "value": "DC893708"
      },
      "list": [{
        "value": "67925088689"
      }, {
        "value": "85347244890"
      }]
    }
  }, {
    "name": {
      "suffix": "Rev",
      "firstName": "Cynthia",
      "middleName": "Kate",
      "lastName": "Hicks"
    },
    "birthDate": "1945-04-01T00:00:00.000Z",
    "emails": [{
      "address": "cynthia@cornell.edu"
    }],
    "customdata": {
      "obj": {
        "value": "NF896493"
      },
      "list": [{
        "value": "58850970801"
      }]
    }
  }]

  customers.forEach(jsonData => {
    app.models.Customer.create(jsonData, (err, modelInstance) => {
      if (err) return console.error('Unable to insert data for', err)
    })
  })
}
