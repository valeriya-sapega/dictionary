import { useDispatch } from 'react-redux';
import { addWord } from '../../store/store';
import { useMediaQueries } from '../../hooks/useMediaQuery';
import useSound from 'use-sound';
import { IoPlaySharp } from 'react-icons/io5';
import './Content.css';
import Button from '../../components/Button/Button';
import ExternalSource from '../../components/ExternalSource/ExternalSource';
import Line from '../../components/Line/Line';

const Content = ({ fetchedWord }) => {
  const dispatch = useDispatch();

  const { word, phonetics, meanings, sourceUrls } = fetchedWord;

  const { mobile } = useMediaQueries();

  const iconSize = mobile ? 18 : 24;

  const findValue = (array, key) => {
    const foundObj = array.find(
      (obj) => Object.hasOwn(obj, key) && hasValue(obj, key)
    );
    if (!foundObj) return;
    return foundObj[key];
  };

  const hasValue = (obj, key) => {
    return obj[key] !== null && obj[key] !== undefined && obj[key] !== '';
  };

  const phonetic = findValue(phonetics, 'text');
  const audio = findValue(phonetics, 'audio');
  const [play] = useSound(audio, { volume: 0.8 });

  const handlePlay = () => {
    play();
  };

  const handleSave = () => {
    dispatch(
      addWord({
        term: fetchedWord.word,
        definition: fetchedWord.meanings[0].definitions[0].definition,
        phonetic: phonetic || null,
        sourceUrls: sourceUrls[0],
      })
    );
  };

  const renderedInfo = meanings.map((meaning, i) => {
    const { partOfSpeech, definitions, synonyms } = meaning;
    return (
      <div className="data" key={i}>
        <div className="article-header">
          <h2 className="term--heading">{partOfSpeech}</h2>
          <Line />
        </div>
        <div className="meaning">
          <h3 className="meaning__heading">Meaning</h3>
          <>
            <ul className="list">
              {definitions.map((def, i) => {
                return (
                  <li className="definition" key={i}>
                    {def.definition}
                    {def.example && <p className="example">"{def.example}"</p>}
                  </li>
                );
              })}
            </ul>
          </>
        </div>
        {synonyms.length > 0 && (
          <>
            <div className="synonyms">
              <h3 className="synonyms__heading">Synonyms</h3>
              <div>
                {synonyms.map((synonym, i) => {
                  return (
                    <span className="synonyms--word" key={i}>
                      {synonym}{' '}
                    </span>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    );
  });

  return (
    <>
      <section className="word-data">
        <div className="word--header">
          <div>
            <h1 className="main-text">{word}</h1>
            {phonetic && <h2 className="phonetic">{phonetic}</h2>}
          </div>

          {audio && (
            <button className="audio--control" onClick={() => handlePlay()}>
              <IoPlaySharp className="play--icon" size={iconSize} />
            </button>
          )}
        </div>

        <article className="word--info">
          <Button onClick={handleSave}>Save Word</Button>
          <div className="word--content">{renderedInfo}</div>
          <Line />
          <ExternalSource sourceUrl={sourceUrls[0]} />
        </article>
      </section>
    </>
  );
};
export default Content;
