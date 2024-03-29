import { motion } from "framer-motion"

import { Fragment } from "react"
import notFound from "../../../assets/global/no-results-found.png"
import { cn } from "../../../utils/cn"
import { convertDateFormat } from "../../../utils/convertDateFormat"
import TodoDeleteOrGoToUpdate from "./TodoDeleteOrGoToUpdate"

const EachTodoWrapper = ({ tasks, todoType }) => {
  return (
    <Fragment>
      <div className="group grid grid-cols-1 gap-2 p-8 lg:grid-cols-2 2xl:grid-cols-3 " key={todoType}>
        {todoType.length >= 0 &&
          tasks?.map((task, index) => {
            const startDate = convertDateFormat(task?.startingDate)
            const endDate = convertDateFormat(task?.endingDate)
            return (
              <motion.div
                key={task._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}>
                <div
                  className={cn("max-w-2xl rounded-lg px-4 py-2   shadow-md ", {
                    "bg-blue-600": todoType === "all",
                    "bg-green-600": todoType === "complete",
                    "bg-red-600": todoType === "incomplete",
                  })}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm font-light text-gray-200">{startDate} -</p>
                      <p className="text-sm font-light text-gray-200">{endDate}</p>
                    </div>
                    <p
                      className="transform cursor-pointer rounded bg-gray-600 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 hover:bg-gray-500"
                      tabIndex="0"
                      role="button">
                      {task.completed ? "completed" : "incomplete"}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-xl font-bold text-gray-100 group-hover:text-gray-200  ">{task?.title}</p>
                    <p className="mt-2 text-gray-200 group-hover:text-gray-300 ">{task?.description}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-gray-300">@{task?.owner?.username}</p>
                    <div>
                      <TodoDeleteOrGoToUpdate id={task._id} todoDetails={task} completed={task?.completed} />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
      </div>
      <div>
        {tasks?.length === 0 && (
          <div className="flex flex-col items-center justify-center">
            <img src={notFound} alt="not found" className="h-1/2 w-1/2" />
            <p className="text-2xl font-bold text-gray-600">No Task Found</p>
          </div>
        )}
      </div>
    </Fragment>
  )
}
export default EachTodoWrapper
