import React from 'react';
import {useEffect, useMemo, useState} from "react";
import PostsList from "../Components/PostsList";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import MyModal from "../Components/UI/MyModal/MyModal";
import MyButton from "../Components/UI/MyButton/MyButton";
import PostService from "../API/post.service";
import Loader from "../Components/UI/Loader/Loader";
import {useFetching} from "../Components/Hooks/useFetching";
import {getPageArray, getPageCount} from "../Components/utils/pages";
import Pagination from "../Components/UI/Pagination/Pagination";


function Posts() {
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    let pagesArray = getPageArray(totalPages);


    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    console.log(totalPages)
    const sortedPosts = useMemo(() => {
        console.log('Sa efectuat sortarea')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])


    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])


    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }


    return (<div className="App">
        <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
            Creaza un utilizator
        </MyButton>
        <MyModal setVisible={setModal} visible={modal}><PostForm create={createPost}/></MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        {postError && <h1>Sa produs o eroare ${postError}</h1>}
        {isPostsLoading ?
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div> :
            < PostsList remove={removePost} title='Lista posturilor 1' posts={sortedAndSearchedPosts}/>}
        <Pagination
            totalPages={totalPages}
            changePage={changePage}
            page={page}
        />

    </div>);
}

export default Posts