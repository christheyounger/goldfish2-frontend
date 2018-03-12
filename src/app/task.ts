export interface Task {
	id: number;
	completed: boolean;
	title: string;
	description: string;
	time: number;
	due: Date;
}