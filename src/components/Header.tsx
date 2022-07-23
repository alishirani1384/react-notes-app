import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            REACT-NOTES
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
