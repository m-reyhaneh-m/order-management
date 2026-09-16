import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return Array.from({ length: 30 }, (_, index) => (
    <div key={index} className="col-2 m-1 py-2">
      <Skeleton height={15} width="100%" className="mx-auto my-0" />
      <Skeleton height={15} width="100%" className="mx-auto my-0" />
      <Skeleton height={15} width="100%" className="mx-auto my-0" />
      <Skeleton height={15} width="100%" className="mx-auto my-0" />
      <Skeleton height={15} width="100%" className="mx-auto my-0" />
    </div>
  ));
}
