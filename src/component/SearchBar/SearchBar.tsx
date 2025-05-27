import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";

type SearchBarProps = {
  cityName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ cityName, onChange }: SearchBarProps) => {
  return (
    <div className={styles.searchbox}>
      <Search className={styles.icon} />
      <input
        className={styles.searchbar}
        placeholder=" Search City"
        value={cityName}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
