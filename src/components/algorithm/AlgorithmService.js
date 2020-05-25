import db, {storageRef} from "../../config/firebase";

export function getAlgorithmsService(idAlgorithm) {
    return db.firestore().collection("algorithms").doc(idAlgorithm).get();

}

export function getAlgorithmCode(idAlgorithm) {
    return storageRef.child("algorithms/" + idAlgorithm + ".java").getDownloadURL()
        .then(url => fetch(url))
        .then(response => response.text())
        .catch(e => null);
}

export function getDescription(idAlgorithm) {
    return storageRef.child('description/' + idAlgorithm + ".txt").getDownloadURL()
        .then(url => fetch(url))
        .then(response => response.text())
        .catch(e => null);
}
