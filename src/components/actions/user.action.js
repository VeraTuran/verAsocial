import axios from "axios";

export const GET_USER = "GET_USER";

export const getUsers = () => {
    return (dispatch) => {
        return axios
        .get("http://localhost:3000/posts?_sort=id&_order=desc")
        .then((res) => {
            dispatch({type: GET_POSTS, payload:res.data});
        })
        .catch((err) => console.log(err))
    };
};