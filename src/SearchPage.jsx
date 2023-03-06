import Movie from "./Movie";
import Search from "./Search";

const SearchPage = () => {
  return (
    <>
      <div className="container">
        <Search />
        <Movie />
      </div>
    </>
  );
};

export default SearchPage;