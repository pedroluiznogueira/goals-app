import { useState, useEffect, createContext } from 'react';
import React from 'react';

const GoalContext = createContext();

export const GoalProvider = ( {children} ) => {
    const [goals, setGoals] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const apiUrl = "http://13c5-2804-14c-59-30f6-7475-4056-1df7-7875.ngrok.io";

    useEffect(() => {
        findGoals();
    }, []);

    const findGoals = async () => {
        const response = await fetch(`${apiUrl}/goals`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        setGoals(data);
    }
    
    const deleteGoal = async (id) => {
        const response = await fetch(`${apiUrl}/goals/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        setGoals(goals.filter((goal) => id !== goal.id));
    }

    const addGoal = async (enteredGoal) => {
        const response = await fetch(`${apiUrl}/goals`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: enteredGoal})
        });

        const data = await response.json();
        setGoals((currentGoals) => [...currentGoals, data]);
        return data;
    }

    const displayModal = () => {
        setIsModalVisible(true);
    }

    const hideModal = () => {
        setIsModalVisible(false);
    }

    return(
        <GoalContext.Provider value={{
            goals: goals,
            addGoal: addGoal,
            deleteGoal: deleteGoal,
            isModalVisible: isModalVisible,
            displayModal: displayModal,
            hideModal: hideModal
        }}>
            {children}
        </GoalContext.Provider>
    );
}

export default GoalContext;