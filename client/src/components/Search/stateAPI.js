import React from "react";

export default class FetchState extends React.Component {
    state = {
        loading: true
    };

    async componentDidMount() {
        const url = "https://www.vaccinespotter.org/api/v0/states.json"
        const response = await fetch(url);
    }

    render() {
        return (
            <div>
                {this.state.loading}
            </div>
        )
    }
}

export default search;