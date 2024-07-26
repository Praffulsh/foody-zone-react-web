import styles from "./Button.module.css";

const Button = (props) => {
  const { text, filterFood } = { ...props };
  return (
    <div className={styles.filterBtn}>
      <button
        onClick={() => {
          filterFood(text);
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
