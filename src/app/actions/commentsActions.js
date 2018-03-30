import axios from 'axios';
import { FETCH_COMMENTS } from "../constants/commentsConstants";

export function fetchComments() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return {
        type: FETCH_COMMENTS,
        payload: axios.get(url)
    };
}