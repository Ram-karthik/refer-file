import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from "yup";
import Select from "react-select";

const Form2 = () => {

    const formIntialValues = {
        text: "",
        number: "",
        email: "",
        password: "",
        date: "",
        check: "",
        radio: "",
        select: null
    }

    const formValuesRules = {
        text: yup.string().required("Text is required"),
        number: yup.number(),
        email: yup.string().email().required(),
        password: yup.string().min(5)
            .matches(/^(?=.*[0-9])(?=.*[!@#\$%^&\*])(?=.{8,})/, 'Password must contain at least one number, one special character, and be at least 8 characters long').required(),
        date: yup.date().required(),
        check: yup.boolean().oneOf([true, false]).required(),
        radio: yup.string().required(),
        select: yup.object({
            value: yup.string().required(),
            label: yup.string().required(),
        }),
    }

    const formik = useFormik({
        initialValues: formIntialValues,
        validationSchema: yup.object(formValuesRules),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const handleChange = (key, value) => {
        formik.setValues({
            ...formik.values,
            [key]: value
        })
    }

    return (
        <Container>
            <Form>
                <Form.Group className='mt-3'>
                    <Form.Label id='text'>Text  </Form.Label>
                    <Form.Control type='text' name="text" id="text"
                        onChange={(e) => handleChange("text", e.target.value)}
                        value={formik.values.text}
                    />
                    {formik.errors.text && <span className='text-danger'>{formik.errors.text}</span>}
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label id='number'>Number</Form.Label>
                    <Form.Control type='number' name="number" id="number"
                        onChange={(e) => handleChange("number", e.target.value)}
                        value={formik.values.number}
                    />
                    {formik.errors.number && <span className='text-danger'>{formik.errors.number}</span>}
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label id='date'>Date</Form.Label>
                    <Form.Control type='date' name="date" id="date"
                        onChange={(e) => handleChange("date", e.target.value)}
                        value={formik.values.date}
                    />
                    {formik.errors.date && <span className='text-danger'>{formik.errors.date}</span>}
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label id='email'>Email</Form.Label>
                    <Form.Control type='email' name="email" id="email"
                        onChange={(e) => handleChange("email", e.target.value)}
                        value={formik.values.email}
                    />
                    {formik.errors.email && <span className='text-danger'>{formik.errors.email}</span>}
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label id='password'>Password</Form.Label>
                    <Form.Control type='password' name="password" id="password"
                        onChange={(e) => handleChange("password", e.target.value)}
                        value={formik.values.password}
                    />
                    {formik.errors.password && <span className='text-danger'>{formik.errors.password}</span>}
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label >Check</Form.Label>
                    <Form.Check type='checkbox' label="Check" name="check" id="check"
                        onChange={(e) => handleChange("check", e.target.checked)}
                        checked={formik.values.check}
                    />
                    {formik.errors.check && <span className='text-danger'>{formik.errors.check}</span>}
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label >Radio</Form.Label> <br />
                    <Form.Check inline type='radio' label="Radio 1" value="radio-1" name="radio" id="radio1"
                        onChange={(e) => handleChange("radio", e.target.value)}
                        checked={formik.values.radio === 'radio-1'}
                    />
                    <Form.Check inline type='radio' label="Radio 2" value="radio-2" name="radio" id="radio2"
                        onChange={(e) => handleChange("radio", e.target.value)}
                        checked={formik.values.radio === 'radio-2'}
                    />
                    <Form.Check inline type='radio' label="Radio 3" value="radio-3" name="radio" id="radio3"
                        onChange={(e) => handleChange("radio", e.target.value)}
                        checked={formik.values.radio === 'radio-3'}
                    /> <br />
                    {formik.errors.radio && <span className='text-danger'>{formik.errors.radio}</span>}
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label >Select</Form.Label> <br />
                    <Select
                        isClearable={true}
                        isSearchable={true}
                        options={[
                            { value: 'select-1', label: 'Select 1' },
                            { value: 'select-2', label: 'Select 2' },
                            { value: 'select-3', label: 'Select 3' },
                            { value: 'select-4', label: 'Select 4' }
                        ]}
                        name='select'
                        value={formik.values.select}
                        onChange={(e) => handleChange("select", e)}
                    />
                    {formik.errors.select && <span className='text-danger'>{formik.errors.select}</span>}
                </Form.Group>
                <Form.Group className='mt-3' style={{ textAlign: "end" }}>
                    <Button variant='success' style={{ marginRight: "10px" }} onClick={formik.handleSubmit} >Submit</Button>
                    <Button variant='danger' onClick={formik.handleReset}>Reset</Button>
                </Form.Group>
            </Form>
        </Container >
    )
}

export default Form2