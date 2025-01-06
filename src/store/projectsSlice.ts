import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
    title: string;
    description: string;
    link: string;
}

const initialState: Project[] = [];

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action: PayloadAction<Project>) => {
            state.push(action.payload);
        },
    },
});

export const { addProject } = projectsSlice.actions;
export default projectsSlice.reducer;
