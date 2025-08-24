interface MonthProps {
  date: Date;
}

function MonthComponent({ date }: MonthProps) {
  return (
    <div className='text-[#663399] text-4xl text-center'>
      {getMonthName(date)}
    </div>
  );
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
