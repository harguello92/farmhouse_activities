
interface Props {
  type: "submit" | "reset" | "button" | null | undefined;
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


const Button = ({ type, children, onClick }: Props) => (
  <button type={type || "button"} onClick={onClick}>
    {children}
  </button>
);

export default Button;

/*

<style>
  button {
    background: #000;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
  }
</style>

*/
