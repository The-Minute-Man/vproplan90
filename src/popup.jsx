import React, {useState} from 'react';

export default function PopUp() {
    const [isOpen, setIsOpen] = useState(false);

      const togglePopup = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div></div>
    )
}