var express = require('express');

var app = express();

app.listen(3001);

app.get('/', (req, res) => {
    res.send("We are running our first microservice");
})

app.get('/vendor', (req, res) => {
    res.json({
        "companyName": "SAP",
        "firstName": "Totla",
        "lastName": "bandra",
        "website": "sap.com",
        "email": "shaikasif@ibm.com",
        "status": "A",
        "gstNo": "GSTIN889936663"
        
        })
})
console.log("app is running at port http://localhost:3001/");
