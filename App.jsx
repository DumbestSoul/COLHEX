import './css/App.css';

export default function App(){
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
                    HEX : <p className="hex-code">#234567</p>
                    <div className="output-box">

                    </div>
                </div>
                <div className="submit-button">
                    <button>Convert</button>
                </div>
            </div>
        </div>
    )
}