import { useSelector } from 'react-redux';
import Content from '../Content/Content';
import SearchBar from '../../components/SearchBar/SearchBar';
import Error from '../../components/Error/Error';
import Skeleton from '../../components/Skeleton/Skeleton';

const Main = () => {
  const { isLoading, error, fetchedWord } = useSelector(
    (state) => state.fetchedWord
  );

  let content;

  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <Error />;
  } else if (fetchedWord && !error) {
    content = <Content fetchedWord={fetchedWord} />;
  }

  return (
    <>
      <SearchBar />
      {content}
    </>
  );
};
export default Main;
