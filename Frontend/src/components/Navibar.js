
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap"
export const Navibar = () => {
   return (

      <div>

         <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
               <Navbar.Brand href="/">RedWings</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                     <NavDropdown title="Looking for Blood" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/bloodAvailablitity">Blood Availability</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/bloodBankAvailablitity">Nearby Blood Bank</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/bank/CampSchedule">Blood Donation Camps</NavDropdown.Item>

                     </NavDropdown>
                     <NavDropdown title="Want to Donate" id="basic-nav-dropdown">

                        <NavDropdown.Item href="/donor/donorAppointment">Appointment for Blood Bank</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/faq">RedWings FAQ</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/about">About Blood Donation</NavDropdown.Item>
                     </NavDropdown>
                     <Nav.Link href="/about">About us</Nav.Link>
                  </Nav>
                  <Nav className="mr-auto">
                     <NavDropdown title="Register/Login" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/donor/login">Donor</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/login">Blood Bank/Admin</NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         {/* {  <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
         </nav> } */}

      </div>

   )
}