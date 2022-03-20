import {useState} from "react";


        function App ()  {
        const [author, setAuthor] = useState('');
            const [text, setText] = useState('');
            const [messages, setMessages] = useState([]);



            const submitHandler = (event) => {
                event.preventDefault();
               setAuthor('')
                setMessages ('');
        };

        return (
            <div className="App">

                <div className="head">

                    <div className="text2">
                    <div className="text">
                        <p id="text-message"> {messages} </p>
                        <p id="text-author"> {author} </p>
                    </div>
                    </div>
                </div>


                <div class="body">

                    <form>

                        <div className="chatbox">

                            <input className="user"
                                   placeholder="Username"
                                   type="text"

                            />

                           <input className="message"
                                   placeholder="Message"
                                   type="text"

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



