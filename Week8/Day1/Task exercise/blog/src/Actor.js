

// import React from 'react';

// class Actor extends React.Component {
//     render() {
//         return <h2>Actor</h2>;
//     }
// }

// export default Actor;

import './Actor.css'
import React from 'react'

function Actor({ actorsList }) {
    return (
        actorsList.map(actor => (
            <ul className='ulli' key={actor.firstName}>
                <li style={{border:'1px',backgroundColor:'yellow'}}>{actor.firstName}</li>
                <li style={{border:'1px',backgroundColor:'green'}}>{actor.lastName}</li>
            </ul>
        ))
    )
}

export default Actor