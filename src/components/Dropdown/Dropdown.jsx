import { useDispatch, useSelector } from 'react-redux';
import { changeFont } from '../../store/store';
import './Dropdown.css';
import { useEffect, useRef, useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import Line from '../Line/Line';
import { useClickOutside } from '../../hooks/useClickOutside';

const fonts = [
  {
    name: 'Sans Serif',
    font: `'Inter', sans-serif`,
    id: 'sans-serif',
  },
  {
    name: 'Serif',
    font: `'Lora', serif`,
    id: 'serif',
  },
  {
    name: 'Mono',
    font: `'Inconsolata', monospace`,
    id: 'mono',
  },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const {
    fontFamily: { name },
  } = useSelector((state) => state.font);

  const divRef = useRef();

  useClickOutside(divRef, setIsOpen, false);

  const handleFontChange = (font) => {
    dispatch(changeFont(font));
    setIsOpen(false);
  };

  const renderedItems = fonts.map((font) => {
    return (
      <div key={font.name}>
        <li id={font.id} onClick={() => handleFontChange(font)}>
          {font.name}
        </li>
      </div>
    );
  });

  return (
    <section ref={divRef} className="dropdown__wrapper">
      <div className="dropdown" onClick={() => setIsOpen((prev) => !prev)}>
        <div>{name}</div>
        {!isOpen ? (
          <IoChevronDown className="chevron" size={18} />
        ) : (
          <IoChevronUp className="chevron" size={18} />
        )}
      </div>
      {isOpen && <ul className="dropdown__content">{renderedItems}</ul>}
    </section>
  );
};
export default Dropdown;
