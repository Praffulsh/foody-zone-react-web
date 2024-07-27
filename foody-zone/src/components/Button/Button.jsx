import styles from "./Button.module.css";

const Button = (props) => {
  const { text, filterFood, selectedFilteredButton } = { ...props };
  return (
    <div className={styles.filterBtn}>
      <button
        onClick={() => {
          filterFood(text);
        }}
        className={selectedFilteredButton === text && styles.selected}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
