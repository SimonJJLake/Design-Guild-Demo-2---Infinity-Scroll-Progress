export const InfinityScrollProgress: React.FC<{ progress: number }> = ({
  progress,
}) => {
  const value = 200 + progress / 30;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 14 8">
      <g>
        <path
          d="M 6 3 C 6 3 7 6 9 6 C 11 6 12 5 12 3 C 12 1 11 0 9 0 C 7 0 6 3 6 3 C 6 3 5 6 3 6 C 1 6 0 5 0 3 C 0 1 1 0 3 0 C 5 0 6 3 6 3"
          stroke="#000000"
          stroke-width="1"
          fill="none"
        />
      </g>
      <g>
        <path
          d="M 6 3 C 6 3 7 6 9 6 C 11 6 12 5 12 3 C 12 1 11 0 9 0 C 7 0 6 3 6 3 C 6 3 5 6 3 6 C 1 6 0 5 0 3 C 0 1 1 0 3 0 C 5 0 6 3 6 3"
          stroke="#ffffff"
          stroke-width="1"
          fill="none"
          strokeDasharray={`${value}`}
          strokeDashoffset="200"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
