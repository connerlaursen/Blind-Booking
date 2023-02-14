import NavBar from "../components/NavBar";

function Contact() {
    return (
        <div>
            <NavBar />
            <div id="contactDiv">
                <form method="post">
                    <label className="contactMessage">

                        <input name="postTitle" placeholder="Subject" />
                    </label>
                    <label className="contactMessage">

                        <textarea name="postContent" placeholder="Enter text here" rows={4} cols={40} />
                    </label>
                    <button className="contactBtn" type="clear">Clear</button>
                    <button className="contactBtn" type="send">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
