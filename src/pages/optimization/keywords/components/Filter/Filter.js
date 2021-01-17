const buttonStyles = {
    fontWeight: "bold",
    background: "white",
    border: 0,
    cursor: "pointer",
    fontSize: "16px",
    margin: "0 10px"
}

const Filter = ({
    name,
    filters,
    onChange,
    currentFilter
}) => {
    return (
        <div>
            <span style={{display: "inline-block", marginRight: "20px"}}>{name}:</span>
            {
                filters.map((filter, index) => {
                    return <button style={{...buttonStyles, fontWeight: currentFilter === filter.value ? "bold" : "normal"}} key={index} onClick={() => onChange(filter.value)}>{filter.name}</button>
                })
            }
        </div>
    );
}
// TODO: add proptype validations

export default Filter;