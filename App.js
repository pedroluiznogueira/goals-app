import GoalsApp from './src/components/GoalsApp';
import { GoalProvider } from './src/context/GoalContext';

export default function App() {

  return (
    <GoalProvider>
      <GoalsApp />
    </GoalProvider>
  );
}