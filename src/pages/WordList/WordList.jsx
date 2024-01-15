import { useDispatch, useSelector } from 'react-redux';
import {
  filterByWord,
  removeWord,
  reset,
  sortWords,
  filterSelector,
} from '../../store/store';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import './WordList.css';
import Line from '../../components/Line/Line';
import ExternalSource from '../../components/ExternalSource/ExternalSource';
import Error from '../../components/Error/Error';

const WordList = () => {
  const dispatch = useDispatch();

  const { data, filterWord } = useSelector(filterSelector);

  const handleDelete = (word) => {
    dispatch(removeWord(word.id));
  };
  const handleSort = (sortBy) => {
    dispatch(sortWords(sortBy));
  };
  const handleReset = () => {
    dispatch(reset());
  };

  const handleFilter = (e) => {
    dispatch(filterByWord(e.target.value));
  };

  const renderedItems = data.map((word) => {
    const { id, term, definition, phonetic, sourceUrls } = word;
    return (
      <article className="word__article" key={id}>
        <div>
          <div>
            <div className="article-header">
              <h2 className="term--heading">{term}</h2>
              <Line />
            </div>
            <p className="phonetic">{phonetic}</p>
            <p>{definition}</p>
          </div>
        </div>
        <div className="article-footer">
          <ExternalSource sourceUrl={sourceUrls} />
          <Button classes="warning" onClick={() => handleDelete(word)}>
            Delete
          </Button>
        </div>
      </article>
    );
  });

  return (
    <>
      <InputField
        handleChange={handleFilter}
        searchTerm={filterWord}
        placeholder="Filter words"
      />

      {data.length > 0 ? (
        <section className="saved--section">
          <div className="actions">
            <div className="btns--sort">
              <Button onClick={() => handleSort('AZ')}>Sort A-Z</Button>
              <Button onClick={() => handleSort('ZA')}>Sort Z-A</Button>
            </div>
            <Button classes="warning" onClick={handleReset}>
              Reset List
            </Button>
          </div>
          {renderedItems}
        </section>
      ) : (
        <Error />
      )}
    </>
  );
};
export default WordList;
