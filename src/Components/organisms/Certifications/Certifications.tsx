import { Certification as CertificationType } from "../../../types";
import "./Certification.css";
import { certifications } from "../../../Constants";

export default function Certifications() {
  return (
    <>
      {certifications.map((cert, index) => {
        return <Certification key={cert.name + index} {...cert} />;
      })}
    </>
  );
}

function Certification({
  link,
  image,
  startDate,
  endDate,
}: CertificationType) {
  return (
    <div className="col-auto">
      <div className="row">
        <a href={link}>
          <img className="cert-image-dimensions" alt="" src={image} />
        </a>
      </div>
      <div className="row place-content-center">
        <span>
          {startDate} - {endDate}
        </span>
      </div>
    </div>
  );
}
