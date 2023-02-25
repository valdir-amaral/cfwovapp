migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vimbqberk1cu3og")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qf4c4ghz",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": true,
    "options": {
      "collectionId": "0o101cqnigm01cu",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": [
        "username"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vimbqberk1cu3og")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qf4c4ghz",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "0o101cqnigm01cu",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": [
        "username"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
