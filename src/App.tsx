import { useState } from "react";
import { Note } from "./models/note.model";
import Header from "./components/Header";
import { Col, Container, Row } from "react-bootstrap";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "lurem",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <div className="App">
      <Header />

      <Container className="mt-5">
        <Row>
          <Col>
            {notes.length > 0 && (
              <NotesList notes={notes} setNotes={setNotes} />
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
