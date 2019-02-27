const table = require("../database");
const cats = new table(this);

/*[
    {
        name: "Jasper",
        owner: "Kitty Kally",
        age: 1
    },
    {
        name: "Daisy",
        owner: "Katherine Mao",
        age: 8
    }
];*/

exports.schema = {
        TableName : "Cats",
        BillingMode: "PROVISIONED",
        KeySchema: [
            { AttributeName: "name", KeyType: "HASH"}
        ],
        AttributeDefinitions: [
                { AttributeName: "name", AttributeType: "S" }
            ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    };

exports.key = "name";

exports.index = function *(next){
    yield next;
    this.body = yield cats.getAll();
  };

  /**
   * GET cat
   */
  exports.show = function *(next){
    yield next;
    var result = yield cats.get(this.params.cat);

    if (!result) {
        this.status = 404;
        this.body = 'Not Found';
    } else {
        this.body = result;
    }
  };

  /**
   * POST a new cat.
   */
  exports.create = function *(next){
    yield next;
    if (!this.request.body || !this.request.body.name) this.throw(400, '.name required');
    let cat = (({name, owner, age}) => ({name, owner, age}))(this.request.body);
    yield cats.create(cat);
    this.status = 201;
    this.body = 'added!';
  };
