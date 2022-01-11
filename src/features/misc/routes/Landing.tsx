import { useNavigate } from "react-router";

export const Landing = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/app");
  };

  return (
    <>
      <article>V-temp Vite x Vitest Template</article>
      <button onClick={handleStart}>Let's start here</button>
    </>
  );
};
