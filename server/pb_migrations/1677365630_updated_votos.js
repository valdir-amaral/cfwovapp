migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vimbqberk1cu3og")

  // remove
  collection.schema.removeField("qf4c4ghz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "grkx4dzd",
    "name": "user",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vimbqberk1cu3og")

  // add
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

  // remove
  collection.schema.removeField("grkx4dzd")

  return dao.saveCollection(collection)
})
