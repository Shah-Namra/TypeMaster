interface KeyCellProps {
    keyChar: string;
    count: number;
    getHeatColor: (count: number) => string;
  }
  
  export function KeyCell({ keyChar, count, getHeatColor }: KeyCellProps) {
    return (
      <div
        className="aspect-square rounded flex items-center justify-center text-xs"
        style={{ backgroundColor: getHeatColor(count) }}
      >
        {keyChar}
      </div>
    );
  }