import { DATA } from "../data";
import RandomCard from "./RandomCard";
import Separator from "./Separator";

const Randoms = () => {
    return (
        <section id="random">
            <Separator text={"Random"} />
            <div className="w-full flex flex-wrap justify-center gap-4">
                {DATA.randoms.map((random, index) => (
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
