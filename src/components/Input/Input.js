const Input = ({
    type,
    id,
    className,
    label,
    placeholder,
    value,
    updateValue
}) => (<label aria-label={label}htmlFor={id}>
    <input onChange={(e) => {
        updateValue(e.target.value);
    }} type={type} value={value} className={className} placeholder={placeholder}/>
</label>);
// TODO: add proptype validations

export default Input;