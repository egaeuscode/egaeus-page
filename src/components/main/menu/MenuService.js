import { db } from "../../../config/firebase";

export function getCategoriesService() {
    return db.firestore().collection("classes").orderBy('name').get();
}

export function getAlgorithmsService() {
    return db.firestore().collection("algorithms").orderBy('name').get();

}
