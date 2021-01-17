import { KeywordsActions } from "./actions";

let Keywords = {
    information: {},
    parameters: [],
    scores: [],
    isLoadingInformation: false,
    isLoadingParameters: false,
    errorInformation: "",
    errorParameters: ""
};

const keywordsReducer = (state = Keywords, action) => {
    console.log(action.type);
    switch (action.type) {
        case KeywordsActions.FETCH_KEYWORD_INFORMATION:
            return {
                ...state,
                errorInformation: "",
                isLoadingInformation: true
            };
        case KeywordsActions.FETCH_KEYWORD_PARAMETERS:
            return {
                ...state,
                errorParameters: "",
                isLoadingParameters: true
            };
        case KeywordsActions.FETCH_KEYWORD_INFORMATION_SUCCESS:
            return {
                ...state,
                information: action.payload,
                errorInformation: "",
                isLoadingInformation: false
            };
        case KeywordsActions.FETCH_KEYWORD_PARAMETERS_SUCCESS:
            return {
                ...state,
                parameters: action.payload.parameters,
                scores: action.payload.scores,
                errorParameters: "",
                isLoadingParameters: false
            };
        case KeywordsActions.FETCH_KEYWORD_INFORMATION_ERROR:
            return {
                ...state,
                errorInformation: action.payload.error,
                isLoadingInformation: false
            };
        case KeywordsActions.FETCH_KEYWORD_PARAMETERS_ERROR:
            return {
                ...state,
                errorParameters: action.payload.error,
                isLoadingParameters: false
            };
        default:
            return state;
    }
};

export default keywordsReducer;