import React, {useState} from 'react';
import Contact from './Contact.jsx';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
  }, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
  }, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  }, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  }, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
  }, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
  }];

function Contacts () {

const [searchResult, setSearchResult] = useState('');

function handleSearchChange(event) {
    setSearchResult(event.target.value);
}

const contactsFilter = contacts.filter((contact) => {
    return(
    contact.lastName.toLowerCase().includes(searchResult.toLowerCase()) ||
        contact.firstName.toLowerCase().includes(searchResult.toLowerCase())
    );
});

const filteredContacts = contactsFilter.map((contact, i) => {
    return (
      <Contact key={i} firstName={contact.firstName} lastName={contact.lastName} phone={contact.phone} gender={contact.gender} />
    );
  });

    return(
        <>
        <input type ="text" placeholder="search" onChange={handleSearchChange}></input>
        {filteredContacts}
        </>
    )
}

export default Contacts;