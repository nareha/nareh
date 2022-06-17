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
    " / ::::::::::::: \\                 v1.0.0 =D-'",
    "(_________________)",
].join('\n');

export const Banner = () => {
    return (
        <div>
            <div>
                Beginning boot sequence...
            </div>
            <pre style={{ color:"#76946A" }}>
                {ascii}
            </pre>
            <div>
                <p style={{ marginBottom:"0px" }}>
                    Welcome to my terminal.
                </p>
                <p style={{ marginBottom:"5px", marginTop:"0px" }}>
                    Run <span className="cmd">help</span> to get a list of available commands.
                </p>
            </div>
        </div>
    );
};
