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

export function searchAlgorithm(searchText) {
    let url = "https://us-central1-egaeus-75c1e.cloudfunctions.net/searchAlgorithm";
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({search: searchText}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        return response.json();

    });
}