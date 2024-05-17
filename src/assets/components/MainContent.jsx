import { Button, Paper, Typography } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery";
import "../styles/main-content.css"

export default function MainContent() {

  const isTabletScreen = useMediaQuery(`(min-width:1125px)`);

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
      <section className="about-section" >
        <Typography variant="h4" id="about-heading">
          About Me
        </Typography>
        <div className="about-container">
          <div className="p-wrapper">
            <p>Hello! My name is Dipesh, and I&#39;m a <span>senior clinical pharmacist</span>. I started my general practice journey in 2018 as an <span>independent prescriber</span>. </p>
            <p>Fast-forward to today, and I&#39;ve had the privilege of working with esteemed colleagues in both private and public sectors. I&#39;m enthusiastic about patient-centred care, focusing on <span>chronic disease management</span> with a special interest in <span>mental health</span>.</p>
            <p>I&#39;m currently offering contract services for general practices. Primary care networks can take advantage of the <span>Additional Roles Reimbursement Scheme</span> (ARRS) and contact me directly as a cost-effective alternative to using agencies.</p>
          </div>
          <div id="portrait-wrapper">
            <img src="/public/images/portrait.webp" alt="portrait" className="portrait" />
            <div id="portrait-frame"></div>
          </div>
        </div>
      </section>
      <section className="experience-section">
        <Typography variant="h4" id="experience-heading">
          Experience
        </Typography>
        <p>
          In my early general practice years, I focused on conducting medication reviews and later expanded into chronic disease management. Calloborating with experienced professionals facilitated my deeper involvement in various aspects of general practice. This included meeting broader Quality & Outcome Framework targets and eventually led me to explore different areas of interest.
        </p>
        <p>
          Throughout my career, I have attained several qualifications, including certificates in psychiatric therapeutics and minor illness and injuries. Subsequently, I enrolled on the Master&#39;s in Advanced Practice program, which enabled me to conduct comprehensive minor illness clinics and reviews for anxiety and affective disorders. These experiences have enhanced my ability to work more autonomously and provide high-quality care.
        </p>
        <Button variant="outlined" disableRipple id="request-resume-btn">
          Request Resume
        </Button>
      </section>
      <section className="services-section">
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
      <section className="contact-section">
      <Typography variant="h4" id="contact-heading">
          Get in Touch
        </Typography>
        <p id="contact-statement">Looking for a pharmacist for short or long term contracts? Wanting avoid agency fees and leverage ARRS funding? Whether you have a question or just want to say hi. Get in touch today!</p>
        <Button variant="outlined" disableRipple id="contact-me-btn">
          Contact Me
        </Button>
      </section>
    </div>
  )
}

