import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import CardColumn from '../CardColumn/CardColumn';
import './GameBoard.css';

const GameBoard = () => {
    const [deckId, setDeckId] = useState("");
    const [cardCount, setCardCount] = useState(0);
    const [col1, setCol1] = useState([{}, {}, {},]);
    const [col2, setCol2] = useState([{}, {}, {}, {},]);
    const [col3, setCol3] = useState([{}, {}, {}, {}, {},]);
    const [col4, setCol4] = useState([{}, {}, {}, {}, {}, {},]);
    const [col5, setCol5] = useState([{}, {}, {}, {}, {}, {}, {},]);
    const [col6, setCol6] = useState([{}, {}, {}, {}, {}, {}, {}, {},]);
    const [col7, setCol7] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {},]);
    const [col8, setCol8] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {},]);
    const INITIAL_COLUMNS = [col1, col2, col3, col4, col5, col6, col7, col8];
    const [gameCols, setGameCols] = useState(INITIAL_COLUMNS);
    //const [card, setCard] = useState({});



    //  **  Make API Call to retrieve new, shuffled deck of cards & deck ID

    useEffect(() => {
        axios.get('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            .then((res) => {
                setDeckId(res.data.deck_id);
                setCardCount(res.data.remaining);
            })
    }, [])

    //  **  Function to retrieve a single card from the deck of cards API

    const dealCard = async () => {
        const res = await axios.get(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        setCardCount(res.data.remaining);
        // setCard(res.data.cards[0]);
        return res.data.cards[0];
    }

    const kickOff = async () => {

        for (let i = 0; i < gameCols.length; i++) {
            let flipCount = 1;
            for (let j = 0; j < gameCols[i].length; j++) {

                const getCard = await dealCard();

                gameCols[i][j] = getCard;
                gameCols[i][j]['isGrabbed'] = false;
                if (flipCount <= 2) {
                    gameCols[i][j]['isFlipped'] = true;
                    flipCount++;
                } else if (flipCount > 2) {
                    gameCols[i][j]['isFlipped'] = false;
                }
            }

        }
    }

    const popCards = (dragArray, colIdx, rowIdx) => {
        // console.log(dragArray, colIdx, rowIdx);
        // console.log("two", gameCols[colIdx], rowIdx);
        const gameCopy = gameCols.slice()
        const pickupCards = gameCopy[colIdx].filter((card) => card.isGrabbed !== true)
        gameCopy[colIdx] = pickupCards
        setGameCols(gameCopy)

    }

    return (
        <div className='game-board'>
            <button onClick={kickOff}>Click</button>
            <div className='game-grid'>
                {gameCols.map((col, index) => {
                    return (
                        <CardColumn key={index} cards={col} colIndex={index} popCards={popCards} />
                    )
                })}
            </div>
        </div>
    )
}

export default GameBoard