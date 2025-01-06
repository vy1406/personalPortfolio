import CertificationCard from "./CertificationCard";
import Separator from "./Separator";


const Certificates = () => {
    return (
        <section id="certificates">
            <Separator text={"Certificates"} />
            <div >
                <CertificationCard
                    certificateLink={"#"}
                    description={"my description, this course was about learning how to do something or not"}
                    title={"Course Title"}
                    skills={["React", "JavaScript", "Node.js"]}
                />
            </div>
        </section>
    );
};

export default Certificates;
