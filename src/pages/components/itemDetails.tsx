import styles from '@/styles/itemDetails.module.css'
import { useCtx } from '../auth/ctx';

const ItemDetails = () => {

    const { selectedItem, setItemDetailsClicked, itemDetailsClicked } = useCtx()

    const item = selectedItem

    const outsideClick = () => {
        setItemDetailsClicked(!itemDetailsClicked)
    }
    return (
        <div className={styles.container} onClick={outsideClick}>
            <div className={styles.content} onClick={(event) => event.stopPropagation()}>
                <h2 className={styles.title}>📦 Items Details</h2>
                <div className={styles.article}>
                    <div className={styles.name}>Name: {item?.Description}</div>
                    <div className={styles.details}>ID: {item?.ART_ID}</div>
                    <div className={styles.ref}>Reference: #{item?.REF}</div>
                    <div className={styles.ref}>Company: {item?.Supplier}</div>
                    <div className={styles.details}>Dimensions: {item?.Dimensions}</div>
                    <div className={styles.details}>Price: {item?.Price}</div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;