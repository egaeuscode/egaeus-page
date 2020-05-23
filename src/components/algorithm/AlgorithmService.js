import db, {storageRef} from "../../config/firebase";

export function getAlgorithmsService(idAlgorithm) {
    return db.firestore().collection("algorithms").doc(idAlgorithm).get();

}

export function getAlgorithmCode(idAlgorithm) {
    return storageRef.child(idAlgorithm+".txt").getDownloadURL()
        .then( url => fetch(url))
        .then( response => response.text())
        .catch( e => "System.out.println(\"Code not found!\");");
}
