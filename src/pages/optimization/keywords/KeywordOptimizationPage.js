import KeywordInformation from "./components/KeywordInformation/KeywordInformation";
import ParametersTable from "./components/ParametersTable/ParametersTable";

import { Search } from "../../../components";

import styles from "./KeywordOptimization.module.scss";

const KeywordOptimization = (props) => {

    const handleKeywordSearch = (searchTerm = "") => {
        if (!searchTerm) return;
        const { fetchKeywordInformation, fetchKeywordParameters } = props;
        fetchKeywordInformation(searchTerm);
        fetchKeywordParameters(searchTerm);
    }

    const {
        parameters,
        information,
        isLoadingInformation,
        isLoadingParameters,
        errorInformation,
        errorParameters
    } = props;

    const initialState = !(isLoadingInformation || isLoadingParameters || parameters.length);

    return (
        <main className={styles.keywords}>
            <div className={styles.search}>
                <Search 
                    placeholder="Search keyword"
                    btnText="Go"
                    onSearch={handleKeywordSearch}
                />
            </div>
            {
                !initialState ? (
                    <div className={styles.content}>
                        <KeywordInformation 
                            data={information}
                            isLoading={isLoadingInformation}
                            error={errorInformation}
                        />
                        <ParametersTable 
                            parameters={parameters}
                            isLoading={isLoadingParameters}
                            error={errorParameters}
                        />
                    </div>
                ) : (
                    <div className={styles.content}>
                        Please search keyword to see details 
                    </div>
                )
            }
        </main>
    );
}

//TODO: add proptype validations

export default KeywordOptimization;