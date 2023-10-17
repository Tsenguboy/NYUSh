import React, {useState, useEffect} from 'react';
import LogoNew from './svg/LogoNew.svg';
import PurpleOverlay from './svg/PurpleOverlayBG.svg';
import CampusBG from './svg/CampusBG.svg'
import BottomRect from './svg/BottomRect.svg'
import Copyright from './svg/Copyright.svg'
import EnvelopeRaw from './svg/envelope.svg'
import {ReactComponent as Envelope } from './svg/envelope.svg'
import SmallButton from './components/SmallButton'
import BigButton from './components/BigButton'
import TopServiceRaw from './svg/TopService.svg'
import TopServiceFilled from './svg/BigButtonSVG/TopServiceFilled.svg'
import SoftwareFilled from './svg/BigButtonSVG/SoftwareFilled.svg'
import CyberFilled from './svg/BigButtonSVG/CyberFilled.svg'
import ComputingFilled from './svg/BigButtonSVG/ComputingFilled.svg'
import SoftwareIconRaw from './svg/SoftwareIcon.svg'
import ComputingIconRaw from './svg/ComputingIcon.svg'
import CyberIconRaw from './svg/CyberIcon.svg'
import Aeeow from './svg/Aeeow.svg'
import './App.css';
import Clock from './svg/contact/Clock.svg'
import Email from './svg/contact/Clock.svg'
import Phone from './svg/contact/Phone.svg'
import Icon from './components/icon';

