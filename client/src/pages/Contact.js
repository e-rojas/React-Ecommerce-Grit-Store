import React from "react";

export default function Contact() {
  return (
    <div style={{height:'600px',background:'#639585'}}  className="container-fluid  d-flex flex-column justify-content-center align-items-center ">
      <form style={{width:'400px',background:'#fff'}} className='border border-dark p-5 rounded '>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
       
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
         
          <label className="form-check-label" htmlFor="exampleCheck1">
           Sign Me Up!
          </label>
        </div>
        <div className="form-group">
            <label htmlFor='textArea' >Message</label>
            <textarea id='textArea' className='form-control'  rows="3"></textarea>
          </div>
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}
