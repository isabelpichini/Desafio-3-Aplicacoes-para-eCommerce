import { useEffect, useState } from "react";
import api from "../../api/axios";
import { Link } from "react-router-dom";
import { type Pet } from "../../types/Pet";
import PetCard from "../static/PetCard";
import { InlineIcon } from "@iconify/react";
import "./NewPets.css";

export default function NewPets() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<Pet[]>("/pets?limit=8")
      .then((res: { data: Pet[] }) => {
        setPets(res.data);
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.error("Error fetching pets:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading heading-s">Loading...</div>;
  }

  return (
    <section id="new-pets">
      <div className="new-pets-wrapper">
        <div className="new-pets-header">
          <div className="new-pets-heading">
            <p className="body-m">What's new?</p>
            <h2 className="heading-xs bold">Take A Look At Some Of Our Pets</h2>
          </div>
          <button className="button-outline">
            <Link to="/shop/pets">View more</Link>
            <InlineIcon icon="ci:chevron-right-md" width={18} />
          </button>
        </div>
        <div className="pet-grid">
          {pets.map((pet) => (
            <PetCard key={pet.sku} pet={pet} />
          ))}
        </div>
      </div>
    </section>
  );
}
