import { Navbar, Container } from 'react-bootstrap';
import  {Link}  from 'react-router-dom';


export default function Navigation()  {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className=' d-flex justify-content-between'>
                    <Navbar.Brand className='ms-0'>🛠Constructora <span className='text-primary'>OM</span></Navbar.Brand>
                    <div>
                    <Link to="/" className='text-white ms-5 text-decoration-none'>🏠Home</Link>
                    <Link to="/Contacto" className='text-white ms-3 text-decoration-none'>☎️Contacto</Link>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}
