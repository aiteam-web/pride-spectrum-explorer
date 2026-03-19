import { cn } from "@/lib/utils";

interface OptionButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  accentColor?: string;
}

const OptionButton = ({ label, selected, onClick, accentColor = "pride-purple" }: OptionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full py-3.5 px-5 rounded-2xl text-left font-medium transition-all duration-300 border",
        selected
          ? `bg-${accentColor}/20 border-${accentColor}/40 text-foreground`
          : "bg-card border-transparent text-foreground hover:border-border"
      )}
    >
      {label}
    </button>
  );
};

export default OptionButton;
