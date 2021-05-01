import React from "react";

const Footer = () =>{

  return (
    <footer className="footer-container pt-3 bg-primary">
      <div></div>
      <div className="">
        <div className="row">
        <a href="http://codelexx.mywebcommunity.org/" className="btn btn-outline-dark mx-2" target="_blank" rel="noreferrer"><i className="fas fa-laptop-code"></i></a>
        <a href="https://twitter.com/code_lexx" className="btn btn-outline-dark mx-2" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://github.com/lexx54" className="btn btn-outline-dark mx-2" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        </div>
        <div className="row mt-2">
          <p>Page built by <span className="border-bottom">CodeLexx</span></p>
        </div>
        
      </div>
      <article className="footer-contact">
        <h4>Contact us</h4>
        <a href="#home" className="btn btn-outline-dark">Instagram</a>
        <p>0414-5869412</p>
      </article>
    </footer>
  )
}

export default Footer;