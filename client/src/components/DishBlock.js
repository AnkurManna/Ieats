import React from 'react'
import styles from '../myStyles2.module.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
    } from 'reactstrap';

    const DishBlock = ({dish}) => {
    return (
    <div className={styles.dishBlock}>
        <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{dish.title.substr(0,10)}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>{dish.body.substr(0,10)}</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    </div>
    );
    };

    export default DishBlock;