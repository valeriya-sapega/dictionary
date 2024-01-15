import './Skeleton.css';

const Skeleton = ({ times }) => {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return <div className="skeleton" key={i}></div>;
    });

  return boxes;
};
export default Skeleton;
