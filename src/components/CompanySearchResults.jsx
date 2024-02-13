import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { addToSearchResults } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

const CompanySearchResults = () => {
  const jobs = useSelector((state) => state.searchResult.array);
  const loading = useSelector((state) => state.searchResult.isLoading);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToSearchResults(params.company));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <Link className="me-3" to={"/"}>
            Home
          </Link>
          <Link to={"/favourites"}>Favourites List</Link>
          {loading && (
            <div className="d-flex justify-content-center mt-5 ">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
