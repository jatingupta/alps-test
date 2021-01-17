const Breadcrumbs = ({
    theme = ""
}) => {
    return (
        <nav
            style={{
                minHeight: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme,
                boxShadow: "0 2px 6px 0 rgba(0,0,0,.12), inset 0 -1px 0 0 #dadce0"
            }}
        >Breadcrumbs</nav>
    );
}   
// TODO: add proptype validations

export default Breadcrumbs;