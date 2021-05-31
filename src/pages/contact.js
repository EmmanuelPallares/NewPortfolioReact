import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return <Layout>
    <section className="contact-page">
      <article className="contact-form">
        <h3>Get in touch</h3>
        <p>Interested in working together? <br></br>
Feel free to contact me for any project or collaboration.</p>
        <form  action="https://formspree.io/f/xpzkddjg"
  method="POST">
          <div className="form-group">
            <input type="text" placeholder="Name" name="name" className="form-control" />
            <input type="email" placeholder="E-mail" name="email" className="form-control" />
            <textarea name="message" rows="5" placeholder="message" className="form-control"></textarea>
            <button type="submit" className="submit-btn btn">Submit</button>
                      </div>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
