import { useState } from "react";
import API from "../services/api";

function CreateThread({ fetchThreads }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
	//e.preventDefault(): By default, web browsers try to reload the whole page when a form 
	//is submitted. This line stops that from happening, keeping the app smooth and fast.
        e.preventDefault();

        await API.post("/threads/create", {
            title,
            content
        });

        setTitle("");//once submitted clear the text in input box
        setContent("");

        fetchThreads();//update the threads on home page immediately.
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Thread title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br /><br />

            <textarea
                placeholder="Describe your problem..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <br /><br />

            <button type="submit">
                Create Thread
            </button>

        </form>
    );
}

export default CreateThread;
