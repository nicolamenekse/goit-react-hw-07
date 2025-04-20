import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from 'axios'

axios.defaults.baseURL= "https://68051329ca467c15be682e1c.mockapi.io"

export const fetchAll = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts")
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
    try {
        const response = await axios.post("/contacts",newContact)
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        await axios.delete(`/contacts/${contactId}`)
        return contactId
    } catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})