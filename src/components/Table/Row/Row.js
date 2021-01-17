import styles from "./Row.Module.scss";

const Row = ({
    columns,
    item
}) => {
    return (
        <tr>
            {columns.map((col, i) => (
                <td key={i}>{col.render(item[col.key])}</td>
            ))}
        </tr>
    );
}
// TODO: add proptype validations

export default Row;