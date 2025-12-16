import Button from "../atoms/Button";

type Props = {
  onSelect: (year: number) => void;
};

export default function YearSelector({ onSelect }: Props) {
  return (
    <div className="flex gap-3">
      {[2022, 2023, 2024].map((year) => (
        <Button
          key={year}
          label={year.toString()}
          onClick={() => onSelect(year)}
        />
      ))}
    </div>
  );
}
