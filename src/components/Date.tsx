interface DateProps {
  date: Date;
}

function DateComponent({ date }: DateProps) {
  return <span>{getDateName(date)}</span>;
}

function getDateName(date: Date): string {
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

export default DateComponent;
