export function Button({ onClick, children, className = "" }) {
    return (
      <button className={`px-4 py-2 bg-blue-600 text-white rounded-lg ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }
  