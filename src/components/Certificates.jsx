import CertificationCard from "./CertificationCard";
import Separator from "./Separator";

const certificates = [
    {
        certificateLink: "https://www.credly.com/badges/4d5ba5e6-7072-45c0-b800-215676258afc/linked_in_profile",
        description: "todo",
        title: "AWS Developer – Associate",
        skills: ["todo"],
    },
    {
        certificateLink: "https://www.credly.com/badges/4d5ba5e6-7072-45c0-b800-215676258afc/linked_in_profile",
        description: "todo",
        title: "AWS some developer Developer – Associate",
        skills: ["todo"],
    },
];

const Certificates = () => {
    return (
        <section id="certificates" >
            <Separator text={"Certificates"} />
            <div className="w-full flex flex-wrap justify-center gap-4">
                {certificates.map((certificate, index) => (
                    <CertificationCard
                        key={index}
                        certificateLink={certificate.certificateLink}
                        description={certificate.description}
                        title={certificate.title}
                        skills={certificate.skills}
                    />
                ))}
            </div>
        </section>
    );
};

export default Certificates;
