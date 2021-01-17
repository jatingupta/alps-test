import Row from "./Row/Row";
import TableHeader from "./TableHeader/TableHeader";

const Table = ({
    data,
    columns,
    renderHeader = true,
    rowsToDisplay = data.length - 1
}) => {

    const tableData = data.slice(0, rowsToDisplay);

    return (
        <div>
            <table>
                {
                    renderHeader ? (
                       <TableHeader columns={columns} />
                    ) : null
                }
                <tbody>
                    {tableData.map((item, index) => (
                       <Row columns={columns} item={item} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
// TODO: add proptype validations

export default Table;