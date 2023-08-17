/*import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';*/
import { FirestoreAdapter } from '@auth/firebase-adapter'
import { firestore } from "lib/firestore";
import NextAuth from "next-auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDuoq4GeT8w8wRtXcbvv6iXxyvRZqgKh34",
  authDomain: "science-tifical.firebaseapp.com",
  projectId: "science-tifical",
  storageBucket: "science-tifical.appspot.com",
  messagingSenderId: "629132531147",
  appId: "1:629132531147:web:48d6c19acc030e2646924e"
};
const app = initializeApp(firebaseConfig);

const handler = NextAuth({
    providers: [
        {
          id: "worldcoin",
          name: "Worldcoin",
          type: "oauth",
          wellKnown: "https://id.worldcoin.org/.well-known/openid-configuration",
          authorization: { params: { scope: "openid" } },
          clientId: process.env.WLD_CLIENT_ID,
          clientSecret: process.env.WLD_CLIENT_SECRET,
          idToken: true,
          profile(profile) {
            return {
              id: profile.sub,
              name: profile.sub,
              credentialType: profile["https://id.worldcoin.org/beta"].credential_type,
            }
          },
        },
      ],
      adapter: FirestoreAdapter(firebase.firestore())
  });

  export { handler as GET, handler as POST };

