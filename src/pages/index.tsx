import { useTheme } from '../hooks/useTheme';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);

  return (
    <div>
      <button onClick={toggleTheme}>Aki</button>
    </div>
  );
}
