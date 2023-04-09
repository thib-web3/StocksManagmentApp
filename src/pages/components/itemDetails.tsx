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
                    <div className={styles.name}>Name: {item?.name}</div>
                    <div className={styles.ref}>Reference: #{item?.reference}</div>
                    <div className={styles.ref}>Company: {item?.company}</div>
                    <div className={styles.details}>Other Details...</div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;