import { Check, Trash } from 'phosphor-react'
import { TaskProps } from '../../App'

interface Props {
    task: TaskProps;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
    return (
        <div className="w-full bg-gray-500 border border-gray-400 p-4 rounded-lg flex items-center 
        justify-between gap-3">
            <button
                className="min-w-[1.125rem] h-5 bg-none border-none"
                onClick={() => onComplete(task.id)}
            >
                {task.isCompleted ?
                    <Check
                        className='border border-purple rounded-full bg-purpleDark'
                        color='#F2F2F2'
                        size={18}
                    /> :
                    <div className=" w-full h-full border border-blue rounded-full" />
                }

            </button>

            <div className="text-sm leading-5 text-gray-100 mr-auto">
                {task.isCompleted ? <s>{task.title}</s> : <p>{task.title}</p>}
            </div>

            <button
                className="bg-none border-none text-gray-300"
                onClick={() => onDelete(task.id)}
            >
                <Trash width={20} height={20} />
            </button>
        </div>
    )
}