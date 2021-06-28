import React from 'react';
import styles from '../myStyles2.module.css';
import DishBlock from './DishBlock';
const DishCard = ({dish}) => {
    return (
    <div className={styles.dishCard}>
        {dish&&dish.map(it=><DishBlock dish={it}/>)}
    </div>
    );
};

export default DishCard;
