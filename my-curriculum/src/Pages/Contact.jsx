export default function Contact() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Me</h1>
      <p className="text-center">
        If you have any questions or would like to get in touch, please feel free to reach out!
      </p>
      <div className="d-flex justify-content-center">
        <a href="mailto:massimilianoteramo@gmail.com" className="btn btn-primary">
          <i className="bi bi-envelope-fill me-2"></i>
          Email Me
        </a>
        </div>
      <div className="text-center mt-4">
        <p>Or connect with me on social media:</p>
        <a href="dashboard" className="btn btn-secondary me-2">
          <i className="bi bi-github me-2"></i>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/massimilianoteramo/" className="btn btn-secondary">
          <i className="bi bi-linkedin me-2"></i>
          LinkedIn
        </a>
      </div>
      <div className="text-center mt-4">
        <p>Feel free to reach out for any inquiries or collaborations!</p>
        <p>Looking forward to hearing from you!</p>
        <p>Best regards,</p>
        <p>Massimiliano Teramo</p>
        </div> 
        </div>
  );
}
// This code defines a simple contact page with a header, a brief description, and buttons to contact via email or social media.