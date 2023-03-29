import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Chave de acesso ao firebase
const firebaseConfig = {
    apiKey: "AIzaSyDAFI_V6bq8wrcv2BHyaoqcZd71kYYAY6Q",
    authDomain: "bibliotech-ricardo.firebaseapp.com",
    projectId: "bibliotech-ricardo",
    storageBucket: "bibliotech-ricardo.appspot.com",
    messagingSenderId: "670363212408",
    appId: "1:670363212408:web:e66e5cab1fcd869754ab8d"
};

// Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
// Configurando o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);
// Configura o Firestore e seus recursos de banco de dados
export const db = getFirestore(app);
// Configura o Storage e seus recursos de Upload
export const storage = getStorage(app);
