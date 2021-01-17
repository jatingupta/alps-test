import apiResource from "../../../utils/apiHelper";

const keywordsApi = {
    getKeywordInformation: () => apiResource("f74aedb8b65aee839242b1331ba842c8/raw/fc25d0ecc91595f612eb96bd1862f839800be9a3/keyword_information_box.json"),
    getKeywordParameters: () => apiResource("53db3819f1b1ab10853b7be2e065da43/raw/b07cd58521cebeb9a6f094e9c1006db443851a60/keyword_modal_score.json")
};

export default keywordsApi;