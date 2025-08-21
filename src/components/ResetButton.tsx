interface ResetButtonProps {
  onReset: () => void;
}

function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <div className='flex justify-center my-4'>
      <button
        onClick={onReset}
        className='px-4 py-2 rounded-2xl bg-[#663399] text-white shadow-md hover:opacity-80 transition'>
        Återställ
      </button>
    </div>
  );
}

export default ResetButton;
