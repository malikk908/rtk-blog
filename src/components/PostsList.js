import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts, getPostsStatus, getPostsError } from '../store/slices/PostSlice'

import PostsExcerpt from './PostsExcerpt'


const PostsList = () => {

    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);
   

    let content;
    if(postStatus === 'loading'){
        content = <p>'Loading...'</p>

    }else if(postStatus === 'succeeded'){
        const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post}/>)
        console.log(content)

    }else if(postStatus === 'failed'){
        content = <p>{error}</p>
    }
    


    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}

export default PostsList