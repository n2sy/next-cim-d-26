import Affiche from "@/components/Affiche";
const LIVRES_POPULAIRES = [
  {
    titre: "L'Étranger",
    auteur: "Albert Camus",
    annee: 1942,
    image: "https://placehold.co/x.jpg",
  },
  {
    titre: "1984",
    auteur: "George Orwell",
    annee: 1949,
    image: "https://placehold.co/400x600/e74c3c/ffffff?text=1984",
  },
  {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    annee: 1943,
    image: "https://placehold.co/400x600/f1c40f/333333?text=Le+Petit+Prince",
  },
  {
    titre: "Les Misérables",
    auteur: "Victor Hugo",
    annee: 1862,
    image: "https://placehold.co/400x600/8e44ad/ffffff?text=Les+Miserables",
  },
];
export default function Home() {
  return (
    <>
      <h1 className="display-6 py-5">Une bibliothèque, pas une vitrine.</h1>
      <h2 className="h5 mb-3">Les plus populaires</h2>
      <div className="row g-3">
        {LIVRES_POPULAIRES.map((livre) => (
          <div className="col-6 col-md-3" key={livre.titre}>
            <article className="card">
              <Affiche src={livre.image} alt={livre.titre} />
              <div className="card-body">
                <h6>{livre.titre}</h6>
                <p className="text-secondary small mb-0">
                  {livre.auteur} – {livre.annee}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}
