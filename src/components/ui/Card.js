import styles from "./Card.module.css";
function Card(props) {
  return (
    <div className={styles.card}>
      {/* special props assigned by default which
        contains content betwn two opening and 
        closing componenet tags */}
      {props.children}
    </div>
  );
}
export default Card;
