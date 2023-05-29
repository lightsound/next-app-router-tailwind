type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

type BaseProps = { center: React.ReactNode; left: React.ReactNode; right: React.ReactNode };

type Props = { children: React.ReactNode } & AtLeastOne<BaseProps>;

export function TopBar({ children, center, left, right }: Props) {
  return (
    <div>
      <div className="border-mauve-dim relative flex h-12 justify-between border-b p-3">
        <div>{left}</div>
        {center ? (
          <div className="absolute inset-0 grid place-items-center font-bold">{center}</div>
        ) : null}
        <div>{right}</div>
      </div>

      {children}
    </div>
  );
}
