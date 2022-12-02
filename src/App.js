import {useState} from 'react'

function App() {

	const [binary, setBin] = useState('');
	const [tmpBin, setTmpBin] = useState('');
	const [dec, setDec] = useState('');


	const handleKeyDown = e => {
		// Gets the keyCode
		const keyCode = e.keyCode || e.which
	
		// key code 48 = 0
		// key code 49 = 1
		if (keyCode !== 48 && keyCode !== 49) {
			// If not 0 or 1, prevent to continue
		  e.preventDefault()
		}
	  }
	
	const onInputChange = (event) => {
		const inputString = event.target.value;
			// Do your logic here
		setBin({inputString})
		console.log(inputString)
	}

	const conv = (event) =>{
		event.preventDefault();
		var value=0;
		for(var i=0; i<binary.length; i++){
			
			if (binary.charAt(i)==='1'){
				console.log(binary.charAt(i));
				value += Math.pow(2,i);
			}
		}
		setDec(value);
		console.log(value);
	}

	const handleChange = (event) => {
		setDec(event.target.value);
	}


	return (
		<div className="App">
			<div className="title">
				Binary to Decimal Converter
			</div>
			<div className="din2dec">
				<div className="numInput">
					<label>Binary:<br></br>
						<input type="text" name="input" maxLength="8"  pattern="[0-1]*" 
						required={true}  onChange={onInputChange} onKeyDown={handleKeyDown}/>
					</label>
				</div>
				<div className="convert">
					<button onClick={conv}>Convert</button>
				</div>
				
				<div className="numOutput">
					<label>Decimal:<br></br>
						<input type="text" name="result" readOnly={true} onChange={handleChange} value={dec}/>
					</label>
				</div>
			</div>
		</div>
	);
}

export default App;
