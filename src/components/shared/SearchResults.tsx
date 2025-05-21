import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostList from "./GridPostList";

const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
}) => {
  if (isSearchFetching) return <Loader />;

  console.log(searchedPosts, searchedPosts, searchedPosts.length);

  if (searchedPosts && searchedPosts.length !== 0) {
    return <GridPostList posts={searchedPosts} />;
  }
  return (
    <p className="text-light-4 mt-10 text-center w-full">No resuts found</p>
  );
};

export default SearchResults;
