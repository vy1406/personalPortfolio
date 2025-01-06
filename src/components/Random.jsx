import RandomCard from "./RandomCard";
import Separator from "./Separator";



const Randoms = () => {
    return (
        <section id="random">
            <Separator text={"Random"} />
            <RandomCard
                description={"my description, this course was about learning how to do something or not"}
                title={"Course Title"}
            />
        </section>
    );
};

export default Randoms;
