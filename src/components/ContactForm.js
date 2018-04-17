import React from 'react';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  render() {
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        className="contact-form row columns_margin_0"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="col-sm-12">
          <div className="contact-form-name bottommargin_20">
            <label htmlFor="name">
              Full Name
              <span className="required">*</span>
            </label>
            <input
              type="text"
              aria-required="true"
              size="30"
              value=""
              name="name"
              id="name"
              className="form-control"
              placeholder="Enter your Name"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="contact-form-email bottommargin_20">
            <label htmlFor="email">
              Email address
              <span className="required">*</span>
            </label>
            <input
              type="email"
              aria-required="true"
              size="30"
              value=""
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your E-mail"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="contact-form-telephone bottommargin_20">
            <label htmlFor="telephone">
              Telephone
              <span className="required">*</span>
            </label>
            <input
              type="telephone"
              aria-required="true"
              size="30"
              value=""
              name="telephone"
              id="telephone"
              className="form-control"
              placeholder="Enter your Telephone"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="contact-form-message bottommargin_20">
            <label htmlFor="message">Message</label>
            <textarea
              aria-required="true"
              rows="7"
              cols="45"
              name="message"
              id="message"
              className="form-control"
              placeholder="Message"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="contact-form-submit topmargin_10">
            <button
              type="submit"
              id="contact_form_submit"
              name="contact_submit"
              className="theme_button"
            >
              Contact Us
            </button>
          </div>
        </div>
      </form>
    );
  }
}
