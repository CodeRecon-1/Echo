import { useEffect, useState }
from "react";

import API from "../services/api";

function FAQPage() {

    const [faqs, setFaqs] = useState([]);

    const fetchFAQs = async () => {

        const res = await API.get(
            "/official-faqs"
        );

        setFaqs(res.data);
    };

    useEffect(() => {
        fetchFAQs();
    }, []);

    return (
        <div style={{ padding: "20px" }}>

            <h1>
                Official FAQ Knowledge Base
            </h1>

            {faqs.map((faq) => (

                <div
                    key={faq._id}
                    style={{
                        border:
                        "1px solid gray",

                        padding: "20px",

                        marginBottom: "20px"
                    }}
                >

                    <h3>
                        {faq.question}
                    </h3>

                    <p>
                        {faq.answer}
                    </p>

                </div>
            ))}

        </div>
    );
}

export default FAQPage;