import './css/App.css';
import { useState } from 'react';


function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default function App(){
    // react hooks
    const [hexcode, setHexCode] = useState()    //for string output
    const [bgcolor,setBgcolor] = useState() //for color output


    
    function handleClick(){
        const rval = +document.querySelector('.r').value;
        const gval = +document.querySelector('.g').value;
        const bval = +document.querySelector('.b').value;
        const opbox = document.querySelector('.output-box');
        let res;
        if((rval<0 || rval>255) || (gval<0 || gval>255) || (bval<0 || bval>255)){
            res = "INVALID";
        }
        else
            res = rgbToHex(rval, gval, bval);
        setHexCode(() => res);
        setBgcolor(() => {
            if(res==='INVALID'){
                opbox.style.backgroundColor = "#ffffff";
            }else{
                opbox.style.backgroundColor = res;
            }
        })
    }

    return (
        <div className="main">
            <div className="container">
                <div className="inputs">
                R: <input type="text" className="r" />
                G: <input type="text" className="g" />
                B: <input type="text" className="b" />
                </div>
                <hr />
                <div className="output">
                    HEX : <p className="hex-code">{hexcode}</p>
                    <div className="output-box">

                    </div>
                </div>
                <div className="submit-button">
                    <button onClick={handleClick}>Convert</button>
                </div>
            </div>
            <footer>
                Desgined and code written by DumbestSoul.
            </footer>
        </div>
    )
}