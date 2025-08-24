interface DayProps {
  date: Date;
}

function DayComponent({ date }: DayProps) {
  return (
    <div className='text-[#663399] text-4xl text-center'>
      {getDayName(date)}
    </div>
  );
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
