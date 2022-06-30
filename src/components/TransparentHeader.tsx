import WhiteMenu from "./WhiteMenu";
import "../styles/transparentHeader.scss";
import { ReactComponent as Logo } from "../assets/img/Logo-gustavo-2.svg";

const TransparentHeader = () => {
    return (
        <header className="transparent-header-element">
            <div>
                <Logo className="transparent-header-logo" />
                <WhiteMenu/>
            </div>
        </header>
    );
}

export default TransparentHeader;