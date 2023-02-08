import { Component } from "react";
import { Container, Row, Col, Button, FloatingLabel, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasyBooks from "../books/fantasy.json";
import historyBooks from "../books/history.json";
import horrorBooks from "../books/horror.json";
import romanceBooks from "../books/romance.json";
import scifiBooks from "../books/scifi.json";

class BookList extends Component {
  state = {
    genres: ["Fantasy", "History", "Horror", "Romance", "Scifi"],
    book: [],
    foundBook: [],
  };

  loadBooks = (e) => {
    console.log(e.target);
    if (e.target.id === "Fantasy") {
      this.setState({ book: fantasyBooks });
    }
    if (e.target.id === "History") {
      this.setState({ book: historyBooks });
    }
    if (e.target.id === "Horror") {
      this.setState({ book: horrorBooks });
    }
    if (e.target.id === "Romance") {
      this.setState({ book: romanceBooks });
    }
    if (e.target.id === "Scifi") {
      this.setState({ book: scifiBooks });
    }
    if (e.target.id === "CloseAll") {
      this.setState({ book: [] });
    }
  };

  findBook = (e) => {
    console.log(e.target.value);
    const librtoTrovarto = [
      ...fantasyBooks,
      ...historyBooks,
      ...horrorBooks,
      ...romanceBooks,
      ...scifiBooks,
    ].filter((book) => book.title.toLowerCase().includes(e.target.value.toLowerCase()));

    console.log(librtoTrovarto);
    this.setState({ foundBook: librtoTrovarto });
  };

  close = () => {
    this.setState({ foundBook: [] });
  };

  render() {
    return (
      <>
        <Container>
          <Row className="mt-4">
            <h2>Cerca un libro in base al titolo nel nostro database:</h2>
          </Row>
          <Row className="mt-4 align-items-center">
            <Col xs="10">
              <FloatingLabel
                controlId="floatingInput"
                label="Inserisci il TITOLO del libro che stai cercando:"
                className="mb-3"
              >
                <Form.Control
                  onKeyUp={this.findBook}
                  type="search"
                  placeholder="es. Sword of Destiny"
                />
              </FloatingLabel>
            </Col>
            <Col xs="2">
              <Button className="closeBtn" onClick={this.close}>
                Close
              </Button>
            </Col>
          </Row>
          <Row className="mt-4 row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 align-items-stretch">
            {this.state.foundBook.length > 0 &&
              this.state.foundBook.map((el, index) => (
                <SingleBook book={el} key={`book-${index}-${el.asin}`}></SingleBook>
              ))}
          </Row>
          <Row>
            <h2>Oppure scegli una delle categorie sottostanti:</h2>
          </Row>

          <Row className="mt-4">
            {this.state.genres.map((el, index) => (
              <Col className="text-center" key={`categoria-${index}`}>
                <Button className="w-100 catBtn" onClick={this.loadBooks} id={el}>
                  {el}
                </Button>
              </Col>
            ))}
            <Col>
              <Button className="closeBtn" onClick={this.loadBooks} id="CloseAll">
                Close
              </Button>
            </Col>
          </Row>
          <Row className="mt-4 row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 align-items-stretch">
            {this.state.book.map((bookF) => (
              <SingleBook book={bookF} key={bookF.asin}></SingleBook>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default BookList;
