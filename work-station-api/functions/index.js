const admin = require("firebase-admin");
const functions = require('firebase-functions');
const serviceAccount = require("../authentication-bc9f6-firebase-adminsdk-i93gz-1c49181736");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://authentication-bc9f6.firebaseio.com"
});
const db = admin.firestore();

const getData = () => functions.https.onRequest((req, res) => {
    const docRef = db.collection('general').doc('r90tf4vMJyPFbDQBRcEj');
    const getDoc = docRef.get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No such document!');
                return res.send('Not Found')
            }
            console.log(doc.data());
            return res.send(doc.data());
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
});

exports.getData = getData();
