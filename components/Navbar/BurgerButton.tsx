interface BurgerButtonProps {
  active: boolean;
  click: () => void;
}

const BurgerButton = ({ active, click }: BurgerButtonProps) => {
  return (
    <button className="relative w-[48px] h-[28px]" onClick={click}>
      <span className="absolute rounded top-0 left-0 w-[48px] h-[4px] bg-white"></span>
      <span className="absolute rounded top-3 left-0 w-[48px] h-[4px] bg-white"></span>
      <span className="absolute rounded bottom-0 left-0 w-[48px] h-[4px] bg-white"></span>
    </button>
  );
};

export default BurgerButton;
