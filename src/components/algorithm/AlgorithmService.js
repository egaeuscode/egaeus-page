import db from "../../config/firebase";

export function getAlgorithmsService(idAlgorithm) {
    return db.firestore().collection("algorithms").doc(idAlgorithm).get();

}
