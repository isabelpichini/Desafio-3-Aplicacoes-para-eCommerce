interface SelectionProps {
  id: string;
  name: string;
  type: "checkbox" | "radio";
  label?: string;
}

export default function Selection({ id, name, type, label }: SelectionProps) {
  return (
    <div className="selection pointer">
      <input type={type} name={name} id={id} className="pointer" />
      {label ? (
        <label htmlFor={id} className="body-s pointer">
          {label}
        </label>
      ) : null}
    </div>
  );
}
