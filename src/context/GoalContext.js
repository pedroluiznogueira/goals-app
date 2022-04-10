import { useState, createContext } from 'react';
import React from 'react';

const GoalContext = createContext();

export const GoalProvider = ( {children} ) => {
    const [goals, setGoals] = useState([]);

    const deleteGoal = (selectedGoal) => {
        setGoals(goals.filter((goal) => selectedGoal.key !== goal.key));
    }

    const addGoal = async (enteredGoal) => {
        const response = await fetch('http://b2bf-2804-14c-59-30f6-7475-4056-1df7-7875.ngrok.io/goals', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: enteredGoal})
        });

        const data = await response.json();
        setGoals((currentGoals) => [
            ...currentGoals,
            { text: enteredGoal, key: Math.random().toString() }
        ]);
        console.log(data);
        return data;
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