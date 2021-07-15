import React from 'react';
import './Card.css';
import CardItem from './CardItem';

import one from '../../images/img-9.jpg'
import two from '../../images/img-2.jpg'
import three from '../../images/img-3.jpg'
import four from '../../images/img-4.jpg'
import five from '../../images/img-8.jpg'

function Card() {
    return (
        <div className='cards'>
            <h1> Checkout this epic destinations!!! </h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={one}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={two}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={three}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={four}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={five}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Card;
