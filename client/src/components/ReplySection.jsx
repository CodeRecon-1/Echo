import { useEffect, useState } from "react";

import API from "../services/api";

import ReplyCard from "./ReplyCard";

function ReplySection({ threadId }) {

    const [text, setText] = useState("");

    const [replies, setReplies] = useState([]);

    const fetchReplies = async () => {

        const res = await API.get(
            `/replies/${threadId}`
        );

        setReplies(res.data);
    };

    useEffect(() => {
        fetchReplies();
    }, []);

    const handleReply = async () => {

        await API.post("/replies/create", {
            threadId,
            text
        });

        setText("");

        fetchReplies();
    };

    return (
        <div>

            <h2>Replies</h2>

            <textarea
                placeholder="Write reply..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <br />

            <button onClick={handleReply}>
                Post Reply
            </button>

            <hr />

            {replies.map((reply) => (
                <ReplyCard
                    key={reply._id}
                    reply={reply}
                />
            ))}

        </div>
    );
}

export default ReplySection;
