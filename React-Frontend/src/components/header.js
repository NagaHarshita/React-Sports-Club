import React ,{ Component }  from 'react';
import {Navbar,Nav} from 'react-bootstrap';


class header extends Component{
    render() {
        return(

        <header className="site-navbar py-4" role="banner">
        <div className="ml-auto" style={{backgroundColor:'black'}}>
        <Navbar collapseOnSelect expand="lg" >

            <Navbar.Brand href={process.env.PUBLIC_URL +"/"}  style={{color:'white',fontSize:'40px',fontWeight:'bold'}}>ARENA</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                
                </Nav>

                <Nav className="text-white" >
                <Nav.Link style={{color:'white',fontSize:'25px'}} className= "mb-3" href={process.env.PUBLIC_URL +"/about"}>About</Nav.Link>
                <Nav.Link style={{color:'white',fontSize:'25px'}} href={process.env.PUBLIC_URL +"/games"}>Games</Nav.Link>
                <Nav.Link style={{color:'white',fontSize:'25px'}} href={process.env.PUBLIC_URL +"/contact"}>Contact</Nav.Link>
                <Nav.Link style={{color:'white',fontSize:'25px'}} href={process.env.PUBLIC_URL +"/interact"}>Interact</Nav.Link>
                <Nav.Link style={{color:'white',fontSize:'25px'}} href={process.env.PUBLIC_URL +"/profile"}>Profile</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        
        </header>
        );


    }
}

export default header;