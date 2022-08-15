import { Component } from 'react'
import { Link } from 'react-router-dom'


export class ContactFilter extends Component {
    state = {
        name: '',
        phone: '',
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
                  <Link to="/contact/edit">Add contact</Link>
                <form className='contact-filter'>
                    <section>
                        <label htmlFor="name">  </label> 
                            <input value={name} onChange={this.handleChange} type="text" name="name" id="name" placeholder='Search Contact' />
                    
                    </section>
                    {/* <section>
                        <label htmlFor="phone">Phone</label>
                        <input value={phone} onChange={this.handleChange} type="text" name="phone" id="phone" />
                    </section> */}
                </form>
            </div>
    )
  }
}
