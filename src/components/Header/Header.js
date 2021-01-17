const Header = ({
    theme = "#00acce"
}) => {
    return (
        <header style={{
            minHeight: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme
        }}>Header</header>
    );
}   
// TODO: add proptype validations

export default Header;