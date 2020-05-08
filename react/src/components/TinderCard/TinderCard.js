import React from 'react';
import './TinderCard.css';
import { Card, CardWrapper } from '../../react-swipeable-cards';

const db = [
    {
        name: 'Richard Hendricks',
        url: './img/richard.jpg'
    },
    {
        name: 'Erlich Bachman',
        url: './img/erlich.jpg'
    },
    {
        name: 'Monica Hall',
        url: './img/monica.jpg'
    },
    {
        name: 'Jared Dunn',
        url: './img/jared.jpg'
    },
    {
        name: 'Dinesh Chugtai',
        url: './img/dinesh.jpg'
    }
]

function TinderCardComponent() {
    const characters = db;

    // return (
    //     <div>

    //         <h1>React Tinder Card</h1>
    //         <div className='cardContainer'>
    //             {characters.map((character) =>
    //                 <TinderCard
    //                     className='swipe'
    //                     key={character.name}
    //                     onSwipe={(dir) => swiped(dir, character.name)}
    //                     onCardLeftScreen={() => outOfFrame(character.name)}
    //                     preventSwipe={['up', 'down']}>
    //                     <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
    //                         <h4> $$</h4>
    //                         <h3> {character.name}</h3>
    //                     </div>
    //                 </TinderCard>
    //             )}
    //         </div>
    //         {
    //             lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> :
    //                 <h2 className='infoText'>No direction swiped</h2>
    //         }
    //     </div >
    // );
    const wrapperStyle = {
        width: "100vw",
        height: "100vh",
        position: "absolute",
        left: "0%",
        top: "0%",
    }

    return (
        <div>
            <CardWrapper style={wrapperStyle}>
                {characters.map((character) =>
                    <Card style={{ backgroundImage: 'url(' + character.url + ')' }}>
                        <div className="restaurantName">
                            <h3>{character.name}</h3>
                        </div>
                        <div className="restaurantRatingPrice">
                            <h5> 4.6 | $$ </h5>
                        </div>
                        <div className="restaurantDistance">
                            <h5> 1.2KM </h5>
                        </div>
                    </Card>
                )}

            </CardWrapper>
        </div >
    );
}

export default TinderCardComponent;