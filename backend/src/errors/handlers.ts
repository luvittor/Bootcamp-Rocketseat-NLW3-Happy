import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

/*
    response format of validation errors

    {
        field1: "cannot be null",
        field2: "boolean required"
    }
*/
interface ValidationErrors {
    [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    // formatting the response in case of validation errors    
    if (error instanceof ValidationError) {
        let errors: ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });

        return response.status(400).json({message: 'Validation fails', errors})
    }
    
    // other errors
    console.error(error);
    return response.status(500).json({message: 'Internal Server Error'});
}

export default errorHandler;