import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";

type SearchBarProps = {
  cityName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ cityName, onChange }: SearchBarProps) => {
  return (
    <div className={styles.searchbox}>
      <input
        className={styles.searchbar}
        placeholder=" Search City"
        value={cityName}
        onChange={onChange}
      />
      <Search className={styles.icon} />
    </div>
  );
};

export default SearchBar;
