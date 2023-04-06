import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import  Carousel from './Carousel' ;
const Main = () => { 
    return (
        <div className='main'>
            <main className="px-3 background d-flex mt-5 p-5 d-flex flex-row flex-wrap justify-content-evenly bg-light text-dark  align-items-center align">
            <div className="one-side w-50">
            <h1>Best Trip Prices</h1>
          <p className="lead" id="background">Bringing you more routes at the best prices.</p>
         </div>
          <div className="parent">
                    <Carousel />
                </div>
        </main>
        </div>
    )
}
export default Main