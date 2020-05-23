import db from "../../config/firebase";

export function getNews() {
  return db.firestore().collection("news").orderBy("date").get();

}
