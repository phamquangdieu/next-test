'use client'; 
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import { PersistGate } from "redux-persist/integration/react";
import store from "@/redux/store";



// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Provider store={store.store}>
          <PersistGate loading={null} persistor={store.persistor}>
            <RecoilRoot>
            {children}
            </RecoilRoot>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
