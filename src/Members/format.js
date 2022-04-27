import React from 'react'
import './App.css';
import Hex from './Hex';

const format = () => {
    return (
        <div>
            <div className='top__leads'>
                <div style={{
                    height: "100px",
                    width: "100px"
                }}>
                    <Hex />
                    <div className='top__leads__content'>
                        <font size="5">Top Lead Name</font>
                        <br></br>
                        <font size="3">Designation</font>
                    </div>
                </div>
                <div style={{
                    height: "100px",
                    width: "100px"
                }}>
                    <Hex />
                    <div className='top__leads__content'>
                        <font size="5">Top Lead Name</font>
                        <br></br>
                        <font size="3">Designation</font>
                    </div>
                </div>
                <div style={{
                    height: "100px",
                    width: "100px"
                }}>
                    <Hex />
                    <div className='top__leads__content'>
                        <font size="5">Top Lead Name</font>
                        <br></br>
                        <font size="3">Designation</font>
                    </div>
                </div>
                <div style={{
                    height: "100px",
                    width: "100px"
                }}>
                    <Hex />
                    <div className='top__leads__content'>
                        <font size="5">Top Lead Name</font>
                        <br></br>
                        <font size="3">Designation</font>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default format