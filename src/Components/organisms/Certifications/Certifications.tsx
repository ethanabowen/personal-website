import { Certification as CertificationType } from "../../../types";
import "./Certification.css";

import cloud_practitioner from '../../organisms/Certifications/AWS Cloud Practitioner.png';
import developer_associate from '../../organisms/Certifications/AWS Developer Associate.png';
import sysops_associate from '../../organisms/Certifications/AWS SysOps Admin Associate.png';
import sa_associate from '../../organisms/Certifications/AWS Solutions Architect Associate.png';
import sa_pro from '../../organisms/Certifications/AWS Solutions Architect Professional.png';
import security_specialty from '../../organisms/Certifications/AWS Security Specialty.png';

let certification_images = [cloud_practitioner, developer_associate, sysops_associate, sa_associate, sa_pro, security_specialty]

export default function Certifications() {
  return (
    <>
      {certification_images.map((cert, index) => {
        return <Certification key={`cert${index}`} image={cert} />;
      })}
    </>
  );
}

function Certification({ image }: CertificationType) {
  return (
    <div className="col-auto">
      <div className="row justify-content-center">
          <img className="cert-image-dimensions" alt="" src={image} />
      </div>
    </div>
  );
}
