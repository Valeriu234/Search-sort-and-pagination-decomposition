import React from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import {useState} from "react";

const PostForm = ({create}) => {
    const [post,setPost] = useState({title: '', body: ''})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '',body: ''});
    }

    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    placeholder='Numele postului'
                    type="text"
                    onChange={e => setPost({...post, title: e.target.value})}
                />

                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    placeholder='Descrierea postului'
                    type="text"
                />
                <MyButton onClick={addNewPost} >Creaza postul</MyButton>
            </form>
        </div>
    );
};

export default PostForm;