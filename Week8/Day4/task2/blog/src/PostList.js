import React from 'react'
import posts from'./data.json'

function PostList (){
console.log('posts',posts)

// const wholeArray = posts.map((post) =>{
//     <div>
//         <h1>{post.title}</h1>
//         <h2>{post.content}</h2>
//         <p>{post.date}</p>
//         <h3>{post.slug}</h3>
//     </div>
    
//   })

return(
   posts.map((post) =>{
        return(
        <div>
            <h1>{post.title}</h1>
            <h2>{post.content}</h2>
            <p>{post.date}</p>
            <h3>{post.slug}</h3>
        </div>
        )}))


    }


export  default PostList