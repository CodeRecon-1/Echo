import { useEffect, useState } from "react";
import API from "../services/api";

import CreateThread from "../components/CreateThread";
import ThreadCard from "../components/ThreadCard";


function Home() {
	const [threads, setThreads]  = useState([]);
	const fetchThreads = async () => {
		const res = await API.get("/threads");
		setThreads(res.data);	
	};
	useEffect(() => {
		fetchThreads();
	},[]);

	return (
		<div style={{ padding: "20px" }}>

            <h1>Project Echo</h1>

            <CreateThread fetchThreads={fetchThreads} />

            <hr />

            {threads.map((thread) => (
                <ThreadCard
                    key={thread._id}
                    thread={thread}
                />
            ))}

        </div>
    );
	

};

export default Home;
