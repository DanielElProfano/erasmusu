import React, {useEffect, useState } from 'react';
import {fetchAllData}  from '../../../services/apiCall';

import './Home.scss'

const Home = () => {
    const [sites, setSites] = useState([]);
    const [page, setPage] = useState(1); // initial page is page 1
    const [showPage, setShowPage] = useState(true)
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
        console.log(data)
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
    const nextPage = (next) => { // reutilizo la función
        debugger
        let pageTmp = page;
        next ?  pageTmp++ : pageTmp--;
        setShowPage(false);
        setPage(pageTmp);
        setShowPage(true)
    }
    return(
        <div> hola
           {ok && <div>
               {page !== 1 && <button onClick={()=>nextPage(false)}>Prev</button>}
               <button onClick={()=>nextPage(true)}>next</button>
                {showPage && <div id="showpage">
                    <div id="page">{renderSites(10, sites, page)}</div>
                </div>}
                </div>}
            
        </div>
    )
}

export default Home;