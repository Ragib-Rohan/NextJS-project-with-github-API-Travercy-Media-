import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Next App(Travercy media)",
  description: "Generated by create next app",
  keywords: "web development, web design, javascript,html,css,vue,react js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
