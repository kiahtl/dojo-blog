type HeaderProps = {
  heading: string;
  subheading: string;
};

export function Header({ heading, subheading }: HeaderProps) {
  return (
    <>
      <header className="flex flex-col items-center justify-center w-full py-8">
        <h1 className="text-4xl mb-6 font-bold">{heading}</h1>
        <h3 className="text-4xs mb-6 text-gray-700 text-center">
          {subheading}
        </h3>
      </header>
    </>
  );
}
