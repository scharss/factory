import { ethers } from "ethers"
import nftDriveT from "../img/nftDriveT.png"
//bootstrap
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles.css'
import React, { useState } from "react";
//import {TesterComponent, TesterFactor, StoreFile} from "../components/TesterComponent"

//<Container>
//      <Row>
//		< Col sm={12} md={12} lg={12} xl={12}>

//				<Button variant="primary">Primary</Button>{' '}

//      </Col>
//      </Row>
//</Container>
//bootstrap

export function HomePageImg(){
    return(<div className="home">
        
        <img className="nftDriveImgHome" src={nftDriveT} alt="nftDriveT" />
    </div>)
}

let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer
var cuenta = " "
export function Connectmetamask() {
	
	
	return (<div className="MetamaskBtn">
	
	<Button variant="primary"
	onClick={async ()=>{   // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();
	cuenta = await signer.getAddress();
	document.getElementById("demo").innerHTML= "User: " + cuenta;
    console.log("Account address:", await signer.getAddress());}}
	
	
	>Connect Metamask</Button>{' '}
	<br />
	
	
	<p id="demo">User:</p>
	
	
	
	
	</div>
	
	)
} 
{/*    0x99f5Cb4853e485582F05Ea06c2672120D96EF1cc     */}

var address = "0x99f5Cb4853e485582F05Ea06c2672120D96EF1cc"
const abi = [{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"create","outputs":[],"stateMutability":"nonpayable","type":"function"}];


export function BuyBtn(){
	return(<>
	<Button variant="primary"
	onClick={async ()=>{
		const buyBtn = new ethers.Contract(address, abi, signer);
	const x=	await buyBtn.create(cuenta);
	console.log(x)
		console.log("Transaction: "+"https://rinkeby.etherscan.io/tx/"+ x.hash)
		document.getElementById("txHash").innerHTML = "Transaction: "+ x.hash
	}}
	>Buy now</Button>
	<p id="txHash"></p>
	</>)
}