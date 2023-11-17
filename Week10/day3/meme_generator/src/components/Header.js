import React from "react";
import Trollface from '../Trollface.png'


function Header(){


    return(
        <header>
            {/* <Image src={Trollface}></Image> */}
            <img src={Trollface}/>
            <p>Meme Genetator</p>
        </header>
    )
}


export default Header