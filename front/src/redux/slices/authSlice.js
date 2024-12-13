import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3001/api/v1';
const initialState = {
    token: localStorage.getItem('token') || sessionStorage.getItem('token') || null,
    user: null,
    loading: false,
    error: null,
    rememberMe:false,
};

// For token
export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_URL}/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Une erreur est survenue');
        }

        const data = await response.json();
        return data.body.token;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// To get user data
export const fetchUserProfile = createAsyncThunk('auth/fetchUserProfile', async (_,{getState, rejectWithValue }) => {
    try {
        const state = getState();
        const token = state.auth.token;

        if (!token) {
            if(window.location.pathname =='/profile')
                window.location ='/login';
            return;
        }
        const response = await fetch(`${API_URL}/user/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            if(response.status === 401 && window.location.pathname == '/profile'){
                window.location = '/login';
                localStorage.removeItem('token');
                sessionStorage.removeItem('token');
            }
            const errorData = await response.json();
            throw new Error(errorData.message || 'Une erreur est survenue');
        }

        const data = await response.json();
        return data.body;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
export const updateUserProfile = createAsyncThunk(
    'auth/updateUserProfile',
    async ( newUserData, {getState, rejectWithValue }) => {
        try {
            const state = getState();
            const token = state.auth.token;
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newUserData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erreur lors de la mise à jour du profil.');
            }

            const data = await response.json();
            return data.body;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
            window.location.pathname = '/login';
        },
        setRememberMe:(state,action)=>{
            state.rememberMe = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload;
                if(state.rememberMe){
                    localStorage.setItem('token', action.payload);
                } else{
                    sessionStorage.setItem('token', action.payload);
                }
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // save user data in store
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.user = action.payload; // Met à jour les données utilisateur
            });
    },
});

export const { logout, setRememberMe } = authSlice.actions;

export default authSlice.reducer;