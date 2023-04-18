var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "us-east-1"
});

console.log("Writing entries to rooms table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var roomsData =
    JSON.parse(fs.readFileSync('../components/data/rooms.json', 'utf8'));

roomsData.forEach(function(rooms) {
    var params = {
        TableName: "Rooms",
        Item: {
            "name": rooms.name
        }
    };

    dynamodb.put(params, function(err, data) {
        if (err)
            console.error("Unable to load data into table for rooms table",
                rooms.name, ". Error: ", JSON.stringify(err, null, 2))
        else
            console.log("Added", rooms.name, "to table.")
    });
});