import { Component } from "react";

export class ContactFilter extends Component{
    state = {
        term:''
    }

    // handleChange = ({ target }) => {
    //     this.setState({ term: target.value }, () => {
    //         this.props.onChangeFilter({ ...this.state })
    //     })
    // }

    setFilter = ({target:{value}}) => {
        this.setState({term:value}, ()=>{
            this.props.onChangeFilter({...this.state})
        })
    }

    render(){
        const {term} = this.state
        return(
            <section className='contact-filter'>
                <input value={term} onChange={this.setFilter} type="text" name="cname" placeholder="Search..." />
            </section>
        )
    }
}