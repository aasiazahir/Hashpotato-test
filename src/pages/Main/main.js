import React, { Component } from "react";
import {Grid} from "@mui/material";
import './main.css';

const MainPage = () => {

  return (
    <>
<div style={{ backgroundImage: "url(/images/img_main.png)", backgroundSize:'cover', width:'100%', backgroundRepeat:'no-repeat', height:'100vh' }}>
<div className="sidebar">
<div className="headings">
<div className="icon" style={{backgroundImage: "url(/images/img_group.png)", backgroundSize:'cover', width:'40px', marginLeft:'15px'}}/>
  <h3 className="heading1">VAULT PASS</h3>
</div>

<div className="sidebar_contents">
<div className='list_items'>
  <list >
  <ul>
    <li>Dashboard</li>
    <li>Analytics</li>
    <li>Stake</li>
    <li>Bold <br/>
    <ul>
      <li style={{marginTop:'15px', color:'gray'}}>Bond discounts</li>
      <li>XIV-BNB-LP -16.32%</li>
      <li>PASS-BNB-LP -16.32%</li>
      <li>XIV -16.32%</li>
    <li>BNB -16.32%</li>
    <li>RUSD -16.32%</li>
     
    </ul>
    </li>
    <li>Buy PASS</li>
    <li>Price Chart</li>
    <li>Documentation</li>
  </ul>
  </list>
  </div>
</div>

</div>


<div className="buttons">
<button className="button2">Buy PASS</button>
<button className="button1">Connect Wallet</button>
</div>

<div className="grid">

<div className="heading2">
  <h3>EPOCH STALKING</h3>
</div>
<br/>
<Grid container rowSpacing={5} columnSpacing={{ xs:1, sm: 2, md:1 }}>
<div className="grid_item">
<Grid item xs={6}>
    <item>Buy PASS<br/>
        $1520.3
    </item>
  </Grid></div>
<div className="grid_item">
  <Grid item xs={6} >
    <item>APR  /  EPR<br/>
        3820 %    3%</item>
  </Grid>
  </div>
  <div className="grid_item">
<Grid item xs={6}>
    <item>Market Cup<br/>
        $1520.3
    </item>
  </Grid></div>
  <div className="grid_item">
<Grid item xs={6}>
    <item>Total Value Locked<br/>
        $1520.3
    </item>
  </Grid></div>
  <div className="grid_item">
<Grid item xs={6}>
    <item>Treasury Balance<br/>
        $1520.3
    </item>
  </Grid></div>
  <div className="grid_item">
<Grid item xs={6}>
    <item>Pass Supply<br/>
        $1520.3
    </item>
  </Grid></div>
  <div className="grid_item">
<Grid item xs={6}>
    <item>Backing per Pass<br/>
        $1520.3
    </item>
  </Grid></div>
  <div className="grid_item">
<Grid item xs={6}>
    <item>Current Index<br/>
        3.48x
    </item>
  </Grid></div>
</Grid> 
</div>

</div>
    </>
  );
};

export default MainPage;
