import Common from '../Assets/Mokups/Common.jpg';

type ProjectDataType = {
    title: string,
    banner: string,
    type: string,
    technologyUsed: string,
    githubUrl: string,
    hostedUrl?: string,
};

const ProjectData: Array<ProjectDataType> = [
    {
        title: "Chat Freely",
        banner: Common,
        type: "web app",
        technologyUsed: "mern",
        githubUrl: "https://github.com/thefstalphabet/chat-freely",
        hostedUrl: "https://chat-freely-app.herokuapp.com",
    },
    {
        title: "Moviepedia",
        banner: Common,
        type: "web app",
        technologyUsed: "mern",
        githubUrl: "https://github.com/thefstalphabet/moviepedia",
        hostedUrl: "",
    }
]

export default ProjectData;