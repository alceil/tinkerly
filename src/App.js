import './App.css';
import { useState } from 'react';
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';

import axios from "axios";
import { ReactComponent as CopyIcon } from "../src/assets/copy-icon.svg";
function App() {
  const copyUrlToClipboard = (e) => {
		copy(shareText);
	};
  const [shareText, setShareText] = useState("");
     const [input, setInput] = useState('');

  // const handleInputChange = (inputValue) => {
  //   setShareText(inputValue);
  // };


  const onSubmit = (inputValue) => {
   console.log("clicked")

    console.log(input);
    axios
      .post("https://tinkerlybackend.herokuapp.com/shortUrls", { origUrl: input })
      .then((response) => {
        console.log(response);
        let shareText = response.data["shortUrl"];
        console.log(shareText)
        setShareText(shareText)
      })
      .catch((error) => {
        console.log(error);
      });
    }

const link ="https://justpaste.herokuapp.com/614f3458af32a7001501dc77" ;
  return (

<div>
    <div className="tinkerly-container">
      <h1>Tinker.ly⚡</h1>
      <p>Shorten your links in a jiffy</p>
  <input type="text" name="fname"  onChange={(e) => { setInput(e.target.value) }}>
    </input>
<button onClick={onSubmit}>Shrink</button>
{shareText==""?<div></div>:<div className="shortened-link-container">
  {shareText}
<CopyIcon className="copy-btn"
 onClick={copyUrlToClipboard} 
 />
</div>}

<ToastContainer
position="bottom-center"
autoClose={1000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </div>

    </div>

  );
}

export default App;
