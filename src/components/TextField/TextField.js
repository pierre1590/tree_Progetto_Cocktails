import { TextField } from '@material-ui/core'
import { useField } from 'formik'

export default function MyTextField(props) {

    const [field, meta, helpers] = useField(props.name)

    return <div><TextField
        label={props.label}
        value={field.value}
        onChange={(e)=>{
            helpers.setValue(e.target.value)
            }}
        />
        {field.error && <span>{field.error}</span>}
        </div>
}


