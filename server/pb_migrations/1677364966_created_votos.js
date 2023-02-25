migrate((db) => {
  const collection = new Collection({
    "id": "vimbqberk1cu3og",
    "created": "2023-02-25 22:42:46.513Z",
    "updated": "2023-02-25 22:42:46.513Z",
    "name": "votos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "f5uxmbes",
        "name": "skin",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vimbqberk1cu3og");

  return dao.deleteCollection(collection);
})
