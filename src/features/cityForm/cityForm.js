import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Select, Tree } from 'antd';
import { changePlace, changeLanguage, placesTreeDataSelector, languagesDataSelector, submitForm } from './cityFormSlice'

export function CityForm() {
    const placesTreeData = useSelector(placesTreeDataSelector);
    const languagesData = useSelector(languagesDataSelector);
    const dispatch = useDispatch();

    const onCityChange = (_, e) => {
        dispatch(changePlace(e.checkedNodes.map((place) => { return { id: place.key, name: place.title } })))
    }

    const onLanguageChange = (_, e) => {
        console.log(e)
        dispatch(changeLanguage(e.map(language => { return { key: language.id, name: language.key } })))
    }

    const onSubmitForm = (_) => {
        dispatch(submitForm())
    }

    const { Option } = Select;

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    return (
        <Form {...layout} name="cityForm" onFinish={onSubmitForm}>
            <Form.Item label="Местоположение" name='city' rules={[{ required: true, message: 'Пожалуйста, выберите город или страну!' }]}>
                <Tree checkable treeData={placesTreeData} onCheck={onCityChange} />
            </Form.Item>
            <Form.Item label="Язык" name='language' rules={[{ required: true, message: 'Пожалуйста, выберите язык!' }]}>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Выберите язык"
                    onChange={onLanguageChange}
                >
                    {languagesData.map((language) => <Option key={language.title} id={language.key}>{language.title}</Option>)}
                </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Отправить
                </Button>
            </Form.Item>
        </Form>)
}
