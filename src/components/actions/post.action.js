import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";

export const getPosts = () => {
    return (dispatch) =>{
        return axios.get("http://localhost:3000/posts?_sort=id&order=desc").then((res)=>{
            dispatch({type: GET_POSTS, payload: res.data})
        })
        .catch((err)=> console.log(err))
    };
};

export const addPost = (data) => {
    return (dispatch) =>{
        return axios.post("http://localhost:3000/posts").then((res)=>{
            dispatch({type: GET_POSTS, payload: res.data})
        })
        .catch((err)=> console.log(err))
    };
};