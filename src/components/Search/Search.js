import { useState } from "react";
import { Input, Button } from "../";

import styles from "./Search.module.scss";

const Search = ({
    placeholder,
    btnText,
    onSearch
}) => {
    const [searchTerm, updateSearchTerm] = useState("");

    return (
        <div className={styles.searchContainer}>
            <Input 
                id="searchInput"
                type="search"
                updateValue={updateSearchTerm}
                placeholder={placeholder}
            />
            <Button 
                text={btnText}
                onClick={() => onSearch(searchTerm)}
            />
        </div>
    );
}
// TODO: add proptype validations

export default Search;