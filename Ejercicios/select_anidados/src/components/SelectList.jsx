export const SelectList = ({ title, options }) => {
  const key = `select-${title}`;
  const label = title.toUpperCase();

  return (
    <>
      <label className="label-select" htmlFor={key}>{label}</label>
      <select name={key} id={key}>
        <option value="">Seleccione un {title}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </>
  );
};
