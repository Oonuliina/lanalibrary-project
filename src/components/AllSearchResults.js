import React from "react";
import "./styles/AllSearchResults.css"
import "./OneSeachResult"
import { OneSearchResult } from "./OneSeachResult";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//komponentti kaikkien hakutulosten näyttämiseen
export const AllSearchResults = ({ results, deleteTrack }) => {
    return (
        // käydään läpi hakutulokset
        <div className="results">
            <Container className="search-results">
                <Row className="g-4">{results.map((result, id) => {      
                    // kutsutaan komponenttia "yksi hakutulos"
                    return  <Col>
                                <OneSearchResult 
                                    result={result} 
                                    key={id} 
                                    id={result._id} 
                                    deleteTrack={deleteTrack}
                                    /> 
                            </Col>
            })}</Row>
            </Container>
        </div>
    )
}