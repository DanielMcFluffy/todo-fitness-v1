import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'; //import uuid because assigning date.now() for the workout split todos will cause redux to treat them as duplicates

const todosSlice = createSlice({
  name: 'todos',
  initialState: [], //todos[i] = {id, title, description, completed}
  reducers: {

    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => (
        todo.id !== action.payload.id
      ))
    },
    updateTodo: (state, action) => {
      const { id, title, description, completed, time } = action.payload;
      const todoToUpdate = state.find((todo) => todo.id === id);

      console.log(action.payload);
      if (todoToUpdate) {
        todoToUpdate.title = title;
        todoToUpdate.description = description;
        todoToUpdate.completed = completed;
        todoToUpdate.time = time
      }
    },
    // add a todo individually => assign date.now() 1 item at one item

    //button

    //data(1)
    //data(1)
    //data(1)

    // mutate the original state
    // make a copy => mutate that copy
    upperLowerSplitDay1: (state) => {
      state.splice(0, state.length);
      state.push(
        {
          id: uuidv4(),
          title: 'Bench Press',
          description: `
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 8
        },
        {
          id: uuidv4(),
          title: 'Deadlift',
          description:
            `- Go heavy
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 7
        },
        {
          id: uuidv4(),
          title: 'Pull Ups',
          description: `
          - 8-12 repetitions
          - 3 sets`,
          completed: false,
          time: 8
        },
        {
          id: uuidv4(),
          title: 'Shoulder Press (Machine)',
          description:
            `- Full range of motion
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 7
        },
        {
          id: uuidv4(),
          title: 'Kettlebell Swings',
          description:
            `- Maintain tension
          - 10-12 repetitions
          - 3 sets
          `,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Incline Bench Press',
          description:
            `- Prioritize form/range of motion
            - Slow tempo
          - 10-12 repetitions
          - 3 sets
          `,
          completed: false,
          time: 8
        },
      );
    },
    upperLowerSplitDay2: (state) => {
      state.splice(0, state.length);
      state.push(
        {
          id: uuidv4(),
          title: 'Seated Leg Curl',
          description:
            `- Start slow, pad needs to touch
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Seated/Standing Calve Raises',
          description:
            `- High Volume
          - 12-15 Repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Seated Hamstring Curl',
          description:
            `- Full range of motion
          - 8 repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Barbell Squat',
          description:
            `- Aim for failure
          - 6-8 repetitions
          - 3 sets`,
          completed: false,
          time: 15
        },
        {
          id: uuidv4(),
          title: 'Bulgarian Split Squat',
          description:
            `- Full range of motion
          - 8-10 repetitions
          -3 sets
          `,
          completed: false,
          time: 15
        },
        {
          id: uuidv4(),
          title: 'HIIT Cardio',
          description:
            `- Any form of High Intensity Cardio
          - 15 seconds burst, 20 seconds slower speed
          - Repeat for 6 times
          - Rest for 20 seconds
          `,
          completed: false,
          time: 5
        }
      );
    },
    arnoldSplitDay1: (state) => {
      state.splice(0, state.length);
      state.push(
        {
          id: uuidv4(),
          title: 'Bench Press',
          description:
            `- Can be dumbbell or barbell
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 8
        },
        {
          id: uuidv4(),
          title: 'Dumbbell Rows',
          description:
            `- Tuck in elbow to avoid injury
            -Slow tempo
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 8
        },
        {
          id: uuidv4(),
          title: 'Incline Dumbbell Bench Press',
          description: `
          - 8-12 repetitions
          - 3 sets`,
          completed: false,
          time: 8
        },
        {
          id: uuidv4(),
          title: 'Lat Pulldown',
          description:
            `- Full range of motion
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Cable Chest Fly',
          description:
            `- Maintain tension
          - 10-12 repetitions
          - 3 sets
          `,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Rows (Machine)',
          description:
            `- Prioritize form/range of motion
            - Slow tempo
          - 10-12 repetitions
          - 3 sets
          `,
          completed: false,
          time: 6
        },
      );
    },
    arnoldSplitDay2: (state) => {
      state.splice(0, state.length);
      state.push(
        {
          id: uuidv4(),
          title: 'Dumbbell Hammer Curl',
          description:
            `- Full range of motion
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 8
        },
        {
          id: uuidv4(),
          title: 'Dumbbell Lateral Raise',
          description:
            `- Hold for 1 second at the top
            - Keep tension
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Cable Bicep Curl',
          description: `
          - Elbows in place
          - 8-12 repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Cable Face Pull',
          description:
            `- Full range of motion
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Preacher Curl',
          description:
            `- Maintain tension
            - Reach failure
          - 8-10 repetitions
          - 3 sets
          `,
          completed: false,
          time: 10
        },
        {
          id: uuidv4(),
          title: 'Shoulder Press',
          description:
            `- Prioritize form/range of motion
            - Slow tempo
          - 10-12 repetitions
          - 3 sets
          `,
          completed: false,
          time: 10
        },
      );
    },
    arnoldSplitDay3: (state) => {
      state.splice(0, state.length);
      state.push(
        {
          id: uuidv4(),
          title: 'Skullcrusher',
          description:
            `- Full range of motion
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 8
        },
        {
          id: uuidv4(),
          title: 'Deadift',
          description:
            `- Hold for 1 second at the top
            - Keep tension
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Tricep Pushdown',
          description: `
          - Elbows in place
          - 8-12 repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Bench Press',
          description:
            `- Full range of motion
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Tricep Preacher Curl',
          description:
            `- Maintain tension
            - Reach failure
          - 8-10 repetitions
          - 3 sets
          `,
          completed: false,
          time: 10
        },
        {
          id: uuidv4(),
          title: 'Cardio (Any Form)',
          description:
            `- Cool down
          `,
          completed: false,
          time: 20
        },
      );
    },
    arnoldSplitDay4: (state) => {
      state.splice(0, state.length);
      state.push(
        {
          id: uuidv4(),
          title: 'Seated Leg Curl',
          description:
            `- Start slow, pad needs to touch
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Seated/Standing Calve Raises',
          description:
            `- High Volume
          - 12-15 Repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Seated Hamstring Curl',
          description:
            `- Full range of motion
          - 8 repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Barbell Squat',
          description:
            `- Aim for failure
          - 6-8 repetitions
          - 3 sets`,
          completed: false,
          time: 15
        },
        {
          id: uuidv4(),
          title: 'Bulgarian Split Squat',
          description:
            `- Full range of motion
          - 8-10 repetitions
          -3 sets
          `,
          completed: false,
          time: 15
        }
      );
    },
    pushPullLegDay1: (state) => {
      state.splice(0, state.length);
      state.push(
        {
          id: uuidv4(),
          title: 'Bench Press',
          description:
            `- Can be dumbbell or barbell
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 8
        },
        {
          id: uuidv4(),
          title: 'Skullcrusher',
          description:
            `- Tuck in elbow to avoid injury
            - Slow tempo
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 8
        },
        {
          id: uuidv4(),
          title: 'Shoulder Press (Machine)',
          description:
            `- Slow Tempo
          - 8-12 repetitions
          - 3 sets`,
          completed: false,
          time: 8
        },
        {
          id: uuidv4(),
          title: 'Chest Fly (Cable)',
          description:
            `- Full range of motion
            - Slow tempo
          - 8-12 repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Dumbbell Lateral Raise',
          description:
            `- Make sure dumbbell doesn't go below waist (keep tension)
            - Tilt body forwards a bit
          - 10-12 repetitions
          - 3 sets
          `,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Cable Tricep Pushdown',
          description:
            `- Prioritize form/range of motion
            - Slow tempo
          - 10-12 repetitions
          - 3 sets
          `,
          completed: false,
          time: 6
        },
      );
    },
    pushPullLegDay2: (state) => {
      state.splice(0, state.length);
      state.push(
        {
          id: uuidv4(),
          title: 'Pull Ups',
          description:
            `- Can be assisted or non-assisted
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Lat Pulldown',
          description:
            `- Full range of motion
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Cable Bicep Curl',
          description:
            `- Use a straight bar attatchment for more muscle activation
            - Bend body slightly forward, fix elbow position
          - 6-8 repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Face Pull',
          description:
            `- Full range of motion
            - Reach behind the ears
          - 12-14 repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Rows (Machine)',
          description:
            `- Full range of motion
            - Pull until near chest
          - 10-12 repetitions
          - 3 sets
          `,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Shoulder Shrug (Smith Machine)',
          description:
            `- Prioritize form/range of motion
            - Slow tempo
          - 10-12 repetitions
          - 3 sets
          `,
          completed: false,
          time: 6
        },
      );
    },
    pushPullLegDay3: (state) => {
      state.splice(0, state.length); // Clear existing todos
      state.push(
        {
          id: uuidv4(),
          title: 'Seated Leg Curl',
          description:
            `- Start slow, pad needs to touch
          - 8-12 Repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Seated/Standing Calve Raises',
          description:
            `- High Volume
          - 12-15 Repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Seated Hamstring Curl',
          description:
            `- Full range of motion
          - 8 repetitions
          - 3 sets`,
          completed: false,
          time: 6
        },
        {
          id: uuidv4(),
          title: 'Barbell Squat',
          description:
            `- Aim for failure
          - 6-8 repetitions
          - 3 sets`,
          completed: false,
          time: 15
        },
        {
          id: uuidv4(),
          title: 'Bulgarian Split Squat',
          description:
            `- Full range of motion
          - 8-10 repetitions
          -3 sets
          `,
          completed: false,
          time: 15
        }
      );
    },
    customWorkout: (state) => {
      state.splice(0, state.length); // Clear existing todos
    }
  }
});

export default todosSlice.reducer;

export const { addTodo, deleteTodo, updateTodo, upperLowerSplitDay1, upperLowerSplitDay2, arnoldSplitDay1, arnoldSplitDay2, arnoldSplitDay3, arnoldSplitDay4, pushPullLegDay1, pushPullLegDay2, pushPullLegDay3, customWorkout } = todosSlice.actions;