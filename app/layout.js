import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "Biblio",
  description: "Catalogue de livres",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="container pb-5">{children}</main>
      </body>
    </html>
  );
}
