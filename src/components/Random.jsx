import RandomCard from "./RandomCard";
import Separator from "./Separator";

const randoms = [
    {
        description: "my description, this course was about learning how to do something or not",
        title: "Course Title",
        link: "https://www.example.com",
    },
    {
        description: "my description, this course was about learning how to do something or not",
        title: "Course Title",
    },
]

const Randoms = () => {
    return (
        <section id="random">
            <Separator text={"Random"} />
            <div className="w-full flex flex-wrap justify-center gap-4">
                {randoms.map((random, index) => (
                    <RandomCard
                        key={index}
                        description={random.description}
                        title={random.title}
                        link={random.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Randoms;
