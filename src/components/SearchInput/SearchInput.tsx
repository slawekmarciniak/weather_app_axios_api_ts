import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { FC, useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import "./styles.css";

const style = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: 1,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
};

interface SearchInputProps {
  handleClick: () => void;
}

const SearchInput: FC<SearchInputProps> = ({ handleClick }) => {
  const { city, handleInputChange, resetInput } = useContext(AppContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const onlyLetters = /^[a-pr-uwy-zA-PR-UWY-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
    if (!city.match(onlyLetters)) {
      alert("city name must contain only letters");
      return;
    }
    if (city.length < 2) {
      alert("city must have minimum 2 letters");
      return;
    }
    handleClick();
  };

  return (
    <div className="formContainer">
      <Paper component="form" onSubmit={handleSubmit} style={style.root}>
        <InputBase
          style={style.input}
          placeholder="enter city"
          value={city}
          onChange={handleInputChange}
          inputProps={{ "aria-label": "search google maps" }}
        />
        <Divider style={style.divider} orientation="vertical" />

        <IconButton type="submit" style={style.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>

        <Divider style={style.divider} orientation="vertical" />
        <IconButton
          onClick={resetInput}
          style={style.iconButton}
          aria-label="clear"
        >
          <ClearIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchInput;
