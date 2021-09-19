import React, { Component } from 'react'
import { Menu, Segment, Input, Button, Dropdown, Icon, Image, Sidebar, Grid, Header } from 'semantic-ui-react'
import './shell.css'
import * as Dropdowns from '../dropdowns/dropdown';

export class HeaderUI extends Component {
    constructor(props) {
        super(props)
        this.state = {
             activeItem: 'home' ,
             navButtonVisible: false,
             sideBarActivated: false,
             citySearch: '',
             countrySearch: ''
        }
    }

    handleClearSearch = () => {
        this.props.handleClearSearch()

        this.setState(prevState => ({
            ...prevState,
            citySearch: '',
            countrySearch: ''
        }), () => {
        })
    }

    handleSearchFieldChange = (e, { name , value , checked , type }) => {
        if (name === 'citySearch') {
            this.setState(prevState => ({
                ...prevState,
                citySearch: value
            }), () => {
                console.log(this.state.citySearch);
            })
        }
        else if (name === 'countrySearch') {
            this.setState(prevState => ({
                ...prevState,
                countrySearch: value
            }), () => {
                console.log(this.state.countrySearch);
            })
        }
    }
    
    render() {
        let { activeItem } = this.state

        return (
            <React.Fragment>
                <Menu fluid 
                    borderless
                    attached='middle' 
                    color='white' 
                    size='small' 
                    className='shell-header-top'
                >
                    <Menu.Menu position='left'>
                        <Menu.Item>
                            <Header>Today's Weather</Header>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Menu 
                    borderless
                    fluid 
                    attached='middle' 
                    color='white' 
                    className='shell-headers-bottom'
                > 
                    {
                        this.props.isMobile === false && 
                        <React.Fragment>
                            <Menu.Menu widths={3} fluid>
                                <Menu.Item>
                                    <div style={{marginRight:'1em'}}>City:</div>
                                    <Input 
                                        name='citySearch'
                                        icon='search' 
                                        placeholder='Search City' 
                                        onChange={this.handleSearchFieldChange}
                                    />
                                </Menu.Item>
                                <Menu.Item>
                                    <div style={{marginRight:'1em'}}>Country:</div>
                                    {/* <Input 
                                        name='countrySearch'
                                        icon='search' 
                                        placeholder='Search Country' 
                                        onChange={this.handleSearchFieldChange}
                                    /> */}
                                    <Dropdown
                                        name='countrySearch'
                                        clearable
                                        search
                                        selection
                                        options={Dropdowns.countries}
                                        placeholder='Search Country' 
                                        onChange={this.handleSearchFieldChange}
                                    />
                                </Menu.Item>
                                <Menu.Item>
                                    <Button
                                        onClick={
                                            () => this.props.handleSearchRequest(
                                                this.state.citySearch,
                                                // 'London',
                                                this.state.countrySearch,
                                                )
                                        }
                                    >Search</Button>
                                </Menu.Item>
                                <Menu.Item>
                                    <Button onClick={this.handleClearSearch}>Clear</Button>
                                </Menu.Item>
                            </Menu.Menu>
                            {
                                this.props.windowWidth > 930 &&
                                <Menu.Menu position='right'>
                                </Menu.Menu>
                            }
                        </React.Fragment>
                    }
                    {
                        this.props.windowWidth < 930 &&
                        <React.Fragment>
                            <Menu.Menu widths={1} fluid position='right'>
                                <Menu.Item>
                                    <Icon name='bars'></Icon>
                                </Menu.Item>
                            </Menu.Menu>
                        </React.Fragment>
                    }
                </Menu>
            </React.Fragment>
        )
    }
}

export default HeaderUI