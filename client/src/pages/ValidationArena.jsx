import { useEffect, useState } from "react";

import API from "../services/api";

import FAQCandidateCard from
"../components/FAQCandidateCard";

function ValidationArena() {

    const [faqs, setFaqs] = useState([]);

    const fetchFAQs = async () => {

        const res = await API.get("/faqs");

        setFaqs(res.data);
    };

    useEffect(() => {
        fetchFAQs();
    }, []);

    return (
        <div style={{ padding: "20px" }}>

            <h1>Validation Arena</h1>

            {faqs.map((faq) => (
                <FAQCandidateCard
                    key={faq._id}
                    faq={faq}
                    fetchFAQs={fetchFAQs}
                />
            ))}

        </div>
    );
}

export default ValidationArena;