import {SEARCH_UPDATE} from "./constans";

const searchReducer =  (state = {keyword:"TEST"}, action) => {
    switch (action.type) {
        case SEARCH_UPDATE:
            return Object.assign({},state,{ keyword : action.payload
            });
        default:
            return state;
    }
};

export default searchReducer;