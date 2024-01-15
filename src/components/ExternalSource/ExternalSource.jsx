import { FiExternalLink } from 'react-icons/fi';
import './ExternalSource.css';
import { useMediaQueries } from '../../hooks/useMediaQuery';

const ExternalSource = ({ sourceUrl }) => {
  const { other } = useMediaQueries();

  return (
    <div className="source__link">
      <span className="source">Source</span>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noreferrer"
        className="source url"
      >
        {sourceUrl}
      </a>
      {other && <FiExternalLink className="source source__icon" size={14} />}
    </div>
  );
};
export default ExternalSource;
