import styles from '@/styles/itemDetails.module.css'
import { useCtx } from '../auth/ctx';
import router from 'next/router';

const ItemDetails = () => {

    const { selectedItem, setItemDetailsClicked, itemDetailsClicked, stock, supplier } = useCtx()
    const item = selectedItem

    const outsideClick = () => {
        setItemDetailsClicked(!itemDetailsClicked)
    }
    return (
        <div className={styles.container} onClick={outsideClick}>
            <div className={styles.content} onClick={(event) => event.stopPropagation()}>
                <h2 className={styles.title}>📦 Item #{item?.REF}</h2>
                <div className={styles.article}>
                    <div className={styles.subtitle}>
                        Details:
                    </div>
                    <div className={styles.name}>Name: {item?.Description}</div>
                    <div className={styles.details}>Item ID: {item?.ART_ID}</div>
                    <div className={styles.details}>Dimensions: {item?.Dimensions}</div>
                    <div className={styles.details}>Price: {item?.Price}</div>
                    <div className={styles.details}>Stock: {stock?.StockTotal}</div>
                    <div className={styles.line}></div>
                    <div className={styles.subtitle}>
                        Historic:
                    </div>
                    <div className={styles.details}>Departure: {stock?.Client_departure_date ? stock.Client_departure_date.slice(0, 10) : 'Not sent yet.'}</div>
                    <div className={styles.details}>Arrival: {stock?.Supplier_arrival_date ? stock.Supplier_arrival_date.slice(0, 10) : 'Not arrived yet.'}</div>
                    <div className={styles.line}></div>
                    <div className={styles.subtitle}>
                        Contacts:
                    </div>
                    <div className={styles.supplierContainer}>

                        <div className={styles.supplier}>Supplier: {item?.Supplier}</div>

                        <div className={styles.contact}>
                            {supplier.TEL &&
                                <div className={styles.button}>{supplier.TEL}</div>
                            }
                            {supplier.EMAIL &&
                                <div className={styles.button} onClick={() => router.push(`mailto:${supplier.EMAIL}`)}>Send Mail</div>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;