import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const increment = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });
export const incrementFunc = functions.https.onRequest((req, res) => {
  const newNumber = incrementMe(req.body.value);
  admin
    .firestore()
    .collection("cloudData")
    .doc("cloudNumber-1")
    .set({
      numValue: newNumber,
    })
    .then(() => {
      res.send("increment");
    })
    .catch(() => {
      res.send("failed");
    });
});

function incrementMe(numb: number) {
  return ++numb;
}

if (!req.body.numValue) {
  res.send("invalid");
} else res.send("increment");
const newNumber = incrementMe(req.body.numValue);
return admin
  .firestore()
  .collection("cloudData")
  .doc("cloudNumber-1")
  .set({
    numValue: newNumber,
  })
  .then(() => {
    console.log("New Message written");
    return newNumber;
  })
  .catch((error) => {
    throw new functions.https.HttpsError("unknown", error.message, error);
  });
