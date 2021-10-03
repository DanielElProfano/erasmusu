import React, {useEffect, useState } from 'react';
import {fetchAllData}  from '../../../services/apiCall';

import './Home.scss'

const Home = () => {
    const [sites, setSites] = useState([]);
    const [page, setPage] = useState(1); // initial page is page 1
    const [ok, setOk] = useState(false);

    
    useEffect(() => {
        callToApi();
    },[])


    const checkLocalStorage = () => {
        if (localStorage.getItem("erasmusu") === null) {
            callToApi()
          }
        else{
            const local = localStorage.getItem('erasmusu');
            // setOk(true)
            // setSites(local)
            console.log(local[3])
        }
    }

    const callToApi = async () => {
        const data = await fetchAllData()
        let array = []
        data.forEach((element, index) => {
            array.push(element);
        })
        setSites(array)
        setOk(true)
    }
    const renderSites = (number, sites, page) => {
        const forArray = [];
        const initialSite = (number * page) - number;
        const finalSite = number * page;
        for(let i = initialSite; i < finalSite; i++)
        {
            forArray.push(
            <div key={i}>
                <div>
                    <img src={sites[i].Images[0]} width="300px" heigth= "300px"alt="imagen"></img>
                </div>
                <div>
                    <h1>{sites[i].City}</h1>
                    <p>{sites[i].Address}</p>
                    <a href={sites[i].Link}><p>Link</p></a>
                </div>
            </div>
            )
        }
        return forArray
    }
    const nextPage = () => {
        let pageTmp = page;
        pageTmp++
        setPage(pageTmp);
        const element = document.getElementById("showpage");
        const child = element.firstChild;
        debugger
        element.removeChild(child);
    }
    return(
        <div> hola
           {ok && <div>

               recibido
               <button onClick={()=>nextPage()}>Activate Lasers</button>
                <div id="showpage">{renderSites(10, sites, page)}</div>
                {/* {sites.map((site , index) => {
                    return (
                        <div key={index}>
                            <div>
                                <img src={site.Images[0]} width="300px" heigth= "300px"alt="imagen"></img>
                            </div>
                            <div>
                                <h1>{site.City}</h1>
                                <p>{site.Address}</p>
                                <a href={site.Link}><p>Link</p></a>
                            </div>
                        </div>
                    )
    })}  */}
                
                </div>}
            
        </div>
    )
}

export default Home;