import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchAll } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAll.pending, (state) => {
            state.loading = true
            state.error = null
        })
            .addCase(fetchAll.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchAll.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })


            .addCase(addContact.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false
                state.items.push(action.payload)
            })
            .addCase(addContact.rejected, (state, action) => {
                state.error = action.error.message
                state.loading = false
            })


            .addCase(deleteContact.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false
                state.items = state.items.filter(item => item.id !== action.payload)
            })
    }
})

export default contactsSlice.reducer

export const selectContacts = (state) => state.contacts.items

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, nameFilter) => contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()))

)

export const selectLoading = (state) => state.contacts.loading
export const selectError = (state) => state.contacts.error
