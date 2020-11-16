import React from 'react';

const Form = () => {
  return (
    <form>
      <div className='Form--group'>
        <input
          type='text'
          id='name'
          placeholder='Full Name'
          className='Form--name'
        />
        <label htmlFor='name' className='Form--label'>
          Full Name
        </label>
      </div>
      <div className='Form--group'>
        <input
          type='email'
          id='email'
          placeholder='Email Adress'
          className='Form--email'
        />
        <label htmlFor='email' className='Form--label'>
          Adres e-mail
        </label>
      </div>
      <div className='Form--group'>
        <input
          type='text'
          id='subject'
          placeholder='Subject'
          className='Form--subject'
        />
        <label htmlFor='subject' className='Form--label'>
          Subject
        </label>
      </div>
      <div className='Form--group'>
        <textarea
          id='text'
          row='4'
          col='50'
          wrap='off'
          placeholder='Add message'
          className='Form--text'></textarea>
      </div>
      <button type='send' className='btn '>
        Send
      </button>
    </form>
  );
};

export default Form;
