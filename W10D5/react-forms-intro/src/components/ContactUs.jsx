import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [comments, setComments] = useState('');



  const handleSubmit = e => {
    e.preventDefault();

    const contactInfo = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date(),
    };

    console.log(contactInfo);

    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');
  };

  return (
    <div>
      <h1>Contact Us!!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="phone">Phone:
            <input type="text" id="phone" value={phone} onChange={e => setPhone(e.target.value)} />
          </label>
        </div>
        <br />
        <div>
          <select name="phoneType" value={phoneType} onChange={e => setPhoneType(e.target.value)}>
            <option value="" disabled>Select a phone type...</option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="comments">Comments:
            <textarea 
              name="comments"
              id="comments"
              value={comments}
              onChange={e => setComments(e.target.value)}
            />
          </label>
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};


export default ContactUs;