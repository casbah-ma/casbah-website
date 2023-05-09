import React, { useState, useRef, useEffect } from "react";
import ArrowDown from "../Icons/ArrowDown";
import {
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  ToggleButton,
} from "./NavMiniList.styles";
import Link from "next/link";

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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { isOpen, toggle, ref };
};

const NavMiniList = ({ name, options }) => {
  const { isOpen, toggle, ref } = useDropdown();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleItemClick = (item) => {
    setSelectedOption(item);
    toggle();
  };

  return (
    <DropdownContainer ref={ref}>
      <DropdownButton onClick={toggle}>
        {name}
        <ToggleButton open={isOpen}>
          <ArrowDown />
        </ToggleButton>
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
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
      )}
    </DropdownContainer>
  );
};

export default NavMiniList;
