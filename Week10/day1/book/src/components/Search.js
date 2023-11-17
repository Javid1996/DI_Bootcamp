import React, { useEffect, useState, useRef } from "react";
import BookBox from "./BookBox";





const Search = ()=> {
    
    const [current_result, setresult] = useState([]);
    
   
    const searchInput = useRef()
    
    
    async function getAutoCompleteList(title) {
        const url = `https://openlibrary.org/search.json?title=${title}`
        let auto_complete_result = await fetch(url);
          
        let objectslist = await auto_complete_result.json();
        let titleList = [];
        
        console.log(" objectList-->", objectslist);
        const sliceData = objectslist?.docs.slice(0,10)
        sliceData.forEach(i => {
    
          titleList.push({
            title: i.title,
            author: i.author_name,
            key: i._version_,
            year: i.first_publish_year
            
          });
        });
        console.log('titleList=====>',titleList);
        console.log("Search.js- objectList-222->", objectslist);

        setresult(titleList);
        console.log('current result ===>',current_result);
       
    }

    const setText = e => {
        e.preventDefault()
        const inputValue = searchInput.current.value

        console.log(inputValue)
        
        if (inputValue !== "") {getAutoCompleteList(inputValue)};
        
    }

    return(
        <>
        <div className="box">
            <form onSubmit={setText}> 
                <input type="text" ref={searchInput}  id="searchInput" name="searchInput" />
                
                <div className="book_container">
               {current_result.map((b)=> {
                console.log(b.key);
                return(
                    
                        <BookBox  key={b.key} author={b.author} title={b.title} year={b.year} />
                        )
                    })
                }
                </div>
                
            </form>
       </div>
       
        </>
    )
}




export default Search;