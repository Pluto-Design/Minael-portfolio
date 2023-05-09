import LeagueBG from "../svg/LOL.svg";
import bg from '../images/background.jpg'

export interface PortfolioCard { 
    title: string;
    description: string;
    bgImage: string;
    date: string;
}

export const PortfolioCardData: PortfolioCard[] = [
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam elit nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam elit nisl vitae nisl.",
        bgImage: LeagueBG,
        date: "2017"
    },
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam elit nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam elit nisl vitae nisl.",
        bgImage: LeagueBG,
        date: "2017"
    },
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam elit nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam elit nisl vitae nisl.",
        bgImage: LeagueBG,
        date: "2017"
    },
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam elit nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam elit nisl vitae nisl.",
        bgImage: LeagueBG,
        date: "2017"
    },
    {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam elit nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam elit nisl vitae nisl.",
        bgImage: bg,
        date: "2017"
    },
]