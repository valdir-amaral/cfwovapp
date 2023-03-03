migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vimbqberk1cu3og")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v8pddphq",
    "name": "mvp",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vimbqberk1cu3og")

  // remove
  collection.schema.removeField("v8pddphq")

  return dao.saveCollection(collection)
})
