const initialState = {
    isAuthenticated: false,
    token: '',
    role:'',
}
const authSlice = createSlice({
    name:'auth',
})