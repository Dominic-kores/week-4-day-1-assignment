import { Children } from "react";

const AlertBox = ({
    type = "success",
    message,
    children,

}) => {
    return (
        <div className= {`alert-box alert - ${type}`}>
            <strong>{message}</strong>

            {children && (
                <div className="alert-content">
                    {children}
                </div>
                
            )}

        </div>
    );
};

export default AlertBox;