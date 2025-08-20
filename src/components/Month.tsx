interface MonthProps {
  date: Date;
}

function MonthComponent({ date }: MonthProps) {
  return <span>{getMonthName(date)}</span>;
}

function getMonthName(date: Date): string {
  const months = [
    'Januari',
    'Februari',
    'Mars',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'Augusti',
    'September',
    'Oktober',
    'November',
    'December',
  ];
  return months[date.getMonth()];
}

export default MonthComponent;
