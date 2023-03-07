import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormDisabledExample() {
  return (
    <Container className='w-5 my-5'>
        <h1 className='text-center mb-5'>Te Contactaremos</h1>
    <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label >Nombre Completo</Form.Label>
          <Form.Control type='text'  placeholder=" Ingrese Nombre" />

        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label >Direccion de Email</Form.Label>
            <Form.Control type='email'  placeholder=" nombre@ejemplo.com" />
        </Form.Group>


        <Form.Select className='mb-3' aria-label="Default select example">
      <option>Identificar tipo de trabajo</option>
      <option value="1">Ampliación</option>
      <option value="2">Remodelación</option>
      <option value="3">Construcción</option>
      <option value="4">Reparación</option>
      <option value="5">Otro</option>
    </Form.Select>

        <Form.Group className="mb-3">
          <Form.Label >mensaje</Form.Label>
          <Form.Control type='text'  placeholder="Describa el trabajo a realizar" />

        </Form.Group>

        <Button type="submit">Enviar</Button>
      </fieldset>
    </Form>
    </Container>
  );
}

export default FormDisabledExample;