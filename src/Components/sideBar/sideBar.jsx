import React from 'react';
import scss from './sideBar.module.scss';
import {NavLink} from "react-router-dom";

const SideBar = (props) => {
    return (
    <div className={scss.layer}>
        {props.state.map((person) => (<NavLink key={person.Id} className={`${scss.UserNames} ${scss.UserNamesH}`} to={`/${person.Id}`}>{person.name}</NavLink>))}
    </div>
    );
}

export default SideBar;