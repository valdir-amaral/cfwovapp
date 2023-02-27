migrate((db) => {
  const collection = new Collection({
    "id": "0o101cqnigm01cu",
    "created": "2023-02-25 18:46:38.652Z",
    "updated": "2023-02-25 18:46:38.652Z",
    "name": "usuarios",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": [],
      "manageRule": null,
      "minPasswordLength": 5,
      "onlyEmailDomains": [],
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0o101cqnigm01cu");

  return dao.deleteCollection(collection);
})
