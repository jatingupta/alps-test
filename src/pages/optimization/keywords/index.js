import { connect } from "react-redux";

import KeywordOptimizationPage from "./KeywordOptimizationPage";

import {
    fetchKeywordInformation,
    fetchKeywordParameters
} from "./actions";

const mapStateToProps = (state) => ({
    ...state.keywords
});

export default connect(
    mapStateToProps, 
    { fetchKeywordInformation, fetchKeywordParameters }
)(KeywordOptimizationPage);


