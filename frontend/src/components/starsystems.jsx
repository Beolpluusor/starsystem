import { useEffect, useState } from "react";

function StarSystems() {
    const [systems, setSystems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/starsystem")
            .then(res => res.json())
            .then(data => setSystems(data))
            .catch(err => console.error("Fetch error:", err));
    }, []);

    if (!systems || systems.length === 0) {
        return <p>loading ...</p>;
    }

    return (
        <div>
            {systems.map(system => (
                <div key={system._id} style={{ marginBottom: "20px" }}>
                    <h2>{system.STAR?.starname}</h2>

                    <p><strong>Star type:</strong> {system.STAR?.type}</p>
                    <p><strong>Mass:</strong> {system.STAR?.mass}</p>
                    <p><strong>Age:</strong> {system.STAR?.age} billion years</p>

                    <h3>Planets:</h3>
                    <ul>
                        {system.planet?.map(p => (
                            <li key={p._id}>
                                {p.planet_name} ({p.planet_type})
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default StarSystems;