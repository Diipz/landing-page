import { Button, Typography } from "@mui/material"
import "../styles/main-content.css"

export default function MainContent() {
  return (
    <div className="main-container">
      <section className="hero-section">
        <h2 className="hero-intro">
            Hi, my name is
        </h2>
        <h2 className="hero-name font-calibre">
          Dipesh Patel.
        </h2>
        <h3 className="hero-profession font-calibre">
          A clinical pharmacist.
        </h3>
        <Typography variant="h5" className="hero-description">
        I specialize in chronic disease management offering contract services to general practices. With a focus on developing personalized care plans, medication management, patient education and overall health promotion.
        </Typography>
        <Button variant="outlined" disableRipple id="hero-contact-btn">
          Contact Me
        </Button>
      </section>
      <section className="about" >
        <Typography variant="h4" id="about-heading">
          About Me
        </Typography>
        <div className="about-container">
          <div className="p-wrapper">
            <p>Hello! My name is Dipesh, and I&#39;m a <span>senior clinical pharmacist</span>. I started my general practice journey in 2018 as an <span>independent prescriber</span>. </p>
            <p>Fast-forward to today, and I&#39;ve had the privilege of working with esteemed colleagues in both private and public sectors. I&#39;m enthusiastic about patient-centred care, focusing on <span>chronic disease management</span> with a special interest in <span>mental health</span>.</p>
            <p>I&#39;m currently offering contract services for general practices. Primary care networks can take advantage of the <span>Additional Roles Reimbursement Scheme</span> (ARRS) as a cost-effective alternative to using agencies.</p>
          </div>
          <div id="portrait-wrapper">
            <img src="/public/images/portrait.webp" alt="portrait" className="portrait" />
            <div id="portrait-frame"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

