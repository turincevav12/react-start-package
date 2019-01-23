
import Articles from './Articles/index'
import ArticlesView from './Articles/view'

export const mainRoutes = [
    {
        path: "/",
        component: Articles,
        exact: true
    },
    {
        path: "/articles/:id",
        component: ArticlesView,
        exact: true
    }
];