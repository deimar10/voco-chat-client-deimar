import {useState} from "react";

function App () {
    const [name, setName] = useState('');
    const  [chats, setChats] = useState([]);
    const [msg, setMsg] = useState('');


    const sendChat = ()=>{
        const c = [...chats];
        c.push({name, message:msg});
        setChats(c);
        setMsg('')
    }

return (
    <div className="app">
        <div className="box-head">
            <h1>{name}</h1>
            <div className="chat-container">
                {chats.map((c) => (
                    <div className={`container ${c.name===name ? 'me':''}`}>
                        <p className="chatbox">
                            <strong> {c.name}: </strong>
                            <span>{c.message}</span>
                        </p>
                    </div>
                ))}
            </div>

            <div  className="btm">

                <input className="author"
                       type="text"
                       placeholder="Enter your name"
                       onBlur={event => setName(event.target.value)}
                />

                <input
                    className="message"
                    onInput={e=>setMsg(e.target.value)}
                    value={msg}
                    type="text"
                    placeholder="message"/>
            </div>
        </div>
        <button className="btn" onClick={e=>sendChat()}>send</button>
        </div>

);
}
export default App;