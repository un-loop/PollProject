const dbContext = require("../dbcontext");
const Table = require("unloop-database-dynamo")(dbContext.db, dbContext.docClient);

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

exports.initialData = [
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
];

exports.table = new Table(this);
