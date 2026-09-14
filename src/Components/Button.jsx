
const Button = ({ children, onClick, className = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`group mt-8 inline-flex items-center gap-4 rounded-full bg-black px-7 py-3.5 text-xs font-semibold uppercase tracking-[2px] text-white hover:text-black border-2 transition duration-300 hover:bg-white cursor-pointer ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
