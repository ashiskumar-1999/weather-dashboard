import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";

type SearchBarProps = {
  cityName: string;
  isCelcius: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

const SearchBar = ({
  cityName,
  isCelcius,
  onChange,
  onClick,
}: SearchBarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchbox}>
        <input
          className={styles.searchbar}
          placeholder=" Search City"
          value={cityName}
          onChange={onChange}
        />
        <Search className={styles.icon} />
      </div>
      <button onClick={onClick} className={styles.button}>
        {isCelcius ? "Switch to Frenhit" : "Switch to celcius"}
      </button>
    </div>
  );
};

export default SearchBar;
