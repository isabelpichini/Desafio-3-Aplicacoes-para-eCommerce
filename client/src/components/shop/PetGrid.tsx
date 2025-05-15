import { useState } from "react";
import PetFilter from "./PetFilter";
import PetCard from "../static/PetCard";
import { type Pet } from "../../types/Pet";
import "./Grid.css";

export default function Pets() {
  const [pets, setPets] = useState<Pet[]>([]);

  return (
    <div className="page">
      <aside className="filters-section">
        <PetFilter onPetsUpdate={setPets} />
      </aside>
      <main className="grid">
        {pets.map((pet) => (
          <PetCard key={pet.sku} pet={pet} />
        ))}
      </main>
    </div>
  );
}
