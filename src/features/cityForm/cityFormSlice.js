import { createSlice } from '@reduxjs/toolkit';

export const cityForm = createSlice({
    name: 'cityForm',
    initialState: {
        places: {
            treeData: [{
                title: 'Россия',
                key: '1000',
                children: [{
                    title: 'Москва',
                    key: '1001'
                },
                { title: 'Санкт-Петербург', key: '1006' },]
            }, {
                title: 'Израиль',
                key: '1100',
                children: [{
                    title: 'Тель-Авив',
                    key: '1101'
                },
                { title: 'Хайфа', key: '1102' },]
            }],
            checked: []
        },
        languages: {
            data: [
                { key: 'rus', title: 'Русский' },
                { key: 'eng', title: 'Английский' },
                { key: 'heb', title: 'Иврит' }
            ],
            selected: []
        },
        submitedData: {
            place: null,
            language: null
        }
    },
    reducers: {
        changePlace: (state, action) => {
            state.places.checked = action.payload
        },
        changeLanguage: (state, action) => {
            state.languages.selected = action.payload
        },
        submitForm: (state) => {
            state.submitedData = { place: state.places.checked, language: state.languages.selected }
        }
    },
});

export const { changePlace, changeLanguage, submitForm } = cityForm.actions;

export const placesTreeDataSelector = state => state.cityForm.places.treeData;

export const languagesDataSelector = state => state.cityForm.languages.data;

export default cityForm.reducer;
