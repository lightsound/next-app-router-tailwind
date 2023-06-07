import { cn } from "tailwind-variants";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

type BaseProps = { center: React.ReactNode; left: React.ReactNode; right: React.ReactNode };

type Props = {
  children: React.ReactNode;
  alignLeft?: boolean;
} & AtLeastOne<BaseProps>;

export function TopBar({ children, alignLeft, center, left, right }: Props) {
  return (
    <div>
      <div
        className={cn(
          "border-mauve-dim relative flex h-12 items-center border-b",
          alignLeft ? null : "justify-between"
        )()}
      >
        <div>{left}</div>

        {center ? (
          <div className={cn("inset-x-0 w-fit font-bold", alignLeft ? null : "absolute mx-auto")()}>
            {center}
          </div>
        ) : null}

        <div>{right}</div>
      </div>

      {children}
    </div>
  );
}
