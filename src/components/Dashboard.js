import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                        <li>
                            <Link to="/map">Map</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Dashboard;
