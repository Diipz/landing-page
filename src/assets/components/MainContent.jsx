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
      </section>
      <section className="about">
        <Typography variant="h5">
          About me
        </Typography>
      </section>
    </div>
  )
}

