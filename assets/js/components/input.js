import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        var d1 = document.getElementById('foo');
        d1.insertAdjacentHTML('afterend', this.state.value + '<br>');
    }

    render() {
        return (
            <div id="foo">
                <input
                    type="text"
                    placeholder="edit me"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button className="button" onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}
export default Input