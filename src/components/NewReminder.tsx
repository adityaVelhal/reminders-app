import React, { useState } from 'react';

interface NewReminderProps {
    onAddReminder: (title: string) => void
}

function NewReminder({onAddReminder}: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState('');

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault()
        if(!title) return
        onAddReminder(title)
        setTitle('')
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title">Title</label>
            <input value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" type="text" name="" id="title" />
            <button className="btn btn-primary my-3">Add Reminder</button>
        </form>
    );
}

export default NewReminder;
