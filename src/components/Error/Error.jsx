import './Error.css';

const Error = ({ text }) => {
  return (
    <div className="error">
      <h1>😕</h1>
      <h3>No Definitions Found</h3>
      <p>
        {text || "Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead."}
      </p>
    </div>
  );
};
export default Error;
