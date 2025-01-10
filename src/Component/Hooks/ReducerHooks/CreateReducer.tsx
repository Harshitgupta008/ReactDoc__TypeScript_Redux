
type Action = 'increment' | 'decrement' | 'reset';

const CreateReducer = (state: number, action: Action): number => {
    switch (action) {
        case "increment": return state + 1;
        case "decrement": return state - 1;
        case "reset": return 0;
        default: return state;
    }
}
export default CreateReducer;