import { useEffect } from 'react';

export default function About(){
    useEffect(() => {
        fetch('http://127.0.0.1:8080/albums', 
        {
            method: "GET",
            headers: {"Access-Control-Allow-Origin": "*"}
        })
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
        });
     }, []);
    return (
        <>
            <p>About Page</p>
        </>
    )
}