import React, { useState, useEffect } from 'react';

function App(){
    const [postId,setPostId] = useState(null);
    const [errorMessage,setErrorMessage] = useState(null);
    

    useEffect(() => {
        
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' ,
                'Jason-test':'123'
            },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://jsonplaceholder.typicode.com/invalid-url', requestOptions)
            .then(async response => {
                const data = await response.json();
    
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                setPostId(data.id);
            })
            .catch(error => {
                setErrorMessage(error.toString());
                console.error('There was an error!', error);
            });
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    
    return {
        <div className="text-center">
            <h3 className="p-3">React HTTP POST Requests with Fetch</h3>
            <div>Post Id with async/await: {postId}</div>
            <div>Error:{errorMessage} </div>
        </div>
    };
    
}

export { App };
