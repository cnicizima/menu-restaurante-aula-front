import styles from './Card.module.css';
import Image from 'next/image';

export default function Card({ name, image, category, description, price}) {
    return (
        <div className={styles.card}>
            <div className={styles.card_img}>
                <Image src={image} alt={name}/>
            </div>
            <div className={styles.card_info}>
                <h3>{name}</h3>
                <p className={styles.card_category}>{category}</p>
                <p className={styles.card_desc}>{description}</p>
                <p className={styles.price}>
                    R$ {price.toFixed(2).replace('.',',')}
                </p>
            </div>
        </div>
    )
}