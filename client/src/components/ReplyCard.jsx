function ReplyCard({ reply }) {

    return (
        <div
            style={{
                border: "1px solid lightgray",
                padding: "10px",
                marginBottom: "10px"
            }}
        >

            <p>{reply.text}</p>

            <p>
                Upvotes: {reply.upvotes}
            </p>

        </div>
    );
}

export default ReplyCard;
