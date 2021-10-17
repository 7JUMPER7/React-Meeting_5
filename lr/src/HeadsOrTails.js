import './HeadsOrTails.css';
import { useRef, useState } from 'react';
import axios from 'axios';

export default function HeadsOrTails() {
    const APIKEY = '3746c5fe-2b27-49fc-ae39-eb441778a90a';

    const orel = useRef(null);
    const reshka = useRef(null);
    const [selectId, setSelectId] = useState(null);
    const [droppedId, setDroppedId] = useState(null);
    const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);
    const [isResultShown, setIsResultShown] = useState(false);

    const select = async (e) => {
        if(!isButtonsDisabled) {
            setIsButtonsDisabled(true);
            setDroppedId(await getRandom());
            if(e.target.innerText === 'Орел') {
                orel.current.className = 'select selected';
                reshka.current.className = 'select';
                setSelectId(0);
            } else {
                orel.current.className = 'select';
                reshka.current.className = 'select selected';
                setSelectId(1);
            }
            setIsResultShown(true);
            setTimeout(clearSelected, 2000);
        }
    }
    const decideWinner = () => {
        let str = '';
        if(droppedId === 0) {
            str += 'Выпал орел';
        } else if(droppedId === 1) {
            str += 'Выпала решка';
        } else {
            str += 'Ошибка';
        }

        return str;
    }
    const clearSelected = () => {
        setIsButtonsDisabled(false);
        setIsResultShown(false);
        orel.current.className = 'select';
        reshka.current.className = 'select';
    }
    
    const getRandom = async () => {
        let data = {
            "jsonrpc": "4.0",
            "method": "generateIntegers",
            "id": "randomInteger",
            "params" : {
                "apiKey": APIKEY,
                "n": 1,
                "min": 0,
                "max": 1
            }
        };
        let res = await axios.post('https://api.random.org/json-rpc/4/invoke', data);
        return res.data.result.random.data[0];
    }
    let displayHeight = (isResultShown) ? '300px' : '150px';
    let resultText = decideWinner();
    let resultColor = (selectId === droppedId) ? '#90be6d' : '#f94144';
    return(
        <div className="container" style={{height: displayHeight}}>
            <h2>Выберите сторону:</h2>
            <div className="selectBox">
                <div className="select" ref={orel} onClick={select}>Орел</div>
                <div className="select" ref={reshka} onClick={select}>Решка</div>
            </div>
            <div className="resultBox" id="resultBox" style={{color: resultColor}}>{resultText}</div>
        </div>
    );
}