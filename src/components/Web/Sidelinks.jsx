import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';

export default function Sidelinks(props) {
    const [isVisible, setVisible] = useState(props.expanded);

    function handleVisibility() {
        setVisible((prev) => !prev);
    }

    return (
        <>
            <div className="sidelinks">
                <p>{props.title}</p>
                {isVisible ? (
                    <ExpandLessIcon onClick={handleVisibility} style={{ cursor: "pointer" }} />
                ) : (
                    <ExpandMoreIcon onClick={handleVisibility} style={{ cursor: "pointer" }} />
                )}
            </div>
            <ul className="sidelink-content" style={{ display: isVisible ? "block" : "none" }}>
                {props.links.map((link, index) => (
                    <li key={index}>
                        <a href={link.hyper}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}
