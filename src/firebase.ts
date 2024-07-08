import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWH01zi3YOTmm5U-nhQXKIGq3-zxUuGYA",
  authDomain: "appportal-88de2.firebaseapp.com",
  projectId: "appportal-88de2",
  storageBucket: "appportal-88de2.appspot.com",
  messagingSenderId: "166459395302",
  appId: "1:166459395302:web:468f183e6d5503efcaff27",
  measurementId: "G-NC557DHSQ1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const analytics =
//   process.env.NODE_ENV === 'production' && typeof window !== 'undefined'
//     ? getAnalytics(app)
//     : undefined