import "../styles/socials-footer.css"

export default function SocialsFooter() {
  return (
     <div className="socials-footer">
      <div className="socials-container">
        <a href="https://www.linkedin.com/in/dipesh-patel-a87b9a333/" target="_blank">
          <img src="./images/linkedin_icon.png" alt="linkedin icon" width="40px" /> 
        </a>
        <a href="mailto:dip100patel@gmail.com" target="_blank">
          <img src="./images/mail_icon.png" alt="mail icon" width="40px" />
        </a>
        <a href="https://t.me/mpharm_dipesh" target="_blank">
          <img src="./images/telegram_icon.png" alt="telegram icon" width="34px" /> 
        </a>
      </div>
     </div>
  )
}