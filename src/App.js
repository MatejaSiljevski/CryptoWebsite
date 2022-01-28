import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd'
import {Navbar, Homepage, Cryptocurrencies, CryptoDetails} from './components'
import './App.css'
function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="main">
                    <Layout>
                        <div className="routes">
                            <Routes>
                                <Route path="/" element={<Homepage />}/>
                                <Route path="/cryptocurrencies" element={<Cryptocurrencies />}/>
                                <Route path="/crypto/:coinId" element={<CryptoDetails />}/>
                               
                            </Routes>
                        </div>
                    </Layout>
                    <div className="footer" >
                        <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                            CryptoVerse <br />
                            All Rights Reserved.
                        </Typography.Title>
                        <Space>
                            <Link to="/">Home</Link>
                        </Space>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
