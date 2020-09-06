import React, { useRef, useState } from "react";
import scss from './Footer.module.scss';
import { Input, Button, Form } from "react-bootstrap";

const Footer = (props) => {
    return(
        <div className={scss.wrapper}>
            <Form.Control
                as="textarea"
                //ref={textareaRef}
                className={scss.textarea}
                placeholder="Write a message..."
                rows={1}
                //onChange={handleMessageChange}
                //onKeyPress={handleKeyPress}
            />
        </div>
    );
}

export default Footer;
