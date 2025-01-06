import CertificationCard from "./CertificationCard";


const Certificates = () => {
    return (
        <div id="certificates">
            <CertificationCard
                certificateLink={"#"}
                description={"my description, this course was about learning how to do something or not"}
                title={"Course Title"}
                skills={["React", "JavaScript", "Node.js"]}
            />
        </div>
    );
};

export default Certificates;
