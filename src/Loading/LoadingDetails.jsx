import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingDetails() {
  return (
    <div className="container mt-4">
      <Skeleton height={35} width={200} className="mb-4" />
      <div className="card p-4">
        <Skeleton height={20} width="40%" className="mb-3" />

        <Skeleton height={20} width="50%" className="mb-3" />

        <Skeleton height={20} width="45%" className="mb-3" />

        <Skeleton height={20} width="35%" className="mb-3" />

        <Skeleton height={20} width="40%" />
      </div>
    </div>
  );
}
