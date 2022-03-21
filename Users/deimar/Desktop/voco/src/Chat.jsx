/* import {useState, useEffect} from "react";


      function App ()  {
          const [author, setAuthor] = useState('');
          const [submittedText, setSubmittedText] = useState(null);
          const [messages, setMessages] = useState([]);
          const [submittedText2, setSubmittedText2] = useState(null);

          useEffect(() => {

          });

          const textChangeHandler = (i) => {
              setAuthor(i.target.value)
              //console.log(i.target.value);

          };

          const textChangeHandler2 = (i) => {
              setMessages(i.target.value);
              //console.log(i.target.value);

          };

          const submitHandler = (event) => {
              event.preventDefault();
              setSubmittedText(author);
              setAuthor("");

              setSubmittedText2(messages);
              setMessages("");

          };

      return (
          <div className="App">

              <div className="head">


                  <div className="text">
                      {submittedText && (<p  id="text-author"> User Name:&nbsp;&nbsp;{submittedText}</p>)}
                      {submittedText2 && (<p id="text-message">{submittedText2}</p>)}
                  </div>
              </div>


              <div class="body">

                  <form onSubmit={submitHandler}>

                      <div className="chatbox">

                          <input className="user"
                                 placeholder="Username"
                                 type="text"
                                 value={author}
                                 onChange={textChangeHandler}


                          />

                         <input className="message"
                                 placeholder="Message"
                                 type="text"
                                value={messages}
                                onChange={textChangeHandler2}

                          />
                      </div>

                  </form>

              </div>


              <button onClick={submitHandler} className="btn" type="submit">
                  Submit
              </button>

          </div>

      );
  }
export default App;
*/

import {useState} from "react";


function App ()  {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);


    const submitHandler = (event) => {
        event.preventDefault();
        setMessages([...messages, { author, text }]);
        setText('');
        setAuthor('');
    };

    return (

    <div className="App">

        <div className="head">
            <div className="text">

                <p  id="text-author"> User Name:{author}</p>
                 <p id="text-message">{text}</p>
            </div>
        </div>


        <div class="body">

            <form onSubmit={submitHandler}>

                <div>

                    <input className="user"
                           placeholder="Username"
                           type="text"
                           onChange={e => setAuthor (e.target.value)}


                    />

                    <input className="message"
                           placeholder="Message"
                           type="text"
                           onChange={e => setText (e.target.value)}

                    />
                </div>

            </form>

        </div>


        <button onClick={submitHandler} className="btn" type="submit">
            Submit
        </button>

    </div>

);
}
export default App;