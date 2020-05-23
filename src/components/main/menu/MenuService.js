import { db, storage, storageRef } from "../../../config/firebase";

export function getCategoriesService() {
    return db.firestore().collection("classes").get();
}

export function getAlgorithmsService() {
    return db.firestore().collection("algorithms").orderBy('name').get();

}

//TODO Pasar a otro servicio

async function f(url) {


}

export function getAlgorithmCode(idAlgorithm) {
    console.log("algoritmo: " , idAlgorithm);
    storageRef.child('YtpxMVDStI3fNfYW2oHy.txt').getDownloadURL().then( url => {


        fetch(url).then( response => {
            response.blob().then( blob => {
                console.log("blob " , blob)
            })
        })

/*
        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function(event) {
            var blob = xhr.response;

            const fileReader = new FileReader();
            fileReader.addEventListener("loadend", e =>{
                console.log(fileReader.result, " <<<<<<<<<<");
            })
            fileReader.readAsText(blob);

        };
        xhr.open('GET', url);
        xhr.send();*/



    });


}