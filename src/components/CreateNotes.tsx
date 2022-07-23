import { FormEvent, useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Note } from "../models/note.model";

interface ICreateNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FC<ICreateNotesProps> = ({ notes, setNotes }) => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("Fill the form to Submit");
    }
    setError("");
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);

    (titleRef.current as HTMLInputElement).value = "";
      (textRef.current as HTMLTextAreaElement).value = "";
      (colorRef.current as HTMLInputElement).value="#dfdfdf"
  };

  return (
    <>
          <h2>Create Notes</h2>
          {error && <Alert variant="danger">{error}</Alert>}
      <Form className="my-3" onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Ttile</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" ref={titleRef} />
          <Form.Text className="text-muted">
            Put Here The Title You Want For Note.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Text"
            ref={textRef}
          />
          <Form.Text className="text-muted">
            Put Here The Text You Want For Note.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            ref={colorRef}
          />
          <Form.Text className="text-muted">
            Select a Color For The Note
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
