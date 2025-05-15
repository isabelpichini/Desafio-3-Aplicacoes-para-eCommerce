import { type Pet } from "../../types/Pet";
import "./PetCard.css";
import formatVND from "../../utils/FormatVND";

interface PetCardProps {
  pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {

  const encodedSKU = encodeURIComponent(pet.sku);

  return (
    <a href={`/pets/${encodedSKU}`}>
      <article className="pet-card shadow">
        <div className="img-container">
          <img src={pet.image_url} alt="" />
        </div>
        <div className="pet-info">
          <h3 className="body-m bold">{pet.name}</h3>
          <div className="pet-details body-xs">
            <p>
              Gene: <span className="bold pet-gender">{pet.gender}</span>
            </p>
            •
            <p>
              Age: <span className="bold">{pet.age}</span>
            </p>
          </div>
          <p className="body-s bold">{formatVND(pet.price)} VND</p>
        </div>
      </article>
    </a>
  );
}
