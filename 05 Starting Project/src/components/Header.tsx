import Button from './UI/Button.tsx';
import { useTimersContext } from './UI/store/timers.context.tsx';

export default function Header() {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{timersCtx.isRunning ? 'Stop' : 'Start' } Timers</Button>
    </header>
  );
}
