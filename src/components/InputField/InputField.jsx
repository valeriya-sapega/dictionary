import './InputField.css';
import { IoSearch } from 'react-icons/io5';
import { forwardRef } from 'react';
import { useMediaQueries } from '../../hooks/useMediaQuery';

const InputField = forwardRef(function InputField(
  { searchTerm, handleChange, handleSubmit, placeholder, className, ...rest },
  ref
) {
  const classNamesInput = className ? `input ${className}-input` : 'input';
  const classNamesIcon = className
    ? `input__icon ${className}-icon`
    : 'input__icon';

  const { mobile } = useMediaQueries();

  const iconSize = mobile ? 20 : 24;

  return (
    <div className="input__container">
      <input
        onChange={handleChange}
        className={classNamesInput}
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        ref={ref}
      />
      {handleSubmit && (
        <IoSearch
          size={iconSize}
          className={classNamesIcon}
          onClick={handleSubmit}
        />
      )}
    </div>
  );
});
export default InputField;
