import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function AboutUsCards() {
  return (
    <Row xs={1} md={6} className="g-4">
      <Col>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            src="https://hyperpc.ru/images/company/about-us/partners/certificate-of-conformity-small.jpg"
          />
          <Card.Body>
            <Card.Title>Декларации о соответствии</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            src="https://hyperpc.ru/images/content/main/media/partner/partner-microsoft.jpg"
          />
          <Card.Body>
            <Card.Title>Авторизованный партнер Microsoft</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            src="https://hyperpc.ru/images/content/main/media/partner/partner-nvidia_webp.jpg"
          />
          <Card.Body>
            <Card.Title>Авторизованный партнер NVIDIA</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            src="https://hyperpc.ru/images/content/main/media/partner/intel-platinum-2022-thumb.jpg"
          />
          <Card.Body>
            <Card.Title>Авторизованный партнер Intel</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            src="https://hyperpc.ru/images/company/about-us/partners/cooler-master-official-status-small.jpg?1"
          />
          <Card.Body>
            <Card.Title>Авторизованный партнер Cooler Master</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            src="https://hyperpc.ru/images/company/about-us/partners/corsair-official-status-small.jpg?1"
          />
          <Card.Body>
            <Card.Title>Авторизованный партнер Corsair</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            src="https://hyperpc.ru/images/company/about-us/partners/deepcool-official-status-small.jpg?1"
          />
          <Card.Body>
            <Card.Title>Авторизованный партнер DeepCool</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            src="https://hyperpc.ru/images/company/about-us/partners/g-skill-official-status-small.jpg?1"
          />
          <Card.Body>
            <Card.Title>Авторизованный партнер G.Skill</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            src="https://hyperpc.ru/images/company/about-us/hyperpc-autorized-partner-2021-ekwb.jpg"
          />
          <Card.Body>
            <Card.Title>Авторизованный партнер EKWB</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            src="https://hyperpc.ru/images/company/about-us/partners/kingston-official-status-small.jpg"
          />
          <Card.Body>
            <Card.Title>Авторизованный партнер Kingston</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            src="https://hyperpc.ru/images/company/about-us/partners/msi-official-status-small.jpg"
          />
          <Card.Body>
            <Card.Title>Авторизованный партнер MSI</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            src="https://hyperpc.ru/images/company/about-us/partners/tp-link-official-status-small.jpg"
          />
          <Card.Body>
            <Card.Title>Авторизованный партнер Tp-Link</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default AboutUsCards;
