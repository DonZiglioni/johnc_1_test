import React from 'react';
import Card from '../Card/Card';
import { motion, LayoutGroup } from "framer-motion";
import './DragContainer.css';

const DragContainer = ({ cards, scoopCards }) => {

    console.log("DRAG CONTAINER", cards);

    return (
        <>
            {cards.map((card, index) => {
                return (
                        <motion.div layout key={index} drag className='drag-container'>
                            <Card card={card} scoopCards={null} />
                        </motion.div>
                )
            })}
        </>
    )
}

export default DragContainer