import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';
import resumeService from './resumeService';

const initialState = {
  resume: {},
  isLoading: false,
  isSuccess: false,
  isFailure: false,
  message: ''
}

// Get Resume
export const getResume = createAsyncThunk('resume/getResume', async (_, thunkAPI) => {
  try {
    return await resumeService.getResume();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || (error.message) || (error.toString())
    return thunkAPI.rejectWithValue(message);
  }
});

// Update Resume
export const updateResume = createAsyncThunk('resume/updateResume', async (_, thunkAPI) => {
  try {
    return await resumeService.updateResume();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || (error.message) || (error.toString())
    return thunkAPI.rejectWithValue(message);
  }
});

// Create Experience
export const createExperience = createAsyncThunk('resume/createExperience', async (formData, thunkAPI) => {
  try {
    return await resumeService.createExperience(formData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || (error.message) || (error.toString())
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete Experience
export const deleteExperience = createAsyncThunk('resume/deleteExperience', async (id, thunkAPI) => {
  try {
    return await resumeService.deleteExperience(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || (error.message) || (error.toString())
    return thunkAPI.rejectWithValue(message);
  }
});

// Create Employment
export const createEmployment = createAsyncThunk('resume/createEmployment', async (formData, thunkAPI) => {
  try {
    return await resumeService.createEmployment(formData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || (error.message) || (error.toString())
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete Employment
export const deleteEmployment = createAsyncThunk('resume/deleteEmployment', async (id, thunkAPI) => {
  try {
    return await resumeService.deleteEmployment(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || (error.message) || (error.toString())
    return thunkAPI.rejectWithValue(message);
  }
});

// Create Education
export const createEducation = createAsyncThunk('resume/createEducation', async (formData, thunkAPI) => {
  try {
    return await resumeService.createEducation(formData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || (error.message) || (error.toString())
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete Education
export const deleteEducation = createAsyncThunk('resume/deleteEducation', async (id, thunkAPI) => {
  try {
    return await resumeService.deleteEducation(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || (error.message) || (error.toString())
    return thunkAPI.rejectWithValue(message);
  }
});



export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
      state.resume = {}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getResume.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getResume.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.resume = action.payload.resume;
        state.message = action.payload.message;
      })
      .addCase(getResume.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateResume.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateResume.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.resume = action.payload.resume;
        state.message = action.payload.message;
      })
      .addCase(updateResume.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createEmployment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEmployment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.resume = action.payload.resume;
        state.message = action.payload.message;
      })
      .addCase(createEmployment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createExperience.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.resume = action.payload.resume;
        state.message = action.payload.message;
      })
      .addCase(createExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createEducation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEducation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.resume = action.payload.resume;
        state.message = action.payload.message;
      })
      .addCase(createEducation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteEmployment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEmployment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.resume = action.payload.resume;
        state.message = action.payload.message;
      })
      .addCase(deleteEmployment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteEducation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEducation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.resume = action.payload.resume;
        state.message = action.payload.message;
      })
      .addCase(deleteEducation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteExperience.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.resume = action.payload.resume;
        state.message = action.payload.message;
      })
      .addCase(deleteExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
});

export const { reset } = resumeSlice.actions;
export default resumeSlice.reducer;