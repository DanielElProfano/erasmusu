import React, {useEffect } from 'react';

import './Home.scss'

const Home = () => {

    useEffect(() => {
        callToApi()
    },[])

    const callToApi = async () => {
        const response = await fetch('http://feeds.spotahome.com/ads-housinganywhere.json');
        const data = response.json();
        console.log(data)
    }
    return(
        <div>
            Home
        </div>
    )
}

export default Home;