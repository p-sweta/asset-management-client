import "./InputField.scss";

const InputField = ({ label, name, type, placeholder }) => {
  return (
    <div className="input-field">
      <label htmlFor={name} className="input-field__label">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="input-field__input"
        required
      />
    </div>
  );
};

export default InputField;
