import MainPage from "../views/MainPage";
import TaskEditor from "../views/TaskEditor";

export const routes = [
	{
		path: "",
		name: "main",
		component: MainPage,
	},
	{
		path: "/taskeditor/:id",
		name: "editor",
		component: TaskEditor,
	},
];
