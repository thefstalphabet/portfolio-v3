import Cp from '../Assets/Svgs/Cp.svg'
import GraphicDesign from '../Assets/Svgs/GraphicDesign.svg'
import WebDev from '../Assets/Svgs/WebDev.svg'

type ExpertiesItemsType = {
    title: string,
    logo: string,
    description: string
};

const ExpertiesItems: Array<ExpertiesItemsType> = [
    {
        title: "Web Development",
        logo: WebDev,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, corrupti."
    },
    {
        title: "Graphic Design",
        logo: GraphicDesign,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, corrupti."
    },
    {
        title: "Competitive Programming",
        logo: Cp,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, corrupti."
    }
]

export default ExpertiesItems