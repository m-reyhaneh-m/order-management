import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return Array.from({ length: 30 }, (_, index) => (
    <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="bg-white rounded-4 p-4 shadow-sm">
        <Skeleton height={22} className="mb-3" />
        <Skeleton height={16} className="mb-2" />
        <Skeleton height={16} className="mb-2" />
        <Skeleton height={16} className="mb-2" />
        <Skeleton height={16} className="mb-3" />
        <Skeleton height={38} />
      </div>
    </div>
  ));
}
