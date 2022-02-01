
function Chat() {
    return (
<div class="box">
  <form>
  <div class="container">
      <input type="text" name="username" class="user" placeholder="Username" />
    </div>
    <div class="container">
      <input type="text" name="message" class="form-control" placeholder="Message" />
    </div>
    <div>
            <button type="submit" class="btn">SEND</button>
        </div>
  </form>
  <ul> 
    <div class="min-box">
<li class="listing">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
<p> John Smith * 12.01.2022 15:32</p></li>
<li class="listing">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
<li  class="listing">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
<li  class="listing"> class="box"Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
<li  class="listing">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
    </div>
  </ul>
</div>
  );
  }

  export default Chat;