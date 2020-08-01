import React from "react";
import {
    Button,
    Jumbotron,
    Form,
    FormControl,
    InputGroup,
} from "react-bootstrap";

function search(props) {
    return (
        <Jumbotron className="search-section">
            <Form>
                <InputGroup>
                    <FormControl
                        placeholder="Search for gifs here"
                        aria-label="Keyword"
                        aria-describedby="basic-addon2"
                        name="search"
                        onChange={(event) => props.bindInput(event)}
                    />
                    <InputGroup.Append>
                        <Button
                            className="search-btn"
                            variant="outline-secondary"
                            onClick={props.search}
                        >
                            Search
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </Jumbotron>
    );
}

export default search;
