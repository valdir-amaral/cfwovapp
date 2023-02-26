migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vimbqberk1cu3og")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "grkx4dzd",
    "name": "user",
    "type": "text",
    "required": true,
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

  // update
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
})