function App() {

	useEffect(() => {
		const vw = window.innerWidth;
	document.documentElement.style.setProperty('--vw', `${vw}px`);
	}, []);

	const [selectHoverColor, setSelectHoverColor] = useState('white')
	const [requestChevron, setRequestChevron] = useState('white')

	const [clickedIndex, setClickedIndex] = useState(1)

	const [serviceClicked , setServiceClicked] = useState(true)
	const [requestClicked, setRequestClicked] = useState(false)
	const [footerClickIndex, setFooterClickIndex] = useState(0)

	const serviceClickHanlder = () => {
		console.log("Direct to Explore Service page")
		setServiceClicked(!serviceClicked)
		setRequestClicked(false)
		setClickedIndex(1)
		if (clickedIndex === 1) {
			setClickedIndex (0)
		}
	}
	const requestClickHandler = () => {
		console.log("Direct to Online Request page")
		setRequestClicked(!requestClicked)
		setServiceClicked(false)
		setClickedIndex(2)
		if (clickedIndex === 2) {
			setClickedIndex (0)
		}
	}
	const answerClickHandler = () => {
		console.log("Direct to Find Answer page")
		setClickedIndex(3)
		setRequestClicked(false)
		setServiceClicked(false)
		if (clickedIndex === 3) {
			setClickedIndex (0)
		}
	}
	const tickedClickHandler = () => {
		console.log("Direct to My Tickets page")
		setClickedIndex(4)
		setRequestClicked(false)
		setServiceClicked(false)
		if (clickedIndex === 4) {
			setClickedIndex (0)
		}
	}
	const searchClickHandler = () => {
		console.log("Search button pressed")
		setClickedIndex(5)
		if (clickedIndex === 5) {
			setClickedIndex(0)
		}
	}

	const [topServiceClicked, setTopServiceClicked] = useState(false)
	const [softwareClicked, setSoftwareClicked] = useState(false)
	const [computingClicked, setComputingClicked] = useState(false)
	const [hubClicked, setHubClicked] = useState(false)
	const [clickedBigButtonIndex, setClickedBigButtonIndex] = useState('')

	const serviceButtonHandler = () => {
		setTopServiceClicked(!topServiceClicked)
		setSoftwareClicked(false)
		setComputingClicked(false)
		setHubClicked(false)
	}

	const softwareButtonHandler = () => {
		setSoftwareClicked(!softwareClicked)
		setTopServiceClicked(false)
		setComputingClicked(false)
		setHubClicked(false)
	}

	const computingButtonHandler = () => {
		setComputingClicked(!computingClicked)
		setSoftwareClicked(false)
		setTopServiceClicked(false)
		setHubClicked(false)
	}

	const hubButtonHandler = () => {
		setHubClicked(!hubClicked)
		setSoftwareClicked(false)
		setComputingClicked(false)
		setTopServiceClicked(false)
	}

	const footerEnvelopeHandler = () => {
		console.log("Envelope Button clicked")
		setFooterClickIndex(1)
		if (footerClickIndex === 1) {
			setFooterClickIndex(0)
		}
	}
	const footerPhoneHandler = () => {
		console.log("Phone Button clicked")
		setFooterClickIndex(2)
		if (footerClickIndex === 2) {
			setFooterClickIndex(0)
		}
	}
	const footerHomeHandler = () => {
		console.log("Home Button Clicked")
		setFooterClickIndex(3)
		if (footerClickIndex === 3) {
			setFooterClickIndex(0)
		}
	}
	const footerCommentHandler = () => {
		console.log("Comment Button Clicked")
		setFooterClickIndex(4)
		if (footerClickIndex === 4) {
			setFooterClickIndex(0)
		}
	}

	const handleHover = () => {
		setSelectHoverColor('#9966b3') // Change the fill color on hover
	};
	const handleRequestChevron = () => {
		setRequestChevron('#9966b3')
	}
	const handleMouseLeave = () => {
		setSelectHoverColor('white'); // Reset fill color when the mouse leaves
	};
	const handleRequestChevronLeave = () => {
		setRequestChevron('white')
	}
	return (
		<div className="App">
			<img src={CampusBG} className = "background" alt ="Background"/>
			<img src={PurpleOverlay} className = "background" alt ="BackgroundOverlay"/>
			<div className = "container">
				<div className = "overlay" style={{ display: 'flex', justifyContent: 'space-between', verticalAlign: 'middle'}}>
					<div>
						<img src = {LogoNew} alt="SchoolLogo"/>
					</div> {/*Select Row, Top right of the page */}
					<div style={{display: 'flex', justifyContent: 'end'}}>
						<div style = {{display: 'flex', flexDirection: 'column'}}>
							<button className='selectFromRow' onClick={() => serviceClickHanlder()} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
								<span style={{marginRight: '0.5rem'}}>
									About
								</span>
							</button>
							<div className = 'selectFromRow'>
								<svg width="auto" height="2" viewBox="0 0 124 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="124" height="2" fill={`${clickedIndex === 1 ? '#FDD141': 'transparent'}`}/>
								</svg>
							</div>
						</div>

						<div style = {{display: 'flex', flexDirection: 'column'}}>
							<button className='selectFromRow' onClick = {() => requestClickHandler()} onMouseEnter={handleRequestChevron} onMouseLeave={handleRequestChevronLeave}>
								<span style={{marginRight: '0.5rem'}}>
									Admissions
								</span>
							</button>
							<div className = 'selectFromRow'>
								<svg width="auto" height="2" viewBox="0 0 124 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="124" height="2" fill={`${clickedIndex === 2 ? '#FDD141': 'transparent'}`}/>
								</svg>
							</div>
						</div>

						<div style = {{display: 'flex', flexDirection: 'column'}}>
							<button className='selectFromRow' onClick = {() => answerClickHandler()}>
								<span>Academics</span>
							</button>
							<div className = 'selectFromRow'>
								<svg width="auto" height="2" viewBox="0 0 124 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="124" height="2" fill={`${clickedIndex === 3 ? '#FDD141': 'transparent'}`}/>
								</svg>
							</div>
						</div>

						<div style = {{display: 'flex', flexDirection: 'column'}}>
							<button className='selectFromRow' onClick = {() => tickedClickHandler()}>
								<span>Research</span>
							</button>
							<div className = 'selectFromRow'>
								<svg width="100%" height="2" viewBox="0 0 124 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="100%" height="2" fill={`${clickedIndex === 4 ? '#FDD141': 'transparent'}`}/>
								</svg>
							</div>
						</div>

						<div style = {{display: 'flex', flexDirection: 'column'}}>
							<button className='selectFromRow' onClick ={() => searchClickHandler()}>
								<span>Student Life</span>
							</button>
							<div className = 'selectFromRow'>
								<svg width="100%" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="100%" height="2" fill={`${clickedIndex === 5 ? '#FDD141': 'transparent'}`}/>
								</svg>
							</div>
						</div>

					</div>
				</div>
			</div>
			
			<div className = "bodyContainer" style={{maxWidth: '50vw'}}>
				<div style={{marginTop: '7vh'}}>
					<span className = 'subheaderWhite'>
						@NYUSH
					</span>
				</div>
				<div style={{marginTop: '3vh'}}>
					<span className = 'headerWhite'>
						Technology services
					</span>
				</div>
				<div style={{marginBottom: '5vh'}}>
					<span className = 'description'>
						NYU Shanghai Information Technology Services strives to provide high quality and reliable solutions that enable seamless connectivity, in alignment with the university’s academic mission.
					</span>
				</div>
			</div>
			<div className = "bodyContainer" style={{display: 'flex', justifyContent: 'space-between', marginRight: '5vw'}}>
				<BigButton icon={`${topServiceClicked ? TopServiceFilled : TopServiceRaw}`} label={'Top-Service Spotlight'} clicked={topServiceClicked} onClick = {() => serviceButtonHandler()}/>
				<BigButton icon={`${softwareClicked ? SoftwareFilled : SoftwareIconRaw}`} label={'Software & Application'} clicked={softwareClicked} onClick = {() => softwareButtonHandler()}/>
				<BigButton icon={`${computingClicked ? ComputingFilled : ComputingIconRaw}`} label={'Computing & Servers'} clicked={computingClicked} onClick = {() => computingButtonHandler()}/>
				<BigButton icon={`${hubClicked ? CyberFilled : CyberIconRaw}`} label={'Cybersecurity Hub'} clicked={hubClicked} onClick = {() => hubButtonHandler()}/>
			</div>
			{ topServiceClicked === true &&
				<div className="bodyContainer" style={{marginRight: '5vw'}}>
					<div style={{display: 'flex', maxWidth: '100vw', justifyContent: 'space-between', marginTop: '4vh'}}>
						<SmallButton icon={EnvelopeRaw} color={'green'} label='VPN Connection'/>
						<SmallButton icon={EnvelopeRaw} label='Printing & 3D Printing'/>
						<SmallButton icon={EnvelopeRaw} label='WiFi Connection' expandable={true}/>
						<SmallButton icon={EnvelopeRaw} label='Digital Campus Card'/>
					</div>
					<div style={{display: 'flex', maxWidth: '100vw', justifyContent: 'space-between', marginTop: '2vh'}}>
						<SmallButton icon={EnvelopeRaw} label='Space Reservation' expandable={true}/>
						<SmallButton icon={EnvelopeRaw} label='IPT Telephone' expandable={true}/>
						<SmallButton icon={EnvelopeRaw} label='Google Groups & Team Drive'/>
						<SmallButton icon={EnvelopeRaw} label='NYU Box'/>
					</div>
					<div style={{display: 'flex', maxWidth: '100vw', justifyContent: 'space-between', marginTop: '2vh'}}>
						<SmallButton icon={EnvelopeRaw} label='NYU Storage' expandable={true}/>
					</div>
				</div>
			}

			{ softwareClicked === true &&
				<div className="bodyContainer" style={{marginRight: '5vw'}}>
					<div style={{display: 'flex', maxWidth: '100vw', justifyContent: 'space-between', marginTop: '4vh'}}>
						<SmallButton icon={EnvelopeRaw} color={'green'} label='WeChat'/>
						<SmallButton icon={EnvelopeRaw} label='NYU Box'/>
						<SmallButton icon={EnvelopeRaw} label='SMS' expandable={true}/>
						<SmallButton icon={EnvelopeRaw} label='Docisign'/>
					</div>
					<div style={{display: 'flex', maxWidth: '100vw', justifyContent: 'space-between', marginTop: '2vh'}}>
						<SmallButton icon={EnvelopeRaw} label='Space Management' expandable={true}/>
						<SmallButton icon={EnvelopeRaw} label='Bright Space' expandable={true}/>
						<SmallButton icon={EnvelopeRaw} label='NYU Zoom'/>
						<SmallButton icon={EnvelopeRaw} label='Email, Calendar & Events'/>
					</div>
				</div>
			}

			{ computingClicked === true &&
				<div className="bodyContainer" style={{marginRight: '5vw'}}>
					<div style={{display: 'flex', maxWidth: '100vw', justifyContent: 'space-between', marginTop: '4vh'}}>
						<SmallButton icon={EnvelopeRaw} color={'green'} label='HPC'/>
						<SmallButton icon={EnvelopeRaw} label='AWS/Cloud/Ali Baba'/>
						<SmallButton icon={EnvelopeRaw} label='Hosting Servers' expandable={true}/>
						<SmallButton icon={EnvelopeRaw} label='Virtual Computer Lab'/>
					</div>
				</div>
			}

			{ hubClicked === true &&
				<div className="bodyContainer" style={{marginRight: '5vw'}}>
					<div style={{display: 'flex', maxWidth: '100vw', justifyContent: 'space-between', marginTop: '4vh'}}>
						<SmallButton icon={EnvelopeRaw} color={'green'} label='Policy & Compliance'/>
						<SmallButton icon={EnvelopeRaw} label='Data Management'/>
						<SmallButton icon={EnvelopeRaw} label='Report an Incident' expandable={true}/>
						<SmallButton icon={EnvelopeRaw} label='Antivirus for Personal Comp...'/>
					</div>
				</div>
			}

			<div style={{width: '100%', marginTop: '10vh'}}>
				<div style={{display: 'flex', marginLeft: '10vw', marginRight: '10vw', justifyContent: 'space-between'}}>
					<div style={{width: '50%'}}>
						<h3 style={{fontSize: '3vh',fontFamily: 'Gotham'}}>
							Any questions? Contact us
						</h3>
						<span style={{fontSize: '2vh'}}>
							Browse through the sections on the website, but If you cannot find the solution to your issue – contact IT Department through email, phone, WeChat or visit our on-campus font desk.
						</span>
					</div>
					<div>
						<img src={Aeeow} alt="arrow"/>
					</div>
					<div className = 'contactContainer'>
						<div>
							<img src={Clock} alt='Schedule'/>
							<span>
								Monday - Friday: 9am - 5pm 
							</span>
						</div>
						<div>
							<img src={Phone} alt='Phone'/>
							<span>
								+86 (21) 2059 5555
							</span>
						</div>
						<div>
							<img src={Email} alt='Email'/>
							<span>
								shanghai.it.help@nyu.edu
							</span>
						</div>
						<div>
							<span>
								Scan the QR code in WeChat
							</span>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div className='footerContent' style={{width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
					<div>
						<div style={{marginTop: '3.11vh', color: 'white'}}>
							<img src={Copyright} alt="copyright" style={{}}/>
							<span style={{marginLeft: '2rem', fontSize: '0.84vw'}}>
								Copyright NYU Shanghai Technology Services
							</span>
						</div>
						<div style={{display: 'flex', justifyContent: 'center', marginTop: '1.11vh'}}>
							<button className={`${footerClickIndex === 1 ? 'footerButtonClicked' : 'footerButton'}`} onClick={() => footerEnvelopeHandler()}>
								<Envelope/>
							</button>
						</div>
					</div>
				</div>
				<div className='footer'>
					<img style={{width: '100vw'}} src={BottomRect} alt="Footer"/>
				</div>
			</div>
			{/* <div>
				<img src={BottomRectangle} alt="Footer"/>
			</div> */}
		</div>
	);
}

export default App;
