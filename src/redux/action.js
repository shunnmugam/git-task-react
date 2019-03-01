import {SEARCH_UPDATE} from "./constans";

export const searchUpdate = data => ({
    type : SEARCH_UPDATE,
    payload : data
});