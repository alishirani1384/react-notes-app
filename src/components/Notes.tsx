import * as React from "react";
import { Button, Card } from "react-bootstrap";
import { Note } from "../models/note.model";

interface INotesProps {
    note: Note;
    handleDelete:(id: string) => void
}

const Notes: React.FC<INotesProps> = ({ note,handleDelete}) => {
  return (
    <div className="mb-3">
      <Card style={{backgroundColor:note.color}}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
          <Button onClick={()=>handleDelete(note.id)} className="my-3" variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
