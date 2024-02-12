import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavouritesComponent = () => {
  const favouritesList = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();
  return (
    <>
      <div className="d-flex justify-content-center flex-column mb-3">
        <h3 className="text-center my-4">Favourites List </h3>
        <Link className="text-center" to={"/"}>
          Home
        </Link>
      </div>
      <Container>
        <Row>
          {favouritesList.map((element) => {
            return (
              <Col sm={12} key={element._id} className="my-3">
                <div className="d-flex justify-content-between">
                  <Link to={`/${element.company_name}`}>
                    {element.company_name}
                  </Link>
                  <Button
                    variant="danger"
                    className="ms-auto"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITES",
                        payload: element._id,
                      })
                    }
                  >
                    Remove from Favourite List
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default FavouritesComponent;
