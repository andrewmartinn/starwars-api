const Loading = () => {
  return (
    <div className="min-h-[50vh] flex justify-center items-center">
      <svg
        width="60px"
        height="60px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#f1c246"
          strokeWidth="8"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
          transform="rotate(171.974 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
};
export default Loading;
