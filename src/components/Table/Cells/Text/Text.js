const Text = ({
    text
}) => {
    return (
        <div>{text ? text : (text === 0 ? 0 : "N/A")}</div>
    );
}
// TODO: add proptype validations

export default Text;