import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const DishCard = ({dish}) => {
    return (
    <div>
        <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
            <CardTitle tag="h5">{dish.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>{dish.body}</CardText>
            <Button>Button</Button>
        </CardBody>
        </Card>
    </div>
    );
};

export default DishCard;
