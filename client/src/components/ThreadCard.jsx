import { Link } from "react-router-dom";

function ThreadCard({ thread }) {

    return (
        <div
            style={{
                border: "1px solid gray",
                padding: "10px",
                marginBottom: "10px"
            }}
        >

            <Link to={`/thread/${thread._id}`}>

                <h3>{thread.title}</h3>

            </Link>

            <p>{thread.content}</p>

        </div>
    );
}

export default ThreadCard;
