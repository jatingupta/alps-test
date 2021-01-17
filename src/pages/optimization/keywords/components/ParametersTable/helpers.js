import { Text } from "../../../../../components/Table/Cells";

export const getColumns = (data) => {
    // returning hardcoded for now
    return [
        {
            title: "Parameter",
            key: "display_text",
            render: (text) => {
                return <Text text={text} />;
            }
        },
        {
            title: "Value",
            key: "value",
            render: (text) => {
                return <Text text={text} />;
            }
        }
    ];
}

export const getTableData = (data, filter) => {
    return data.filter((row) => {
        return filter.value ? row[filter.key] === filter.value : true;
    });
}

export const getFilters = (data, key) => {
    // returning hardcoded for now
    return [
        {
            name: "Very High",
            value: "very high"
        },
        {
            name: "High",
            value: "high"
        },
        {
            name: "Medium",
            value: "medium"
        },
        {
            name: "Low",
            value: "low"
        },
        {
            name: "Very Low",
            value: "very low"
        }
    ]
}