migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vimbqberk1cu3og")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ik5ckdmm",
    "name": "idmissao",
    "type": "text",
    "required": false,
    "unique": false,
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
  collection.schema.removeField("ik5ckdmm")

  return dao.saveCollection(collection)
})
