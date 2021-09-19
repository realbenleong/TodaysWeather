import React, { Component } from 'react'
import HeaderUI from './HeaderUI';
import BodyUI from './BodyUI';
import FooterUI from './FooterUI';
import Requests from '../services/Requests';
import { Container, Divider } from 'semantic-ui-react'

export class SkeletonUI extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isMobile: false,
            windowWidth: null,
            weatherDisplayData: null,
            searchHistory: []
        }
        this.requests = new Requests();
    }
    
    handleWindowSizeChange = () => {
        if (window.innerWidth <= 768) {
            this.setState(prevState => ({
                ...prevState,
                isMobile: true,
                windowWidth: window.innerWidth
            }), () => { 
                // console.log(this.state.windowWidth)
            })
        }
        else {
            this.setState(prevState => ({
                ...prevState,
                isMobile: false,
                windowWidth: window.innerWidth
            }), () => { 
                // console.log(this.state.windowWidth)
            })
        }
    }
    
    componentDidMount() {
        this.setState(prevState => ({
            ...prevState,
            isMobile: window.innerWidth <= 768 ? true : false,
            windowWidth: window.innerWidth
        }), () => { 
            window.addEventListener('resize', this.handleWindowSizeChange);
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleDeleteSearchHistory = (id) => {

        let newSearchHistory = this.state.searchHistory
        newSearchHistory.splice(id,1)

        this.setState(prevState => ({
            ...prevState,
            searchHistory: newSearchHistory,
        }), () => { 
        })
    }

    handleReSearchHistory = (id) => {
        let { searchHistory } = this.state
        if (this.state.searchHistory.length <= id) return null

        this.handleSearchRequest(searchHistory[id].city,searchHistory[id].country)
    }

    handleSearchRequest = (city,country) => {
        this.requests.getSearchDetails(city, country, (result) => {
            console.log(result);
            if (result.cod == '404') {
                this.setState(prevState => ({
                    ...prevState,
                    weatherDisplayData: null,
                }), () => {
                })
            }
            else if (result.cod == '200') {
                this.setState(prevState => ({
                    ...prevState,
                    weatherDisplayData: result,
                    searchHistory: [...prevState.searchHistory,{
                        city: city,
                        country: country,
                        searchDate: new Date(),
                        result: result
                    }]
                }), () => {
                })
            }
            else {
                this.setState(prevState => ({
                    ...prevState,
                    weatherDisplayData: null,
                }), () => {
                })
            }
        })
    }

    handleClearSearch = () => {
        this.setState(prevState => ({
            ...prevState,
            weatherDisplayData: null,
        }), () => {
        })
    }

    render() {
        return (
            <div style={{
                    width: '100%',
                    height: '100%',
                    // backgroundColor: 'red'
                }}>
                <HeaderUI 
                    isMobile={this.state.isMobile}
                    windowWidth={this.state.windowWidth}
                    handleSearchRequest={this.handleSearchRequest}
                    handleClearSearch={this.handleClearSearch}
                />
                <BodyUI
                    isMobile={this.state.isMobile}
                    weatherDisplayData={this.state.weatherDisplayData}
                    searchHistory={this.state.searchHistory}
                    handleDeleteSearchHistory={this.handleDeleteSearchHistory}
                    handleReSearchHistory={this.handleReSearchHistory}
                />
                <FooterUI
                    isMobile={this.state.isMobile}
                />
            </div>
        )
    }
}

export default SkeletonUI
