import { TaskProps } from "../../App";
import { Task } from "../Task";
import clipboadImage from '../../assets/clipboard.svg'

interface Props {
    tasks: TaskProps[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
    const tasksCount = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;
    const isTaskListEmpty = tasks.length === 0;

    return (
        <section className="w-full max-h-custom max-w-2xl mx-auto mt-[5.625rem] py-0 px-4">
            <header className="flex justify-between items-center mb-6 text-gray-100">
                <div className=" flex items-center gap-2">
                    <strong className="text-blue text-sm font-bold">
                        Tarefas criadas
                    </strong>
                    <span className="bg-gray-400 text-gray-200 py-1 px-2 rounded-full text-xs">
                        {tasksCount}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <strong className="text-purple text-sm font-bold">
                        Concluídas
                    </strong>
                    <span className="bg-gray-400 text-gray-200 py-1 px-2 rounded-full text-xs">
                        {completedTasks} de {tasksCount}
                    </span>
                </div>
            </header>

            <div className="flex flex-col gap-3">

                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onComplete={onComplete}
                    />
                ))}

                {isTaskListEmpty && (
                    <section className="mt-16 flex flex-col items-center justify-center gap-4 
                    text-gray-300 text-center border-t border-t-gray-400 rounded-lg py-16 px-6">
                        <img src={clipboadImage} />
                        <div className="flex flex-col">
                            <strong className="font-bold">
                                Você ainda não tem tarefas cadastradas
                            </strong>
                            <span>
                                Crie tarefas e organize seus itens a fazer
                            </span>
                        </div>
                    </section>
                )}
            </div>
        </section>
    )
}