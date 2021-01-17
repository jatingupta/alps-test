import { Collapse } from "../../../../../components";
import styles from "./KeywordInformation.module.scss";

const getThemes = (themes) => {
    return themes.join(", ");
}

const KeywordInformation = ({
    data,
    isLoading,
    error
}) => {
    const packs = data.serp_packs || [];

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            <ul className={styles.description}>
                <li><span>Highest rank</span><span>{data.highest_rank}</span></li>
                <li><span>Search volume</span><span>{data.search_volume}</span></li>
                <li><span>Theme List</span><span>{getThemes(data.theme_list)}</span></li>
            </ul>
            {
                packs.length ? (
                    <Collapse heading="Packs available">
                        {
                            packs.map((pack, i) => <p key={i}>{pack}</p>)
                        }
                    </Collapse>
                ) : null
            }
        </div>
    );
}
// TODO: add proptype validations

export default KeywordInformation;