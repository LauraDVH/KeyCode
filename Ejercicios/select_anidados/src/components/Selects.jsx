import { SelectList } from "./SelectList";

export const Selects = () => {
  return (
    <div className="container-selects">
      <SelectList title="Estado" options={["Cundinamarca", "Antioquia", "Caldas"]} />
      <SelectList title="Municipio" options={["Bogotá", "Medellín", "Manizales"]} />
      <SelectList title="Ciudad" options={["Soacha", "Envigado", "Chinchiná"]} />
    </div>
  );
};
