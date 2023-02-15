export const ScrollProgress: React.FC<{ progress: number }> = ({
  progress,
}) => {
  console.log(progress);
  const value = 200 + progress / 30;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8">
      <g>
        <path
          d="M 0 8 L 0 0 L 2 0 L 2 3 L 4 3 L 4 0 L 6 0 L 6 6 L 8 6 L 8 2 L 6 2 L 6 0 L 12 0 L 12 2 L 10 2 L 10 6 L 12 6 L 12 8 L 4 8 L 4 6 L 2 6 L 2 8 L 0 8"
          stroke="#000000"
          stroke-width="1"
          fill="none"
        />
      </g>
      <g>
        <path
          d="M 0 8 L 0 0 L 2 0 L 2 3 L 4 3 L 4 0 L 6 0 L 6 6 L 8 6 L 8 2 L 6 2 L 6 0 L 12 0 L 12 2 L 10 2 L 10 6 L 12 6 L 12 8 L 4 8 L 4 6 L 2 6 L 2 8 L 0 8"
          stroke="#ffffff"
          stroke-width="1"
          fill="none"
          strokeDasharray={`${value}`}
          strokeDashoffset="200"
        />
      </g>
    </svg>
  );
};
