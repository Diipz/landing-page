import { Button, Paper, Typography } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery";
import "../styles/main-content.css"
import PropTypes from "prop-types";

export default function MainContent({ className}) {

  MainContent.propTypes = {
    className: PropTypes.string,
  };

  const isTabletScreen = useMediaQuery(`(min-width:1125px)`);

  return (
    <div className={`main-container ${className}`}>
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
        I specialise in chronic disease management and offer contract services to general practices. My focus is on developing personalised care plans, managing medication and overall health promotion.
        </Typography>
        <a href="mailto:dip100patel@gmail.com">
          <Button variant="outlined" disableRipple id="hero-contact-btn">
            Contact Me
          </Button>
        </a>
      </section>
      <section id="about-section" >
        <Typography variant="h4" id="about-heading">
          About Me
        </Typography>
        <div className="about-container">
          <div className="p-wrapper">
            <p>Hello! My name is Dipesh, and I&#39;m a <span>senior clinical pharmacist</span>. I started my general practice journey in 2018 as an <span>independent prescriber</span>. </p>
            <p>Fast-forward to today, and I&#39;ve acquired a variety of skills and had the privilege of working with prestigious colleagues. I&#39;m enthusiastic about patient-centred care, focusing on <span>chronic disease management</span> with a special interest in <span>mental health</span>.</p>
            <p>I&#39;m currently offering <span>clinical services</span> to general practices seeking support. Whether it is to complement existing teams or serve in a more independent role</p>
          </div>
          <div id="portrait-wrapper">
            <img src="/images/portrait_inv.webp" alt="portrait" className="portrait" />
            <div id="portrait-frame"></div>
          </div>
        </div>
      </section>
      <section id="experience-section">
        <Typography variant="h4" id="experience-heading">
          Experience
        </Typography>
        <p>
          In my early general practice years, I focused on conducting medication reviews and later expanded into chronic disease management. Collaborating with experienced professionals facilitated my deeper involvement in various aspects of general practice. This included meeting broader Quality & Outcome Framework targets and eventually led me to explore other areas of interest.
        </p>
        <p>
          Throughout my career, I have attained several qualifications, including certification in psychiatric therapeutics, minor illness and injuries. Subsequently, I enrolled in the Master&#39;s in Advanced Practice program, which expanded my ability to conduct a wider range of clinics, including those focused on anxiety and affective disorders. These experiences have enhanced my ability to work autonomously and provide high-quality care.
        </p>
        <a href="/resume.pdf" download>
          <Button variant="outlined" disableRipple id="request-resume-btn">
            Resume
          </Button>
        </a>
      </section>
      <section id="services-section">
        <Typography variant="h4" id="services-heading">
          Services
        </Typography>
        {isTabletScreen ?(
          <div className="services-card-container">
          <div className="card-wrapper">
            <Paper className="service-card" variant="outlined" square={false}>Hypertension</Paper>
            <Paper className="service-card" variant="outlined" square={false}>Lipid therapy</Paper>
          </div>
          <div className="card-wrapper">
            <Paper className="service-card" variant="outlined" square={false}>Asthma</Paper>
            <Paper className="service-card" variant="outlined" square={false}>COPD</Paper>
            <Paper className="service-card" variant="outlined" square={false}>Diabetes</Paper>
          </div>
          <div className="card-wrapper">
            <Paper className="service-card" variant="outlined" square={false}>HRT</Paper>
            <Paper className="service-card" variant="outlined" square={false}>Mental health</Paper>
          </div>
        </div>
        ) : (
          <div className="services-card-container">
          <div className="card-wrapper">
            <Paper className="service-card" variant="outlined" square={false}>Hypertension</Paper>
            <Paper className="service-card" variant="outlined" square={false}>Lipid therapy</Paper>
          </div>
          <div className="card-wrapper">
            <Paper className="service-card" variant="outlined" square={false}>Asthma</Paper>
            <Paper className="service-card" variant="outlined" square={false}>COPD</Paper>
          </div>
          <div className="card-wrapper">
            <Paper className="service-card" variant="outlined" square={false}>Diabetes</Paper>
            <Paper className="service-card" variant="outlined" square={false}>HRT</Paper>
            <Paper className="service-card" variant="outlined" square={false}>Mental health</Paper>
          </div>
        </div>
        )}
      </section>
      <section id="contact-section">
      <Typography variant="h4" id="contact-heading">
          Get in Touch
        </Typography>
        <p id="contact-statement">Looking for a pharmacist for short or long-term contracts? Wanting to avoid agency fees or utilise ARRS funding? Whether you have a question or just want to say hi. Feel free to get in touch.</p>
        <a href="mailto:dip100patel@gmail.com">
          <Button variant="outlined" disableRipple id="contact-me-btn">
            Contact Me
          </Button>
        </a>
      </section>
    </div>
  )
}

