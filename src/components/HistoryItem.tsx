import Link from "next/link";
import { DialogIcon } from ".";
import { HistoryItem } from "@/interfaces";
import { useMenuStore } from "@/store";
interface Props {
  historyItem: HistoryItem;
}

export function HistoryItem({ historyItem }: Props) {
  const { id, querys } = historyItem;
  const setMenuActive = useMenuStore((state) => state.setMenuActive);

  return (
    <Link
      href={`/home/query/${id}`}
      key={id}
      className="flex gap-4 items-center py-3 px-4 text-white"
      onClick={() => setMenuActive(false)}
    >
      <span className="flex-shrink-0">
        <DialogIcon />
      </span>
      <span
        className="block"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {querys[0]}
      </span>
    </Link>
  );
}
