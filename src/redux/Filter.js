import { createSlice } from "@reduxjs/toolkit";
import { getbookingCars } from "../firebase/FirebaseInit"
const initialCars = await getbookingCars();
export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        carData: initialCars,
        filteredData: initialCars,
        searchWord: ""
    },
    reducers: {
        filter: (state, action) => {
            state.searchWord = action.payload;
            if (state.searchWord != "") {
                console.log(action.payload)
                state.filteredData = state.carData.filter((car) => car.carName.toLowerCase().startsWith(action.payload.toLowerCase()))
            } else
                state.filteredData = state.carData;
        }
    }
});
export const { filter } = filterSlice.actions;

export default filterSlice.reducer;
