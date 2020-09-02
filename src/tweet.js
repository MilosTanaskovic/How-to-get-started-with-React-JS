import React from 'react';

function Tweet({name, message}){

    return(
        <div>
            <h3>Hello {name}</h3>
            <h2>{message}</h2>
            <button>Hello</button>
        </div>
    );
}
export default Tweet;