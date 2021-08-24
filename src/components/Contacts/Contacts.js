import React from 'react';
import Title from '../Title/Title';
import { ContactsLeft } from './ContactsLeft';
import { ContactsRight } from './ContactsRight';
import './contacts.scss';

export const Contacts = () => {
    return (
        <div className="contacts" id="contact">
            <div id="contacts-link" className="scroll-link contacts"></div>
            <div className="wrapper">
                <Title 
                    label={"Contacts"} 
                    color={"#9D8665"}
                    underlined={true}/>

                <div className="contacts__blocks">
                    <ContactsLeft/>
                    <ContactsRight/>
                </div>
            </div>
        </div>
    )
}