import React ,{ Component }  from 'react';
import {Navbar,Nav} from 'react-bootstrap';


class header extends Component{
    render() {
        return(

        // <header className="site-navbar py-4" role="banner">
        //   <div className="container">
        //     <div className="d-flex align-items-center">
        //       <div className="site-logo">
        //         <a href="index.html">
        //           <img src="images/logo.png" alt="Logo" />
        //         </a>
        //       </div>
        //       <div className="ml-auto">
        //       <Navbar >
        //         {/* <Navbar.Brand className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block" href={process.env.PUBLIC_URL +"/"}>ARENA</Navbar.Brand> */}
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav" className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
        //             <Nav className="mr-auto">
                    
        //             </Nav>
        //             <Nav>
        //             <Nav.Link href={process.env.PUBLIC_URL +"/home"}>Home</Nav.Link>
        //             <Nav.Link href={process.env.PUBLIC_URL +"/about"}>About</Nav.Link>
        //             <Nav.Link href={process.env.PUBLIC_URL +"/blog"}>Blog</Nav.Link>
        //             <Nav.Link href={process.env.PUBLIC_URL +"/engage"}>Engage</Nav.Link>
        //             <Nav.Link href={process.env.PUBLIC_URL +"/contact"}>Contact</Nav.Link>
        //             <Nav.Link href={process.env.PUBLIC_URL +"/games"}>Games</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //       </Navbar>
        //         <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"><span className="icon-menu h3 text-white" /></a>
        //       </div>
        //     </div>
        //   </div>
        // </header>

        <header className="site-navbar py-4" role="banner">
         
          {/* <div className="d-flex align-items-center">
               <div className="site-logo">
                 <a href="index.html">
                   <img src="images/logo.png" alt="Logo" />
                 </a>
               </div>
          </div> */} 
        <div className="ml-auto" >
        <Navbar collapseOnSelect expand="lg" >
            <Navbar.Brand href={process.env.PUBLIC_URL +"/"}  style={{color:'black'}}>ARENA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                
                </Nav>
                <Nav className="text-black" >
                <Nav.Link style={{color:'black'}} className= "mb-3" href={process.env.PUBLIC_URL +"/about"}>About</Nav.Link>
                <Nav.Link style={{color:'black'}} href={process.env.PUBLIC_URL +"/games"}>Games</Nav.Link>
                <Nav.Link style={{color:'black'}} href={process.env.PUBLIC_URL +"/contact"}>Contact</Nav.Link>
                <Nav.Link style={{color:'black'}} href={process.env.PUBLIC_URL +"/interact"}>Interact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        
        </header>
        );


    }
}

export default header;