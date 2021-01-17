import styles from "./TableHeader.module.scss";

const Header = ({
    columns
}) => {
    return (
        <thead>
            <tr>
                {columns.map((headerItem, index) => (
                    <th key={index}>{headerItem.title}</th>
                ))}
            </tr>
        </thead>
    );
}
// TODO: add proptype validations

export default Header;