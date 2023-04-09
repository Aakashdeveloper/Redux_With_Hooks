import axios from 'axios';

import { 
    LATEST_NEWS,
    ARTICLE_NEWS,
    GALLERY_NEWS
} from '../redux/newsData/actionType';

const base_url = "http://localhost:7800";

export const getLatestNews = () => {
    return dispatch => {
        dispatch({
            type: LATEST_NEWS,
            payload: { data: []}
        })
        return axios.get(`${base_url}/articles?_end=3`).then((response) => {
            const respdata = response.data;
                dispatch({
                    type: LATEST_NEWS,
                    payload: { data: respdata }
                })
        })
    }
}

export const getArticleNews = () => {
    return dispatch => {
        dispatch({
            type: ARTICLE_NEWS,
            payload: { data: []}
        })
        return axios.get(`${base_url}/articles?_start=3&_end=10`).then((response) => {
            const respdata = response.data;
                dispatch({
                    type: ARTICLE_NEWS,
                    payload: { data: respdata }
                })
        })
    }
}

export const getGalleryNews = () => {
    return dispatch => {
        dispatch({
            type: GALLERY_NEWS,
            payload: { data: []}
        })
        return axios.get(`${base_url}/galleries?_limit=2`).then((response) => {
            const respdata = response.data;
                dispatch({
                    type: GALLERY_NEWS,
                    payload: { data: respdata }
                })
        })
    }
}
