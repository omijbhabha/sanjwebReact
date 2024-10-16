const workData = [
    {
        title: "The Hook | Short Film",
        videoSrc: "https://player.vimeo.com/video/840843407?h=21ec1cba98",
        synopsis: "The Hook is a human tale of friendship, love, admiration, and ultimate desires.",
        // awards: [
        //     {
        //         src: "work/images/hookawards/AIFF2023_official_selection_laurels_white.png",
        //         alt: "AIFF2023"
        //     },
        //     {
        //         src: "work/images/hookawards/Chania Film Festival bianco.webp",
        //         alt: "Chania"
        //     },
        //     {
        //         src: "work/images/hookawards/OFFICIAL SELECTION - Duemila30 - 2023 white.png",
        //         alt: "Duemila"
        //     },
        //     {
        //         src: "work/images/hookawards/Alloro selezione ufficiale bianco.png",
        //         alt: "Medi Terra Neo"
        //     },
        //     {
        //         src: "work/images/hookawards/SFFA_wreath_logo-Student fiction_white.png",
        //         alt: "SFFA"
        //     },
        //     {
        //         src: "work/images/hookawards/Film Seleced.png",
        //         alt: "Waterford"
        //     }
        // ],
        // links: [
        //     {
        //         href: "https://www.imdb.com/title/tt32476027/",
        //         iconSrc: "icons/imdb.png",
        //         alt: "IMDb"
        //     },
        //     {
        //         href: "https://letterboxd.com/film/the-hook-1/",
        //         iconSrc: "icons/lb.png",
        //         alt: "LetterBoxd"
        //     }
        // ]
    },
    {
        title: "Stranger in the City",
        videoSrc: "https://player.vimeo.com/video/758652647",
        synopsis: "When life brings Suhas, a corporate trainer, to a new city, he comes across a lively young man and a mysterious traveller girl who make him ruminate about his life choices and aspirations.",
        // awards: [
        //     {
        //         src: "work/images/sitcawards/12th-dada-saheb-phalke-2022.webp",
        //         alt: "12th-dada-saheb-phalke-2022"
        //     },
        //     {
        //         src: "work/images/sitcawards/1625563968_60e42340b953e_logo.png",
        //         alt: "KISFF"
        //     }
        // ],
        // links: [
        //     {
        //         href: "https://www.imdb.com/title/tt32477472/?ref_=nm_knf_t_3",
        //         iconSrc: "icons/imdb.png",
        //         alt: "IMDb"
        //     },
        //     {
        //         href: "https://letterboxd.com/film/film:760844/",
        //         iconSrc: "icons/lb.png",
        //         alt: "LetterBoxd"
        //     }
        // ]
    },
    {
        title: "Mandala | Short Film",
        images: [
            "work/images/mandala/mandala (2).png",
            "work/images/mandala/mandala (5).png",
            "work/images/mandala/mandala (3).png"
        ],
        synopsis: "After Dev finally convinces his girlfriend, Ishika, to try LSD with him in their apartment, she wakes up the next morning feeling lucky to have come out of that crazy trip. But Dev is missing, while she’s trying to distinguish between the trip and reality, she’s met with another surprise in the form of Dev’s parents’ visit."
    },
    {
        title: "Beetee | Short Film",
        videoSrc: "https://www.youtube.com/embed/LaNv2KHPJU8?si=XqWIcaWH5pjdC6pF",
        synopsis: "A couple returns home from a date. As the shadows lengthen, their romantic evening takes a nightmarish journey into the unknown."
    },
    {
        title: "Zelig | Short Film",
        videoSrc: "https://player.vimeo.com/video/857096905?h=7316afe330",
        synopsis: "Zelig's marriage hasn't worked out so far. However, one Sunday morning, her husband decides to cook for her, which only makes her suspicious of his actions."
    },
    {
        title: "Tiny Farms | Advertisement",
        videoSrc: "https://www.youtube.com/embed/5n70e5vZC4A?si=bbtCXviOr0H9owMH",
        synopsis: "Tiny Farms was founded in 2020 and has the vision of bringing the microfarming approach to society at large. The aim is to increase the proportion of bioregional vegetable production, to use land more sustainably and to give new people access to agriculture."
    },
    {
        title: "Taste of K | Music Video",
        videoSrc: "https://player.vimeo.com/video/854133291?h=1e882d842c",
        synopsis: "Ara Lil Yoon, a British/Maltese band based in Berlin's first music video, for the song Taste from their Taste EP and first album Triboulet. The music video was shot at Madame Claude."
    },
    {
        title: "Puma x WPL | Advertisement",
        videoSrc: "https://www.youtube.com/embed/ijBkxu_w7ds",
        synopsis: "Puma India's latest campaign for Women Premier League feat. Kareena Kapoor, Masaba Gupta, Vineeta Singh, Mary Kom & Faye D'souza."
    },
    {
        title: "Avalon meta | Advertisement",
        videoSrc: "https://player.vimeo.com/video/840799163",
        synopsis: "Avalon Meta is run by digital services company Avalon Labs, which was founded in 2017 by Varun Mayya, Shashank Udupa, and Abhinav Arora. The platform aims to consolidate all of the user's interactions, including courses taken, group discussions, quizzes taken into one resume for potential recruiters."
    },
    {
        title: "Bonsai Kitten: War Pigs | Music Video",
        videoSrc: "https://www.youtube.com/embed/MWtUjQxm3zE",
        synopsis: "Bonsai Kitten is a Berlin based heavy metal blues band."
    },
    {
        title: "Mister Spex | Advertisement (spec)",
        videoSrc: "https://player.vimeo.com/video/840819547",
        synopsis: "Spec advertisement for Germany's largest eyewear brand."
    },
    {
        title: "Alfaaz | hamza jehangir ft abdullah kasumbi | official music video",
        videoSrc: "https://player.vimeo.com/video/857515363",
        synopsis: "Alfaaz is a song by Hamza Jehangir and Abdullah Kasumbi. The music video was shot and produced in Berlin, Germany."
    },
    {
        title: "RCS Toys | Documentary",
        videoSrc: "https://www.youtube.com/embed/UMIxtKbXbg8",
        synopsis: "Started in 1890, Delhi's RCS toys has been run for generations. The store is a galore of display figures and model making items and has embraced change without losing sight of the past."
    },
    {
        title: "Breaking Free | Short Film",
        videoSrc: "https://player.vimeo.com/video/766804636",
        synopsis: "After a fight with his controlling uncle, Himangshu must find a way to break free, become independent and amend broken relations."
    },
    {
        title: "Mangalore Coastal Project | Documentary",
        videoSrc: "https://www.youtube.com/embed/URbHNdRF99Y",
        synopsis: "Documentary about a government initiative to restore the beaches of coastal Karnataka region."
    }
];

export default workData;

  