import React, {useEffect, useState } from 'react';
import {fetchAllData}  from '../../../services/apiCall';

import './Home.scss'

const Home = () => {
    const [sites, setSites] = useState([]);
    const [page, setPage] = useState(1); // initial page is page 1
    const [showPage, setShowPage] = useState(true);
    const [number, setNumber] = useState(10)
    const [ok, setOk] = useState(false);
    const [selectForm, setSelectForm] = useState('')

    
    useEffect(() => {
        callToApi();
    },[])


    // const checkLocalStorage = () => {
    //     if (localStorage.getItem("erasmusu") === null) {
    //         callToApi()
    //       }
    //     else{
    //         const local = localStorage.getItem('erasmusu');
    //         // setOk(true)
    //         // setSites(local)
    //         console.log(local[3])
    //     }
    // }

    const callToApi = async () => {
        const data = await fetchAllData()
        let array = []
        data.forEach((element, index) => {
            array.push(element);
        })
        console.log("array: ", array)
        setSites(array)
        setOk(true)
    }
    const orderArray = (arrayToSort, field) => {
        debugger
        if (typeof arrayToSort[0][field] === 'string')
            {
                arrayToSort.sort((x, y) => {
                let a = x[field].toUpperCase(),
                    b = y[field].toUpperCase();
                return a == b ? 0 : a > b ? 1 : -1;
            })
        }else{
            arrayToSort.sort((x, y) => 
            {
                return x[field] - y[field];
            })
        };
        setSites(arrayToSort)
    }
    
    const renderSites = (number, sites, page) => {  //
        const forArray = [];
        const initialSite = (number * page) - number;
        const finalSite = number * page;
        for(let i = initialSite; i < finalSite; i++)
        {
            forArray.push(
            <div className="b-card" key={i}>
                <div className="b-card">
                    <img src={sites[i].Images[0]} width="300px" heigth= "300px"alt="imagen"></img>
                </div>
                <div>
                    <h2>{sites[i].Description.split('.')[0]}</h2> 
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
        let pageTmp = page;
        next ?  pageTmp++ : pageTmp--;
        setShowPage(false);
        setPage(pageTmp);
        setShowPage(true)
    }
    const changeSelect = (event) =>{
        const {value } = event.target
        setSelectForm(value);
        orderArray(sites, value);
        setPage(1);
    }
    return(
        <div> 
        {!ok && <p>loading...</p>}
           {ok && <div>
                <form>
                    <select onChange={changeSelect} value={selectForm}>
                        <option value="">Select</option>
                        <option value="City">City</option>
                        <option value="Price">Price</option>
                        <option value="CountryCode">Country code</option>
                    </select>
                </form>
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