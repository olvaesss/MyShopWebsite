import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
const serviceAccount = (`myshopwebsite-4ffa7-firebase-adminsdk-yojkb-a75865fe9e.json`);
initializeApp({
    credential: cert(serviceAccount)
});
export const db = getFirestore();

