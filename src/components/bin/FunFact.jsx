const facts = [
    "currently, my favorite color scheme is kanagawa and my favorite font is jetbrains mono.",
    "while i enjoy using jetbrains IDEs, neovim is my current favorite code editor.",
    "my favorite video game is oldschool runescape. runner-up is minecraft.",
    "the last book i finished was carmilla. i'm currently reading atomic habits.",
    "i prefer 2 spaces for tabs over 4 spaces.",
    "my favorite classes so far at ucla have been introductory sociology (SOCIOL 1), algorithms and complexity (COM SCI 180), data management systems (COM SCI 143), and computer network fundamentals (COM SCI 118).",
    "LaTeX is the superior note-taking system.",
    "i enjoy mechanical keyboards, but i'm not very skilled in building them.",
];

export const FunFact = () => {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    return (
        <div>
            {fact}
        </div>
    );
};
