import { Component } from "react";
import { Col, Button, Card } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

class SingleBook extends Component {
  state = {
    borderColor: "lightblue",
    addedToCart: null,
    buyed: null,
  };
  selected = () => {
    if (this.state.borderColor === "lightblue") {
      this.setState({ borderColor: "red" });
    } else {
      this.setState({ borderColor: "lightblue" });
    }
  };
  buy = () => {
    this.setState({ buyed: true });
  };
  addToCart = () => {
    this.setState({ addedToCart: true });
  };

  renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <Button onClick={this.buy}>buy now</Button>
    </Tooltip>
  );

  render() {
    return (
      <>
        <Col className="my-2" id={this.props.book.asin}>
          <Card className="myCard" style={{ borderColor: this.state.borderColor }}>
            <Card.Img onClick={this.selected} className="myCardImg" src={this.props.book.img} />
            <Card.Body className="myCardBody">
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>$ - {this.props.book.price}</Card.Text>

              <OverlayTrigger
                placement="right"
                delay={{ show: 150, hide: 800 }}
                overlay={this.renderTooltip}
              >
                <Button onClick={this.addToCart} className="bookBtn">
                  Add To Cart <i className="bi bi-cart4"></i>
                </Button>
              </OverlayTrigger>

              {this.state.addedToCart && <p>Aggiunto al carello</p>}
              {this.state.buyed && <p>Comprato!</p>}
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
export default SingleBook;
