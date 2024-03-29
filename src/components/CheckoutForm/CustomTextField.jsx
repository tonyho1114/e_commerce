import React from 'react'
import { TextField, Grid } from '@material-ui/core'
import { useFormContext,Controller } from 'react-hook-form'

const FormInput = ({name,label}) => {
    const {control} =useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller 
                name={name}
                control={control}
                as={TextField}
                render = {({ field})=> (
                    <TextField
                        fullWidth
                        label={label}
                        required
                        defaultValue=""
                    />
                )}
            />
        </Grid>
    )
}

export default FormInput