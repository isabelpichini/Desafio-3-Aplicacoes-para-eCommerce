import { useEffect, useState } from "react";
import api from "../../api/axios";
import { type Product } from "../../types/Product";
import "./Filter.css";
import Selection from "../static/Selection";
import Input from "../static/Inputs";
import formatVND from "../../utils/FormatVND";

interface Props {
  onProductsUpdate: (products: Product[]) => void;
}

export default function ProductFilters({ onProductsUpdate }: Props) {
  const [types, setTypes] = useState<string[]>([]);
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

    if (types.length) params.types = types.join(",");
    if (minPrice !== undefined) params.minPrice = minPrice.toString();
    if (maxPrice !== undefined) params.maxPrice = maxPrice.toString();

    const query = new URLSearchParams(params).toString();

    console.log(`/products?${query}`);

    api
      .get<Product[]>(`/products?${query}`)
      .then((res) => onProductsUpdate(res.data))
      .catch((err) => console.error(err));
  }, [types, minPrice, maxPrice, onProductsUpdate]);

  return (
    <div id="filter">
      <h2 className="heading-xs semibold">Filter</h2>
      <form>
        <fieldset className="types-filter">
          <legend className="body-m semibold">Types</legend>
          {["Dog Food", "Cat Food", "Toy", "Costume"].map((t) => (
            <label className="body-s" key={t}>
              <Selection
                type="checkbox"
                checked={types.includes(t)}
                onChange={() => handleCheckbox(t, types, setTypes)}
              />
              {t}
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
      </form>
    </div>
  );
}
