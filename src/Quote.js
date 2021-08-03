const quotes = [
    {
        author: "Jim Highsmith",
        quote: "The best way to get a project done faster is to start sooner.",
    },
    {
        author: "Fred Brooks",
        quote: "Even the best planning is not so omniscient as to get it right the first time.",
    },
    {
        author: "Fred Brooks",
        quote: "How does a project get to be a year late?... One day at a time. ",
    },
    {
        author: "Unknown",
        quote: "Every good work of software starts by scratching a developer's personal itch.",
    },
    {
        author: "Steve McConnell",
        quote: " It's OK to figure out murder mysteries, but you shouldn't need to figure out code. You should be able to read it.",
    },
];

const Quote = ({ id, setID }) => {
    return (
        <section id="quote-box">
            <h2 id="text">{quotes[id].quote}</h2>
            <h3 id="author">{quotes[id].author}</h3>
            <button
                onClick={() => setID(Math.floor(Math.random() * 5))}
                id="new-quote"
            >
                Next Quote
            </button>
            <a
                href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quotes[id].quote}" --- ${quotes[id].author}`}
                target="_blank"
                rel="noreferrer"
                id="tweet-quote"
            >
                Tweet Me!
            </a>
        </section>
    );
};

export default Quote;
