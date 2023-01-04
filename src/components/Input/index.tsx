import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { Button } from "../Button";

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Input({ onAddTask }: Props) {
    const [title, setTitle] = useState("")


    function handleSubimit (event: FormEvent) {
        event.preventDefault();

        onAddTask(title)

        setTitle("");
    }

    function onChangeTitle (event:ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <form
            className="h-13 w-full max-w-2xl flex gap-2 py-0 px-4 m-auto -mt-7"
            onSubmit={handleSubimit}
        >
            <input
                className="h-full flex-1 text-gray-100 bg-gray-500 border border-gray-700 rounded-lg
                outline-none focus-within:border-purpleDark py-0 px-4 placeholder:text-gray-300"
                type="text"
                placeholder="Adicione uma nova tarefa"
                onChange={onChangeTitle}
                value={title}
            />

            <Button
                title="Criar"
            />
        </form>
    )
}