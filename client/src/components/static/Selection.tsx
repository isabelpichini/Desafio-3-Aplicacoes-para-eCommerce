interface SelectionProps {
  id?: string;
  name?: string;
  type: "checkbox" | "radio";
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Selection({ id, name, type, label, checked, onChange }: SelectionProps) {
  return (
    <div className="selection pointer">
      <input type={type} name={name} id={id} className="pointer" checked={checked} onChange={onChange} />
      {label ? (
        <label htmlFor={id} className="body-s pointer">
          {label}
        </label>
      ) : null}
    </div>
  );
}
