import React from "react";
import "../../css/app.css";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
}

function CustomButton({
    children,
    onClick,
    ...props
}: CustomButtonProps) {
    return (
        /* <button
            type={type}
            className={`btn custom-button ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button> */
        <button 
            type="button" 
            id="btn-1" 
            onClick={onClick} 
            className="btn btn-primary btn-lg px-4 me-md-2"
            {...props}
        >
            {children}
        </button>

    );
} 

export default CustomButton;