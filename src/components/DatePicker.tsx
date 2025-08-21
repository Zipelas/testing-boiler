interface DatePickerProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

function DatePicker({ selectedDate, onDateChange }: DatePickerProps) {
  return (
    <div className='flex justify-center my-4'>
      <input
        type='date'
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
        className='border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#663399]'
        style={{
          backgroundColor: selectedDate ? '#663399' : 'white',
          color: selectedDate ? 'white' : 'black',
        }}
      />
    </div>
  );
}

export default DatePicker;
