import React from 'react';

//Components are defined as functions that
//return JSX.
// Defined as function. This component is named Greeting.
function Greeting() {
    // The function returns the JSX for this component.
    return (
    // This JSX tells React what HTML to render
    <div className="Greeting">
    <h2>Hello Class!</h2>
    </div>
    );
    }
    // Export it so that other components can use it.
    export default Greeting;