import React from 'react';
import GameBoard from '../GameBoard/GameBoard';
import background from '../../assets/dark-green-felt.jpg'
import './Home.css'

const Home = () => {

    return (
        <div className='home-page'>
            <GameBoard />

            <img className='background-img' alt='background' src={background} />
        </div>
    )
}

export default Home