import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => (
  <div className={styles.card}>
    {children}
  </div>
);

export default Card;
