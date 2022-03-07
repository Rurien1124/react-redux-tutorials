import React, { useState } from 'react';

const AddNumber = (props) => {
	let [size, setSize] = useState(0);
	
	return (
		<div>
			<h1>Add Number</h1>
			<input type="button" value="+" onClick={() => {
					props.onClick(size);
				}
			}></input>
			<input type="text" value={size} onChange={(e) => {
					setSize(Number(e.target.value));
				}
			}></input>
		</div>
	);
}

export default AddNumber;