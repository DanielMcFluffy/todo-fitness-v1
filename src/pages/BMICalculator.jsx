import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (!height || !weight) {
      alert('Please enter both height and weight.');
      return;
    }

    const heightMeters = height / 100;
    const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(2);
    setBMI(bmiValue);


  };
  return (

    <>
      <h1 className="my-3" style={{ color: 'white', textAlign: 'center' }} >Check in your progress!</h1>
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "50vh", width: '500px' }}>
        <Card style={{ width: '500px' }} >
          <h1 className="my-3" >BMI Calculator</h1>
          <Form
            onSubmit={(e) => e.preventDefault()}

          >
            <Form.Group className="mb-3" controlId="height_input">
              <Form.Label>Height (cm):</Form.Label>
              <Form.Control
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="weight_input">
              <Form.Label>Weight (kg):</Form.Label>
              <Form.Control
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
              <Button type="submit" className="my-3" onClick={calculateBMI}>Calculate BMI</Button>
            </Form.Group>


            {bmi && <p style={{ textAlign: 'center' }} >Your BMI is: {bmi} </p>}

            <p>
              {bmi && (
                <span style={{ textAlign: 'center' }} >
                  {bmi < 18.5 ? (
                    <span>
                      You are <span style={{ color: '#8B8000' }}>underweight</span>. Start Bulking.
                    </span>
                  ) : bmi < 24.9 ? (
                    <span>
                      You are <span style={{ color: 'green' }}>normal</span>. No excuse, start bulking and build muscle.
                    </span>
                  ) : bmi < 29.9 ? (
                    <span>
                      You are <span style={{ color: '#8B8000' }}>overweight</span>. Start cutting.
                    </span>
                  ) : bmi > 30 ? (
                    <span>
                      You are <span style={{ color: 'red' }}>obese</span>. Look at yourself in the mirror. Now go hit the gym.
                    </span>
                  ) : (
                    ''
                  )}
                </span>
              )}
            </p>

          </Form>
        </Card>
      </Container>
    </>
  )

}