import { Section } from "@/component/Section";
import { SEARCH_QUERY_KEY } from "@/const";

type Props = { searchParams: { [SEARCH_QUERY_KEY]: string | string[] | undefined } };

export default function SearchChef({ searchParams }: Props) {
  const param = searchParams[SEARCH_QUERY_KEY];

  if (!param) {
    return (
      <div className="space-y-12 py-5">
        <Section title="シェフ一覧">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((v) => {
              return (
                <div key={v}>
                  <div className="h-36 w-24 bg-amber-3"></div>
                </div>
              );
            })}
          </div>
        </Section>
      </div>
    );
  }

  const query = decodeURIComponent(param.toString());

  return (
    <div className="space-y-12 py-5">
      <Section title={`「${query}」で検索`}>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((v) => {
            return (
              <div key={v}>
                <div className="h-36 w-24 bg-amber-3"></div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
