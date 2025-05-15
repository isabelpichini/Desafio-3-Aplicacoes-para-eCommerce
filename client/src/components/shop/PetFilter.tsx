import { useEffect, useState } from "react";
import api from "../../api/axios";
import { type Pet } from "../../types/Pet";
import "./Filter.css";
import Selection from "../static/Selection";
import Input from "../static/Inputs";
import formatVND from "../../utils/FormatVND";

interface Props {
  onPetsUpdate: (pets: Pet[]) => void;
}

export default function PetFilters({ onPetsUpdate }: Props) {
  const [colors, setColors] = useState<string[]>([]);
  const [gender, setGender] = useState<string[]>([]);
  const [size, setSize] = useState<string[]>([]);
  const [localMinPrice, setLocalMinPrice] = useState<string | undefined>("");
  const [localMaxPrice, setLocalMaxPrice] = useState<string | undefined>("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  const handleCheckbox = (
    value: string,
    state: string[],
    setter: (val: string[]) => void
  ) => {
    setter(
      state.includes(value)
        ? state.filter((v) => v !== value)
        : [...state, value]
    );
  };

  useEffect(() => {
    const params: Record<string, string> = {};

    if (colors.length) params.colors = colors.join(",");
    if (gender.length) params.gender = gender.join(",");
    if (size.length) params.size = size.join(",");
    if (minPrice !== undefined) params.minPrice = minPrice.toString();
    if (maxPrice !== undefined) params.maxPrice = maxPrice.toString();

    const query = new URLSearchParams(params).toString();

    console.log("Query string:", query);

    api
      .get<Pet[]>(`/pets?${query}`)
      .then((res) => onPetsUpdate(res.data))
      .catch((err) => console.error(err));
  }, [colors, gender, size, minPrice, maxPrice, onPetsUpdate]);

  return (
    <div id="filter">
      <h2 className="heading-xs semibold">Filter</h2>
      <form>
        <fieldset className="gender-filter">
          <legend className="body-m semibold">Gender</legend>
          {["male", "female"].map((g) => (
            <label className="body-s" key={g}>
              <Selection
                type="checkbox"
                checked={gender.includes(g)}
                onChange={() => handleCheckbox(g, gender, setGender)}
              />
              {g}
            </label>
          ))}
        </fieldset>
        <hr />
        <fieldset className="color-filter">
          <legend className="body-m semibold">Color</legend>
          {["white", "black", "brown", "cream", "grey", "apricot"].map((c) => (
            <label className="body-s" key={c}>
              <Selection
                type="checkbox"
                checked={colors.includes(c)}
                onChange={() => handleCheckbox(c, colors, setColors)}
              />
              <div className={`color ${c}`}></div>
              {c}
            </label>
          ))}
        </fieldset>
        <hr />
        <fieldset className="price-range">
          <legend className="body-m semibold">Price</legend>
          <div>
            <label className="body-s">
              Min Price:
              <Input
                type="text"
                icon="ci:unfold-more"
                iconPosition="after"
                placeholder="Min Price"
                value={formatVND(Number(localMinPrice))}
                onChange={(e) =>
                  setLocalMinPrice(e.target.value.replace(/[^\d]/g, ""))
                }
              />
            </label>
            <label className="body-s">
              Max Price:
              <Input
                type="text"
                icon="ci:unfold-more"
                iconPosition="after"
                value={formatVND(Number(localMaxPrice))}
                onChange={(e) =>
                  setLocalMaxPrice(e.target.value.replace(/[^\d]/g, ""))
                }
              />
            </label>
          </div>
          <button
            type="button"
            className="button"
            onClick={() => {
              setMinPrice(
                localMinPrice ? parseInt(localMinPrice, 10) : undefined
              );
              setMaxPrice(
                localMaxPrice ? parseInt(localMaxPrice, 10) : undefined
              );
            }}
          >
            Apply Price
          </button>
        </fieldset>
        <hr />
        <fieldset className="size-filter">
          <legend className="body-m semibold">Size</legend>
          {["small", "medium", "large"].map((s) => (
            <label className="body-s" key={s}>
              <Selection
                type="checkbox"
                checked={size.includes(s)}
                onChange={() => handleCheckbox(s, size, setSize)}
              />{" "}
              {s}
            </label>
          ))}
        </fieldset>
      </form>
    </div>
  );
}
