import '../../global.css';

const ascii = [
    "     _________",
    "    / ======= \\                          __",
    "   / __________\\      ___  ___  _______ / /",
    "  | ___________ |    / _ \\/ _ `/ __/ -_) _ \\",
    "  | | -       | |   /_//_/\\_,_/_/  \\__/_//_/",
    "  | |         | |",
    "  | |_________| |______________________________",
    "  \\=____________/                              )",
    "  / \"\"\"\"\"\"\"\"\"\"\" \\                             /",
    " / ::::::::::::: \\                        =D-'",
    "(_________________)",
].join('\n');

export const Banner = () => {
    return (
        <div className="command">
            <div>
                Beginning boot sequence...
            </div>
            <pre>
                {ascii}
            </pre>
            <div>
                Run <span style={{ color:"#76946A",  textDecoration:"underline", fontWeight: "bolder" }}>help</span> to get started.
            </div>
        </div>
    );
};
