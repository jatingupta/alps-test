import { useState, useEffect } from "react";

import Filter from "../Filter/Filter";
import { Table } from "../../../../../components"; 

import { getColumns, getTableData, getFilters } from "./helpers";

import styles from "./ParametersTable.module.scss";

const ParametersTable = ({
    parameters,
    isLoading,
    error
}) => {
    const [filter, setFilter] = useState(null);

    const onFilterChange = (filter) => {
        setFilter(filter);
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }
    
    return (
        <div className={styles.parametersTable}>
            <Filter
                name="Importance"
                filters={getFilters(parameters, "importance")}
                onChange={onFilterChange}
                currentFilter={filter}
            />   
            <Table 
                renderHeader={false}
                columns={getColumns(parameters)}
                data={getTableData(parameters, {key: "importance", value: filter})}
                // rowsToDisplay={5}
            />
        </div>
    );
}
// TODO: add proptype validations

export default ParametersTable;