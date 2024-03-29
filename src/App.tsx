import React, { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';
import reminderService from './services/reminder';
import NewReminder from './components/NewReminder';

function App() {
    const [reminders, setReminders] = useState<Reminder[]>([]);

    const loadReminders = async () => {
        const reminders = await reminderService.getReminders();
        setReminders(reminders);
    };

    useEffect(() => {
        loadReminders();
    }, []);

    const removeReminder = (id: number) => {
        setReminders(reminders.filter((reminder) => reminder.id !== id));
    };

    const addReminder = async (title: string) => {
        const newR = await reminderService.addReminder(title);
        setReminders([newR, ...reminders]);
    };

    return (
        <div className="App">
            <NewReminder onAddReminder={addReminder} />
            <ReminderList items={reminders} onRemoveReminder={removeReminder} />
        </div>
    );
}

export default App;
