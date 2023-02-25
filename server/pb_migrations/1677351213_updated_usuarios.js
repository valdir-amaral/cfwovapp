migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0o101cqnigm01cu")

  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": true,
    "allowUsernameAuth": true,
    "exceptEmailDomains": [],
    "manageRule": null,
    "minPasswordLength": 5,
    "onlyEmailDomains": [],
    "requireEmail": false
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0o101cqnigm01cu")

  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": true,
    "allowUsernameAuth": true,
    "exceptEmailDomains": [],
    "manageRule": null,
    "minPasswordLength": 5,
    "onlyEmailDomains": [],
    "requireEmail": true
  }

  return dao.saveCollection(collection)
})
