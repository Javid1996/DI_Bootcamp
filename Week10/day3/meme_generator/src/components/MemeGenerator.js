import React, { useEffect, useState, useRef } from "react";



function MemeGenerator(){
    const topInput = useRef();
    const bottomInput = useRef()
    const [meme, setMeme] = useState({
        topText:'',
        bottomText:'',
        randomImage:'http://i.imgflip.com/1bij.jpg'
});
    const [allMemeImgs,setAllMemeImg] = useState([]);
    const url="https://api.imgflip.com/get_memes"
    
    
    useEffect(() => {
        
        const imgCreator = async()=>{
            // const imgArr=[]
        let fetchResult = await fetch(url);
        let data = await fetchResult.json();
        console.log(data);
        const newData = data.data.memes.map(i => {
            
            allMemeImgs.push({
              id : i.id,
              memeUrl : i.url
            })});
        setAllMemeImg(newData) 
        console.log('new data',newData);   
    }
    imgCreator();


    },[])


const imgGenerator=()=>{
    
    const randomMemeImg = allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)];
        let randomUrl = randomMemeImg.memeUrl;
        // console.log(memeUrl);
        console.log(randomUrl);

        setMeme((prevMeme) => ({
            
            ...prevMeme,
            randomImage: url,
        }));    
}

const handleChange = (e)=>{
    e.preventDefault();

    const topValue =topInput.current.value;
    const bottomValue = bottomInput.current.value; 
    setMeme((prevState)=>{
        return{
            ...prevState,
            topText:topValue,
            bottomText:bottomValue
        }
        
    })
    console.log(meme);

}
    
    return(
        <>
       
         <div className="meme-form" onChange={handleChange} >
         <input ref={topInput}  type='text' placeholder="top"/>
         <input  ref={bottomInput}  type='text' placeholder="bottom"/>
         <button  className="button" type="submit" onClick={imgGenerator}>Gen</button>
         </div>
        
        <div className="meme">
            <img src={meme.randomImage}/>
            <h2 className="top">{meme.topText}</h2>
            <h2 className="bottom">{meme.bottomText}</h2>
        </div>
        
        </>
    )
}


export default MemeGenerator