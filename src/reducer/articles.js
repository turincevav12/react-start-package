import {LOAD_ARTICLES} from '../action/articles'

let initialState = {
    articles: [],
    page: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ARTICLES:
            return Object.assign({}, state,
                action.response.results.forEach((element) => {
                    if (element) {
                        state.articles.push(element)
                    }
                }),
                state.page = state.page + 1
            );

    }
    return state;
}