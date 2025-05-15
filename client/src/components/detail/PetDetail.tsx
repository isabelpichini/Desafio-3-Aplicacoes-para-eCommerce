import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios";
import formatVND from "../../utils/FormatVND";
import { type Pet } from "../../types/Pet";

const PetDetails = () => {
  const { sku } = useParams();
  const [pet, setPet] = useState<Pet | null>(null);

  useEffect(() => {
    if (sku) {
      const encodedSku = encodeURIComponent(sku);
      api
        .get<Pet>(`/pets/${encodedSku}`)
        .then((res) => setPet(res.data))
        .catch((err) => console.log(err));
    }
  }, [sku]);

  if (!pet) return <p>Loading pet details...</p>;

  return (
    <div>
      <h1>{pet.name}</h1>
      <p>Age: {pet.age}</p>
      <p>price: {formatVND(pet.price)} VND</p>
      {/* Render the rest of the pet info */}
    </div>
  );
};

export default PetDetails;
