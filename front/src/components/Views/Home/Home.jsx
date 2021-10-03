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

    const callToApi = async () => { //request to api
        const data = await fetchAllData()
        let array = []
        data.forEach((element, index) => { //parse data into an Object Array
            array.push(element);
        })
        setSites(array)
        console.log(array)
        setOk(true) // all ready to render
    }

    const orderArray = (arrayToSort, field) => {  // order the array by field
        if (typeof arrayToSort[0][field] === 'string') // if field content is a string
            {
                arrayToSort.sort((x, y) => {
                let a = x[field].toUpperCase(),
                    b = y[field].toUpperCase();
                return a == b ? 0 : a > b ? 1 : -1;
            })
        }else{  // if field content is a number
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
                <div >
                    <img className="b-card__image" src={sites[i].Images[0]} alt="imagen"></img>
                </div>
                <div className="b-card__description">
                    <h3 className="b-card__text b-card__text--title">{sites[i].Description.split('.')[0]}</h3> 
                    <p className="b-card__text b-card-text-city">{sites[i].City}</p>
                    <p className="b-card__text">{sites[i].Price}</p>
                    <p className="b-card__text">{sites[i].Address}</p>
                    <a className="b-card__text b-card__text--link" href={sites[i].Link} rel="noreferrer" target="_blank"><p>Link</p></a>
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
        <div className="b-home"> 
        {!ok && <p>loading...</p>}
           {ok && <div className="b-home__container">
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
                    <div className="">{renderSites(5, sites, page)}</div>
                </div>}
                </div>}
        </div>
    )
}

export default Home;