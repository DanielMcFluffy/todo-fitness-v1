import { Button, Card } from "react-bootstrap"



export default function Home() {
  return (
    <Card className="text-center my-5">
      <Card.Header>Your #1 Workout App</Card.Header>
      <Card.Body>
        <Card.Title>EXCELR8</Card.Title>
        <Card.Text style={{ whiteSpace: 'normal' }} >
          Your #1 personal trainer app to not waste time in the gym.
          <br />
          <strong>Less time in gym, more time for you.</strong>
        </Card.Text>
        <Button href="/register" variant="primary">Sign up!</Button>
      </Card.Body>
    </Card>
  )
}