import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import {Layout,Typography,Space} from 'antd'
import {Navbar,Exchanges,Homepage,Cryptocurrencies,CryptoDetails,News} from './components'
import './App.css'
function App() {
  return (
  <div className="app">
    <div className="navbar">
        <Navbar /> 
    </div>
    <div className="main">
          <Layout>
            <div className="routes">
              <Routes> 
                  <Route exact path="/" element={<Homepage />} />
                  <Route exact path="/exchanges" element={<Exchanges />} />
                  <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                  <Route exact path="/crypto/:coinId" element={ <CryptoDetails />} />
                  <Route exact path="/news" element={<News />} />
              </Routes>
            </div>
            </Layout>
    </div>
    <div className="footer" >
                <Typography.Title level={5} style={{color:'white' ,textAlign:'center'}}>
Cryptoverse <br/>
All rights reserved
                </Typography.Title>

                <Space>
                  <link to ="/">Home</link>
                  <link to="/exchange">Exchange</link>
                  <link to="/news">News</link>
                </Space>
    </div>
  </div>
  )
}

export default App