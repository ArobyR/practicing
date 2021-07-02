import React from 'react'
import useFetch from '../hooks/useFetch'

const Posts = () => {
    
    const {response, error, isLoading} = useFetch("https://jsonplaceholder.typicode.com/posts")
    
    return (
        <div>
            
        </div>
    )
}

export default Posts
