export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Layout de la page /test/:id</h1>
        {children}
      </body>
    </html>
  );
}
