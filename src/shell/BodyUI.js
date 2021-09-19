import React, { Component } from 'react'
import { Menu, List, Placeholder, Grid, Button, Message, Header } from 'semantic-ui-react'
import WeatherCard from '../features/WeatherDisplay/WeatherCard'

export class BodyUI extends Component {
    render() {
        let { searchHistory } = this.props

        return (
            <React.Fragment>
                <Menu fluid 
                    borderless
                    attached='middle' 
                    color='white' 
                    style={{padding: '1em'}}
                >
                    <div>
                    {
                        this.props.weatherDisplayData &&
                        <WeatherCard weatherDisplayData={this.props.weatherDisplayData} />
                    }
                    {
                        !this.props.weatherDisplayData &&
                        <Message negative fluid>Not Found</Message>
                    }
                    </div>
                </Menu>
                <Menu fluid 
                    borderless
                    attached='middle' 
                    color='white' 
                    size='small' 
                >
                    <Menu.Menu position='left'>
                        <Menu.Item>
                            <Header>Search History</Header>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <div style={{padding:'1em'}}>
                    {
                        searchHistory.length == 0 &&
                        <Message fluid>No Message Found.</Message>
                    }
                    {
                        searchHistory.length > 0 &&
                        <List divided relaxed>
                            {
                                searchHistory.map((elem, index) => 
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                {index+1}. {elem.city}, {elem.country}
                                            </List.Header>
                                        </List.Content>
                                        <List.Content floated='right'>
                                            <Button 
                                                size='small' 
                                                circular icon='search' 
                                                onClick={() => this.props.handleReSearchHistory(index)}
                                            />
                                            <Button 
                                                size='small' 
                                                circular icon='trash alternate' 
                                                onClick={() => this.props.handleDeleteSearchHistory(index)}
                                            />
                                        </List.Content>
                                        <List.Content floated='right'>
                                            {(() => {
                                                return elem.searchDate.toGMTString();
                                            })()}
                                        </List.Content>
                                    </List.Item>
                                )
                            }
                        </List>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default BodyUI
