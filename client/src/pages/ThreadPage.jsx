import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import API from "../services/api";

import ReplySection from "../components/ReplySection";

function ThreadPage() {

    const { id } = useParams();

    const [thread, setThread] = useState(null);

    const fetchThread = async () => {

        const res = await API.get(`/threads/${id}`);

        setThread(res.data);
    };

    useEffect(() => {
        fetchThread();
    }, []);

    if (!thread) {
        return <h2>Loading...</h2>;
    }

    return (
        <div style={{ padding: "20px" }}>

            <h1>{thread.title}</h1>

            <p>{thread.content}</p>

            <hr />

            <ReplySection threadId={id} />

        </div>
    );
}

export default ThreadPage;
