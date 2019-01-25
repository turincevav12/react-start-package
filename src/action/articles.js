import axios from 'axios'
export const LOAD_ARTICLES = 'LOAD_ARTICLES';

export function loadArticles(response) {
    return {
        type: LOAD_ARTICLES,
        response
    }
}

export function load_articles(page){

    let offset = page * 6;

    return dispatch => {
        const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
        const API_URL ='https://comicvine.gamespot.com/api/characters/?api_key=00dcfead44d1ccea4a48679682b2ac5853226a62&format=json&field_list=id,image,name,count_of_issue_appearances,publisher,real_name,gender,date_last_updated,deck&limit=6&offset=' + offset;

        return axios.get(
            PROXY_URL + API_URL
        )
            .then(response => response.data)
            .then(response => dispatch(loadArticles(response)))
    }
}