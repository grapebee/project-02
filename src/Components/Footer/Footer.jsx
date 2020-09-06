import React, { useRef, useState } from "react";
import scss from './Footer.module.scss';
import { Input, Button, Form } from "react-bootstrap";

const textareaRef = useRef<HTMLTextAreaElement>(null);

const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
): void => {
    if (textareaRef.current) {
        const element = textareaRef.current;
        element.style.height = "";
        element.style.height = `${element.scrollHeight + 2}px`;
    }
    else
        console.log(textareaRef.current)
};

const Footer = (props) => {
    return (
        <div className={scss.wrapper}>
            <Form.Control
                as="textarea"
                //ref={textareaRef}
                className={scss.textarea}
                placeholder="Write a message..."
                rows={1}
                onChange={handleMessageChange}
                //onKeyPress={handleKeyPress}
            />
        </div>
    );
}

export default Footer;
