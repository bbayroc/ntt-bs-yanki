db.createCollection('Yanki');
db.Yanki.insertMany(
    [{
        "_id": 4,
        "identification": "45699431",
        "cellphone": "999907134",
        "imei": "123456789131415",
        "email": "bbayro@hotmail.com",
        "debitcard": "",
        "balance": 2500,
        "currency": "PEN",
        "_class": "com.example.yanki.entity.Yanki"
    },{
        "_id": 5,
        "identification": "37922595",
        "cellphone": "902524843",
        "imei": "123456789101112",
        "email": "porange@hotmail.com",
        "balance": 4750,
        "currency": "PEN",
        "_class": "com.example.yanki.entity.Yanki"
    },{
        "_id": 6,
        "identification": "38124725",
        "cellphone": "992689923",
        "imei": "123456789101112",
        "email": "porange@hotmail.com",
        "debitcard": "66666666",
        "balance": 0,
        "currency": "PEN",
        "_class": "com.example.yanki.entity.Yanki"
    },{
        "_id": 7,
        "identification": "84662894",
        "cellphone": "982681358",
        "imei": "123456789101112",
        "email": "lbravo@gmail.com",
        "debitcard": "14141414",
        "balance": 0,
        "currency": "PEN",
        "_class": "com.example.yanki.entity.Yanki"
    }]
);
db.createCollection('Yanki_Transaction');
db.Yanki_Transaction.insertMany(
    [{
        "_id":"6270737b7640e97728fb8db6",
        "sender": "902524843",
        "recipient": "999907134",
        "amount": 100,
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id":"627073907640e97728fb8db7",
        "sender": "999907134",
        "recipient": "902524843",
        "amount": 100,
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id": "62707aa3d1278843fb2bc9e4",
        "sender": "999907134",
        "recipient": "902524843",
        "amount": 100,
        "created": "2022-05-02T19:43:15.9057847",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id": "62718803fd433342287f7a61",
        "sender": "999907134",
        "recipient": "902524843",
        "amount": 100,
        "created": "2022-05-03T14:52:35.940338",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id": "6271977ffd433342287f7a62",
        "sender": "999907134",
        "recipient": "902524843",
        "amount": 100,
        "created": "2022-05-03T15:58:39.0967296",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id": "62719adafd433342287f7a63",
        "sender": "999907134",
        "recipient": "902524843",
        "amount": 100,
        "created": "2022-05-03T16:12:58.2837816",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id":"6271a88987b4d86c2ec02ec3",
        "sender": "999907134",
        "recipient": "902524843",
        "amount": 100,
        "created": "2022-05-03T17:11:21.1380742",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id": "6271c84d94e1cb0b72ecaa25",
        "sender": "992689923",
        "recipient": "902524843",
        "amount": 100,
        "created": "2022-05-03T19:26:53.1801572",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id": "6271c86b94e1cb0b72ecaa26",
        "sender": "992689923",
        "recipient": "902524843",
        "amount": 100,
        "created": "2022-05-03T19:27:23.2428969",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id": "6271c87d94e1cb0b72ecaa27",
        "sender": "992689923",
        "recipient": "902524843",
        "amount": 200,
        "created": "2022-05-03T19:27:41.9520062",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id": "6271c8eaa84d1373f395873f",
        "sender": "992689923",
        "recipient": "902524843",
        "amount": 150,
        "created": "2022-05-03T19:29:30.4513095",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id":"6271c8fda84d1373f3958740",
        "sender": "992689923",
        "recipient": "902524843",
        "amount": 150,
        "created": "2022-05-03T19:29:49.9359735",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id":"6271cc53a84d1373f3958741",
        "sender": "992689923",
        "recipient": "902524843",
        "amount": 50,
        "created": "2022-05-03T19:44:03.0926466",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id": "6271cfa2a84d1373f3958742",
        "sender": "902524843",
        "recipient": "982681358",
        "amount": 100,
        "created": "2022-05-03T19:58:10.8923512",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id": "6271defca84d1373f3958743",
        "sender": "992689923",
        "recipient": "982681358",
        "amount": 100,
        "created": "2022-05-03T21:03:40.7890282",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id": "6271df4fa84d1373f3958744",
        "sender": "992689923",
        "recipient": "982681358",
        "amount": 200,
        "created": "2022-05-03T21:05:03.7226596",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id": "6271e0fea84d1373f3958745",
        "sender": "992689923",
        "recipient": "982681358",
        "amount": 200,
        "created": "2022-05-03T21:12:14.8747955",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id": "6271e3d6a84d1373f3958746",
        "sender": "992689923",
        "recipient": "982681358",
        "amount": 100,
        "created": "2022-05-03T21:24:22.3200303",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id":"6272323da84d1373f3958747",
        "sender": "992689923",
        "recipient": "982681358",
        "amount": 100,
        "created": "2022-05-04T02:58:53.3773909",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id":"62723492a84d1373f3958748",
        "sender": "992689923",
        "recipient": "982681358",
        "amount": 100,
        "created": "2022-05-04T03:08:50.4943133",
        "_class": "com.example.yanki.entity.YankiTransaction"
    },{
        "_id": "62723598a84d1373f3958749",
        "sender": "992689923",
        "recipient": "982681358",
        "amount": 100,
        "created": "2022-05-04T03:13:12.7280054",
        "_class": "com.example.yanki.entity.YankiTransaction"
    }]
)
