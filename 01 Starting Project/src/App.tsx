import Header from "./assets/components/Header.tsx";
import NewGoal from "./assets/components/NewGoal.tsx";
import goalsimg from "./assets/goalsimg.jpg";
import CourseGoalList from "./assets/components/CourseGoalList.tsx";
import { useState } from "react";


export type CourseGoal = {
  id: number;
  title: string;
  description: string;
}


export default function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals(prevGoals => {

      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      }
      return [...prevGoals, newGoal]
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }


  return (
  <main>
    <Header image={{src: goalsimg, alt: "A list of goals"}}>
      <h1> Your course goals</h1>
    </Header>
    <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}></CourseGoalList>
  </main>
  );
}
