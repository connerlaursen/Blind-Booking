import NavBar from "../components/NavBar";

function Contact() {
    return (
        <div>
            <NavBar />
            <form method="post">
                <label>
                    What's on your mind?
                    <input name="postTitle" defaultValue="History/Culture" />
                </label>
                <label>
                    Message:
                    <textarea name="postContent" rows={4} cols={40} />
                </label>
                <button type="clear">Clear</button>
                <button type="send">Send</button>
            </form>
        </div>
    )
}

export default Contact;
