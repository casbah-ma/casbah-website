import React, { useState, useRef, useEffect } from 'react';
import ArrowDown from '@/icons/ArrowDown';
import ArrowRight from '@/icons/ArrowRight';
import { CSSTransition } from 'react-transition-group';
import {
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  MobileToggle,
  ToggleButton,
} from './NavMiniList.styles';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import { child, container } from '../Navbar/variants';

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return { isOpen, toggle, ref };
};

const NavMiniList = ({ name, options, Icon, languages }) => {
  const { isOpen, toggle, ref } = useDropdown();
  const [selectedOption, setSelectedOption] = useState(null);
  const { t } = useTranslation();
  const handleItemClick = (item) => {
    setSelectedOption(item);
    toggle();
  };

  //For language dropdown
  const [activeLanguage, setActiveLanguage] = useState('English');

  const handleChangeLanguage = (item) => {
    setActiveLanguage(item);
    toggle();
  };

  return (
    <DropdownContainer ref={ref} active={isOpen}>
      <DropdownButton onClick={toggle}>
        {Icon && <Icon color={isOpen ? 'white' : 'black'} />}
        <motion.div
          className="flex overflow-hidden justify-center items-center gap-2"
          variants={container}
          initial="hidden"
          animate="hidden"
          whileTap="click"
          whileHover="visible"
        >
          <div className="flex">
            {Array.from(t(name)).map((letter, index) => (
              <motion.div
                key={index}
                variants={child}
                className={index == 0 ? 'capitalize' : ''}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.div>
            ))}
          </div>
          <ToggleButton open={isOpen}>
            <ArrowDown className="mt-1"/>
          </ToggleButton>
        </motion.div>
        <MobileToggle>
          <ArrowRight color={isOpen ? 'white' : 'black'} />
        </MobileToggle>
      </DropdownButton>
      <CSSTransition in={isOpen} timeout={300} classNames="fade" unmountOnExit>
        <DropdownList>
          {languages
            ? languages?.map((item) => (
                <DropdownItem
                  key={item}
                  active={activeLanguage === item}
                  onClick={() => handleChangeLanguage(item)}
                >
                  {item}
                </DropdownItem>
              ))
            : options?.map((option, index) => (
                <Link key={index} href={option.url}>
                  <DropdownItem
                    key={option.value}
                    active={selectedOption?.value === option.value}
                    onClick={() => handleItemClick(option)}
                  >
                    {option.label}
                  </DropdownItem>
                </Link>
              ))}
        </DropdownList>
      </CSSTransition>
    </DropdownContainer>
  );
};

export default NavMiniList;
