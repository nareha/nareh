import { FC } from 'react';
import '../styles/global.css';

const ascii = [
"     _________",
"    / ======= \\                          __",
"   / __________\\      ___  ___ ________ / /",
"  | ___________ |    / _ \\/ _ `/ __/ -_) _ \\",
"  | | -       | |   /_//_/\\_,_/_/  \\__/_//_/",
"  | |         | |",
"  | |_________| |______________________________",
"  \\=____________/                              )",
"  / \"\"\"\"\"\"\"\"\"\"\" \\                             /",
" / ::::::::::::: \\                        =D-'",
"(_________________)",
].join('\n');

export const Banner: FC = () => {
    return (
        <div>
            <div className="banner">
                Beginning boot sequence...
            </div>
            <pre>
                {ascii}
            </pre>
            <div className="banner">
                Run <span style={{ color:"#76946A",  textDecoration:"underline", fontWeight: "bolder" }}>help</span> to get started.
            </div>
        </div>
    );
};
