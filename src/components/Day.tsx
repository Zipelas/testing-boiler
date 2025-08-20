interface DayProps {
  date: Date;
}

function DayComponent({ date }: DayProps) {
  return <span>{getDayName(date)}</span>;
}

function getDayName(date: Date): string {
  const days = [
    'Söndag',
    'Måndag',
    'Tisdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lördag',
  ];
  return days[date.getDay()];
}

export default DayComponent;
