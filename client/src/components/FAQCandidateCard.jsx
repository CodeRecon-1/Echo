import API from "../services/api";

function FAQCandidateCard({
    faq,
    fetchFAQs
}) {

    const vote = async (type) => {

        await API.post(
            `/faqs/vote/${faq._id}`,// this endpoint does not exist in server
            { type }
        );

        fetchFAQs();
    };

    return (
        <div
            style={{
                border: "1px solid gray",
                padding: "20px",
                marginBottom: "20px"
            }}
        >

            <h3>
                {faq.proposedQuestion}
            </h3>

            <p>
                {faq.proposedAnswer}
            </p>

            <p>
                Score: {faq.score}
            </p>

            <p>
                👍 {faq.upvotes}
                {" | "}
                👎 {faq.downvotes}
            </p>

            <button
                onClick={() => vote("UP")}
            >
                Upvote
            </button>

            <button
                onClick={() => vote("DOWN")}
            >
                Downvote
            </button>

        </div>
    );
}

export default FAQCandidateCard;