interface DateProps {
  date: Date;
}

function DateComponent({ date }: DateProps) {
  return (
    <div className='text-[#663399] text-6xl text-center'>
      {date.toLocaleDateString('sv-SE', {
        day: 'numeric',
      })}
    </div>
  );
}

export default DateComponent;
