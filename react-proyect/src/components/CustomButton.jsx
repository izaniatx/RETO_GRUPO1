import React from "react";

function CustomButton({
    children,
    onClick,
    type = "button",
    className = "",
    disabled = false
}) {
    return (
        <button
            type={type}
            className={`btn custom-button ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
} 

export default CustomButton;