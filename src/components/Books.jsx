import React, { useState } from 'react';

class Books extends React.Component {

    componentDidMount(){

        this.setState({
            items: [
                {
                    id: 1,
                    label: 'List item 1'
                },
                {
                    id: 2,
                    label: 'List item 2'
                },
                {
                    id: 3,
                    label: 'List item 3'
                },
                {
                    id: 4,
                    label: 'List item 4'
                }
            ],
            hasErrored: false,
            isLoading: false
        });
    }
    render(){
        let items = this.state && this.state.items || [];
        let itemsLen = items.length;
        let itemsList = [];
        for (let idx = 0; idx < itemsLen; idx++) {
            const elem = items[idx];
            itemsList.push(
                <li>{elem.label}</li>
            );
        }
        return (
            <div>
                <h1>Items</h1>
                <ul>
                    {itemsList}
                </ul>
            </div>
        );
    }
}

export default Books;