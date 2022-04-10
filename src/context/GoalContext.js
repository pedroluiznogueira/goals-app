import { useState, createContext } from 'react';
import React from 'react';

const GoalContext = createContext();

export const GoalProvider = ( {children} ) => {
    const [goals, setGoals] = useState([]);

    const deleteGoal = (selectedGoal) => {
        setGoals(goals.filter((goal) => selectedGoal.key !== goal.key));
    }

    const addGoal = (enteredGoal) => {
        setGoals((currentGoals) => [
            ...currentGoals,
            { text: enteredGoal, key: Math.random().toString() }
        ]);
    }

    return(
        <GoalContext.Provider value={{
            goals: goals,
            addGoal: addGoal,
            deleteGoal: deleteGoal
        }}>
            {children}
        </GoalContext.Provider>
    );
}

export default GoalContext;