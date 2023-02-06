import { useState, useEffect } from "react";
import axios from "axios";
import Style from "./style";
import LinkedinLogo from "../../assets/logo-linkedin.svg";
import LocationLogo from "../../assets/location.png";
import CompanyLogo from "../../assets/company.png";
import StudentLogo from "../../assets/student.png";
import CheckLogo from "../../assets/check.png";

export default function TeamGrid() {
  const [consultants, setConsultants] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/team`).then(({ data }) => {
      setConsultants(data);
    });
  }, []);

  return (
    <Style>
      <div className="mainDiv">
        <div className="titleMainDiv">
          <h2>
            Notre
            <br /> équipe
            <br /> d'experts IT
          </h2>
        </div>
        <div className="firstBloc">
          <img className="locationImg" src={LocationLogo} alt="Location" />
          <ul>6 agences</ul>
          <li>La Roche Sur Yon</li>
          <li>Bordeaux</li>
          <li>Nantes</li>
          <li>Rennes</li>
          <li>Angers</li>
          <li>Lille</li>
        </div>
        <div className="secondBloc">
          <img className="companyImg" src={CompanyLogo} alt="Company" />
          <p className="pSecondBloc">
            Accompagne plus de <em>400</em> entreprises
          </p>
        </div>
        <div className="thirdBloc">
          <img className="studentImg" src={StudentLogo} alt="Student" />
          <p className="pThirdBloc">
            Accompagne plus de <em>370</em> candidat(e)s
            <br /> par an
          </p>
        </div>
        <div className="fourthBloc">
          <img className="checkImg" src={CheckLogo} alt="Check" />
          <p className="pFourthBloc">
            Plus de <em>94%</em>
            <br /> de période d’essai validée
          </p>
        </div>
      </div>
      <div className="gridContainer">
        {consultants.map((consultant) => {
          return (
            <div className="consultantDiv">
              <img
                src={consultant.avatar}
                alt="Portrait du consultant"
                className="imageConsultant"
              />
              <div className="consultantDivContent">
                <h3>
                  {consultant.name} {consultant.firstname}
                </h3>
                <p className="pJob">{consultant.job}</p>
                <p className="pMail">{consultant.mail}</p>
                <p className="pPhoneNumber">{consultant.phonenumber}</p>
                <a href={consultant.linkedin}>
                  <img
                    className="LinkedinLogo"
                    src={LinkedinLogo}
                    alt="Logo Linkedin"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Style>
  );
}
