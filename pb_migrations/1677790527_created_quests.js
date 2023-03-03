migrate((db) => {
  const collection = new Collection({
    "id": "2xft1zdse88oe3h",
    "created": "2023-03-02 20:55:27.321Z",
    "updated": "2023-03-02 20:55:27.321Z",
    "name": "quests",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "20ya1567",
        "name": "idQuest",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2xft1zdse88oe3h");

  return dao.deleteCollection(collection);
})
