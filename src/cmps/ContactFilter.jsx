import { Component } from 'react'

export class ContactFilter extends Component {
    state = {
        name: '',
        phone: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        console.log(field, value)
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({...this.state})
        })
    }

    render() {
    const {name, phone} = this.state
    return (
        <form className='contact-filter'>
                <section>
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={this.handleChange} type="text" name="name" id="name" />
            </section>
            <section>
                    <label htmlFor="phone">Phone</label>
                    <input value={phone} onChange={this.handleChange} type="number" name="phone" id="phone" />
            </section>
        </form>
    )
  }
}
