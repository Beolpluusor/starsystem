import { useEffect, useState } from "react";

function StarSystems() {
    const [system, setSystem] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/starsystem")
        .then(res => res.json())
        .then(data => setSystem(data));
    }, []);

    if (!system) return <p>loading ...</p>;

    return (
        <div>
            <h1>{system.STAR.starname} StarSystem</h1>
            <ul>
            {system.planet.map(p => (
                <li key={p._id}>
                {p.planet_name} - {p.planet_type}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default StarSystems;