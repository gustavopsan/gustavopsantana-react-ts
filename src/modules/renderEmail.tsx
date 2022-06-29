import { renderEmail } from "react-html-email";
import { ContactMailTemplate } from "../templates/Mail";

export const renderContactEmail = ( name: string, email: string, message: string) => {
    return renderEmail(<ContactMailTemplate name={name} email={email} message={message} />);
}