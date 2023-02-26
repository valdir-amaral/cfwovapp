migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vimbqberk1cu3og")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d1lvuolq",
    "name": "idplayer",
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

  // remove
  collection.schema.removeField("d1lvuolq")

  return dao.saveCollection(collection)
})
