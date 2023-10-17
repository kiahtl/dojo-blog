type ToggleButtonProps = {
  options: string[];
  selected: string;
  onToggle: (selectedOption: string) => void;
};

export function ToggleButton({
  options,
  selected,
  onToggle,
}: ToggleButtonProps) {
  return (
    <div className="flex rounded-full bg-gray-300 overflow-hidden my-4">
      {options.map((option) => (
        <button
          key={option}
          className={`
              flex-1 py-3 px-6 text-sm font-medium tracking-wide transition-colors whitespace-nowrap
              ${
                option === selected
                  ? "bg-gray-800 text-white rounded-full"
                  : "text-gray-800 hover:font-semibold"
              }
            `}
          onClick={() => onToggle(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
