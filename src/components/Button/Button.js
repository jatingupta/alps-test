const Button = ({
    onClick,
    text
}) => {
    return (
        <button onClick={onClick}>{text}</button>
    );
}
// TODO: add proptype validations

export default Button;