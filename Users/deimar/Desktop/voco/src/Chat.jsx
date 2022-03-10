import {useState} from "react";


        function App ()  {
        const [author, setAuthor] = useState('');
        const [submittedText, setSubmittedText] = useState(null);
        const [message, setMessage] = useState('');
        const [submittedText2, setSubmittedText2] = useState(null);
        const textChangeHandler = (i) => {
            setAuthor(i.target.value);
            //console.log(i.target.value);

        };

        const textChangeHandler2 = (i) => {
            setMessage(i.target.value);
            //console.log(i.target.value);

        };

        const submitHandler = (event) => {
            event.preventDefault();
            setSubmittedText(author);
            setAuthor("");

            setSubmittedText2(message);
            setMessage("");
        };

        return (
            <div className="App">
                <h1 class="title">MYCHAT</h1>
                <form onSubmit={submitHandler}>
                    <input class="user"
                        placeholder="Username"
                        type="text"
                        value={author}
                        onChange={textChangeHandler}
                    />

                    <input class="message"
                        placeholder="Message"
                        type="text"
                        value={message}
                        onChange={textChangeHandler2}
                    />

                    <button class="btn" type="submit" >
                        Submit
                    </button>
                </form>
                <div class="text">
                {submittedText && (<p  id="text-author"> User Name:&nbsp;&nbsp;{submittedText}</p>)}
                {submittedText2 && (<p id="text-message">{submittedText2}</p>)}
            </div>
            </div>
        );
    }
export default App;



