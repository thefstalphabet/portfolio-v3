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
        description: "I have over 2 years of experience in Web Development and worked on various projects with different Tech Stacks."
    },
    {
        title: "Graphic Design",
        logo: GraphicDesign,
        description: "Designing graphics is my other Hobby, love to create Banners, and Social media posts for my Creator account"
    },
    {
        title: "Competitive Programming",
        logo: Cp,
        description: "Solving problems since my Collage days, love to solve Problem with different Apporoches"
    }
]

export default ExpertiesItems