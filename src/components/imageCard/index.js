import React from "react";
import { Link } from "react-router-dom";

import { Card, Col } from "react-bootstrap";

export default function ImageCard(props) {
    return (
        <Col xs={6} md={4}>
            <Link to={`/view/${props.data.id}`}>
                <Card className="image-card">
                    <Card.Img
                        variant="top"
                        src={props.data.images.downsized_large.url}
                    />
                </Card>
            </Link>
        </Col>
    );
}
