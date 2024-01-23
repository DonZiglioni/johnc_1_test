import React, { useRef } from 'react';
import { motion } from "framer-motion"
import './Card.css'


const Card = ({ card, scoopCards, rowIndex }) => {
    const imgBack = 'https://www.deckofcardsapi.com/static/img/back.png';
    const constraintsRef = useRef(null)

    // **  Check to see if there is a card value to display  **
    // const checkEmpty = () => {
    //     if (!card.image) {
    //         return false;
    //     }
    //     //  **  Sets the card image  **
    //     if (card.isFlipped === true) {
    //         return <img src={imgBack} alt='cardBack' />
    //     } else {
    //         return <img src={card.image} alt='cardImg' />
    //     }
    // }

    //  **  Getting card values for selected card and 
    //  **  the destination card

    // const getCardValue = (src) => {
    //     const suit = src.charAt(src.length - 5);
    //     const value = src.charAt(src.length - 6);
    //     return {
    //         suit: suit,
    //         value: value,
    //     }
    // }


    return (

        <motion.div
            layout
            className='card'
            drag
        >
            <motion.img
                layout
                drag
                className='card-img'
                alt='card'
                src={card.isFlipped ? imgBack : card.image}
                onMouseDown={() => scoopCards(rowIndex)}
            />
        </motion.div>

    )
}

export default Card