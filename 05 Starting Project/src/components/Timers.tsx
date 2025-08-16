import { useTimersContext } from "./UI/store/timers.context";
import Timer from './Timer'

export default function Timers() {

  const { timers } = useTimersContext()
  return <ul>
    {timers.map(timer => <li>{timer.name}
      <Timer {...timer}/>
    </li>)}
  </ul>;
}
