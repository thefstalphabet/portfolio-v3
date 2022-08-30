type ExperienceItemsType = {
    role: string,
    org: string,
    employmentType: string,
    startMonth: string;
    startYear: number,
    endMonth?: string,
    endYear?: number,
    currentlyWorking?: boolean,
    location: string

};

const ExperienceItems: Array<ExperienceItemsType> = [
    {
        role: "Software Developer Engineer - 1",
        org: "TIKAJ",
        employmentType: "Full-time",
        startMonth: "March",
        startYear: 2022,
        currentlyWorking: true,
        location: "Delhi, India"

    },
    {
        role: "Participant",
        org: "GirlScript Summer of Code",
        employmentType: "Part-time",
        startMonth: "March",
        startYear: 2022,
        endMonth: "May",
        endYear: 2022,
        location: "Delhi, India"

    },
    {
        role: "Full Stack Developer",
        org: "aNumak & Company",
        employmentType: "Internship",
        startMonth: "July",
        startYear: 2021,
        endMonth: "October",
        endYear: 2021,
        location: "Bangalore, India"

    },
    
]

export default ExperienceItems