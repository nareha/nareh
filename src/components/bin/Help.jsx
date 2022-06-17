import '../../global.css';

export const Help = () => {
    return (
        <pre style={{ margin:"20px" }}>
            <span className="cmd">about</span>      Learn about Nareh <br/>
            <span className="cmd">banner</span>     Display the welcome banner <br/>
            <span className="cmd">clear</span>      Clear terminal <br/>
            <span className="cmd">funfact</span>    Fun facts about Nareh <br/>
            <span className="cmd">help</span>       How did you get here? <br/>
            <span className="cmd">ping</span>       pong! <br/>
            <span className="cmd">repo</span>       Link to this site's repo <br/>
        </pre>
    );
};
