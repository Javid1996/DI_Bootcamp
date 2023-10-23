import React from 'react';

const UserFavoriteAnimals = (props) => {
    console.log(props)
    return (
        props.animals.map(animal => (
            <ul key={animal}>
                <li>{animal}</li>
            </ul>
        ))
    )
}
export default UserFavoriteAnimals;