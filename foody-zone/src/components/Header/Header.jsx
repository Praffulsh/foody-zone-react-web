import Button from "../Button/Button";
import styles from "./Header.module.css";

const Header = (props) => {
  let { searchFood, filterFood } = { ...props }
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.logo}>
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <div className={styles.searchBox}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Food..."
            onChange={searchFood}
          />
        </div>
      </div>
      <div className={styles.filterContainer}>
        <Button text="All" filterFood={filterFood} />
        <Button text="Breakfast" filterFood={filterFood} />
        <Button text="Lunch" filterFood={filterFood} />
        <Button text="Dinner" filterFood={filterFood} />
      </div>
    </div>
  );
};

export default Header;
