import { Component } from 'react'
import TextField from '@mui/material/TextField';



export class ContactFilter extends Component {
    state = {
        name: '',
        // phone: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({...this.state})
        })
    }

    render() {
        const { name } = this.state
       
        return (
            <div className='contact-filter-container'>
                    <section>
                        <label htmlFor="name">  </label> 
                            <TextField value={name} onChange={this.handleChange} type="text" name="name" id="name" label={'Search Contact'} variant="standard" />
                    </section>
            </div>
    )
  }
}
