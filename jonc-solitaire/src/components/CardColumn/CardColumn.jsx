import React, { useState } from 'react';
import Card from '../Card/Card';
import { motion, LayoutGroup } from "framer-motion";
import DragContainer from '../DragContainer/DragContainer';
import './CardColumn.css'

const CardColumn = ({ cards, colIndex, popCards }) => {
    const [dragContainer, setDragContainer] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isGrabbed, setIsGrabbed] = useState(false);

    const scoopCards = (rowIndex) => {
        //console.log(colIndex, rowIndex);
        let dragArray = cards.slice(rowIndex)
        dragArray.forEach((card) => {
            card.isGrabbed = true;
        })
        setDragContainer(dragArray);
        popCards(dragArray, colIndex, rowIndex)
        setIsDragging(true)
    }

    return (
        <div className='card-column'>

            {cards.map((card, index) => {
                return <Card key={index} card={card} rowIndex={index} scoopCards={scoopCards} />
            })}
            {
                isDragging ?
                        <DragContainer cards={dragContainer} scoopCards={scoopCards} />
                    : null
            }
        </div>
    )
}

export default CardColumn