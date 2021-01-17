import React from "react";

const Header = () => {
    return (
        <>
            <header className="mt-5 d-flex justify-content-between align-items-center">
                <div>
                    <h4>Creat Event App</h4>
                    <p>using react hooks.</p>
                </div>

                <button className="btn btn-info btn-sm">Login</button>
            </header>
        </>
    );
}

export default Header;