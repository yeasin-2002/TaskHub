import { useGetAllTaskQuery } from "@redux/API/taskApiSlice/taskApiSlice";
import SearchTodoSearchArea from "./SearchTodoSearchArea";
// import ShortTodo from "./ShortTodo";
// import CountParticipants from "../../../utils/CountParticipants";

const Search = () => {
  const { data, isLoading, isSuccess } = useGetAllTaskQuery();

  let tasks = data?.data?.tasks || [];
  // const AllParticipants = CountParticipants(tasks);

  return (
    <>
      <div className=" md:p-4 flex w-full h-screen">
        {/* <ShortTodo AllParticipants={AllParticipants} /> */}
        <SearchTodoSearchArea
          tasks={tasks}
          isSuccess={isSuccess}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default Search;
