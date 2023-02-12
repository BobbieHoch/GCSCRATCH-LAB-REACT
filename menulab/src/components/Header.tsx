import React from "react";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="header">
            <h1>
                <Link to="/menu"></Link>
            </h1>
        </div>
    );
}
