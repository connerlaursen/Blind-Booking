import NavBar from "../components/NavBar";

function Contact() {
    return (
        <div>
            <NavBar />
            <div id="contactDiv">
                <form method="post">
                    <label>
                        What's on your mind?
                        <input name="postTitle" defaultValue="History/Culture" />
                    </label>
                    <label className="contactMessage">
                        Message:
                        <textarea name="postContent" rows={4} cols={40} />
                    </label>
                    <button type="clear">Clear</button>
                    <button type="send">Send</button>
                </form>
            </div>
            <footer id="content-wrap">
                <small id="footer">Copyright 2023 BBLLC. All Rights Reserved.</small>
            </footer>
        </div>
    )
}

export default Contact;
