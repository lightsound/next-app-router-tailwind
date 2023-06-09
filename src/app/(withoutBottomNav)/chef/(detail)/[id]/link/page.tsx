import Link from "next/link";

export default function ChefLink({}: { params: { id: string } }) {
  const items = [
    {
      type: "sns",
      href: "https://www.instagram.com/",
      name: "Instagram",
      account: "shimabu_it",
      follower: 1234,
    },
    {
      type: "sns",
      href: "https://www.twitter.com/",
      name: "Twitter",
      account: "shimabu_it",
      follower: 1234,
    },
    {
      type: "sns",
      href: "https://www.youtube.com/",
      name: "YouTube",
      account: "shimabu_it",
      follower: 1234,
    },
    {
      type: "custom",
      href: "https://example.com/",
      name: "ほげほげ",
    },
  ] as const;

  return (
    <div>
      {items.map((item) => {
        return (
          <Link
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-mauve-dim flex items-center gap-x-4 border-b p-4"
          >
            <div className="h-12 w-12 bg-tomato-3"></div>
            <div>
              <div>{item.name}</div>
              <div className="text-mauve-dim text-sm">
                {item.type === "sns" ? (
                  <div>
                    {item.follower.toLocaleString()}フォロワー・{item.account}
                  </div>
                ) : (
                  <div>{item.href}</div>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
