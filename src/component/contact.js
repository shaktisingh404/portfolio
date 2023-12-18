import React, { useState } from 'react';
import './contact.css';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Event handlers to update state when input changes
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div class='background'>
      <div class='container'>
        <div class='screen'>
          <div class='screen-header'>
            <div class='screen-header-left'>
              <div class='screen-header-button close'></div>
              <div class='screen-header-button maximize'></div>
              <div class='screen-header-button minimize'></div>
            </div>
            <div class='screen-header-right'>
              <div class='screen-header-ellipsis'></div>
              <div class='screen-header-ellipsis'></div>
              <div class='screen-header-ellipsis'></div>
            </div>
          </div>
          <div class='screen-body'>
            <div class='screen-body-item left'>
              <div class='app-title'>
                <span>CONTACT</span>
                <span>ME</span>
              </div>
              <div class='app-contact'>CONTACT INFO : +91 8930257439</div>
            </div>
            <div class='screen-body-item'>
              <div class='app-form'>
                <div class='app-form-group'>
                  <input
                    type='text'
                    value={name}
                    onChange={handleNameChange}
                    class='app-form-control'
                    placeholder='NAME'
                  />
                </div>
                <div class='app-form-group'>
                  <input
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                    class='app-form-control'
                    placeholder='EMAIL'
                  />
                </div>
                <div class='app-form-group'>
                  <input
                    type='number'
                    value={phone}
                    onChange={handlePhoneChange}
                    class='app-form-control'
                    placeholder='CONTACT NO'
                  />
                </div>
                <div class='app-form-group message'>
                  <input
                    type='text'
                    value={message}
                    onChange={handleMessageChange}
                    class='app-form-control'
                    placeholder='MESSAGE'
                  />
                </div>
                <div class='app-form-group buttons'>
                  <button class='app-form-button'>CANCEL</button>
                  <button class='app-form-button'>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
