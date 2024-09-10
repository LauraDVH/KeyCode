import { useFetch } from "../hooks/useFetch";

export const SelectList = ({ manejadorCambio, title, url }) => {
  const key = `select-${title}`;
  const label = title.toUpperCase();

  const { data, error, loading } = useFetch(url);
  if (!data) {
    return null
  }
  
  if (error) {
    return (<p>Ha ocurrido un error: {error}</p>)
  }

  let options = data

  return (
    <div className="container-select">
      <label className="label-select" htmlFor={key}>
        {label}
      </label>
      <select name={key} id={key} onChange={manejadorCambio}>
        <option value="">Seleccione un {title}</option>
        {data && options.map((option) => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};
// nombre del elemento por el cual esta itertando
// index es el indice del elemento
//se utiliza index como Key asegura que cada opcion tenga un valor unico
//value y el contenido del <option> aseguran que el valor que se selecciona y lo que se muestra en el menú desplegable correspondan al elemento actual del array.
