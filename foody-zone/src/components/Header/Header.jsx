import Button from "../Button/Button";
import styles from "./Header.module.css";

const Header = (props) => {
  let { searchFood, filterFood, selectedFilteredButton } = { ...props };

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.logo}>
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <div className={styles.searchBox}>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search Food..."
            onChange={searchFood}
          />
        </div>
      </div>
      <div className={styles.filterContainer}>
        <Button
          text="All"
          filterFood={filterFood}
          selectedFilteredButton={selectedFilteredButton}
        />
        <Button
          text="Breakfast"
          filterFood={filterFood}
          selectedFilteredButton={selectedFilteredButton}
        />
        <Button
          text="Lunch"
          filterFood={filterFood}
          selectedFilteredButton={selectedFilteredButton}
        />
        <Button
          text="Dinner"
          filterFood={filterFood}
          selectedFilteredButton={selectedFilteredButton}
        />
      </div>
    </div>
  );
};

export default Header;
