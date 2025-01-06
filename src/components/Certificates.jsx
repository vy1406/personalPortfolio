import { DATA } from "../data";
import CertificationCard from "./CertificationCard";
import Separator from "./Separator";


const Certificates = () => {
    return (
        <section id="certificates" >
            <Separator text={"Certificates"} />
            <div className="flex flex-wrap justify-center gap-4">
                {DATA.certificates.map((certificate, index) => (
                    <CertificationCard
                        key={index}
                        certificateLink={certificate.certificateLink}
                        title={certificate.title}
                        skills={certificate.skills}
                    />
                ))}
            </div>
        </section>
    );
};

export default Certificates;
