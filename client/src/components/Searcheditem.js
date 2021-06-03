import Card from './Card';
import styles from '../myStyles.module.css';

function Searcheditem({data,ck,type})
{
    return (

            
            <div className={styles.Searcheditem}>
                <div>{type}</div>
                {!data.length&&<h1>NO element</h1>}

                {data.length>0&&data.map((item)=> <Card ck={ck} val={item} people='User'/>)}
            </div>

    )
}
export default Searcheditem;