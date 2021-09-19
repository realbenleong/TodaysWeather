import React, { Component } from 'react'
import { Card, Image, Label, Grid, Icon, Feed } from 'semantic-ui-react'

export class WeatherCard extends Component {
    render() {
        let { 
            coord, 
            weather, 
            base, 
            main, 
            visibility, 
            wind, 
            clouds, 
            dt, 
            sys, 
            timezone, 
            id, 
            name, 
            cod 
        } = this.props.weatherDisplayData

        return (
            <React.Fragment>
                <Card>
                    <Card.Content>
                        <Card.Meta>
                            <span className='date'>{name}</span>
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Card.Header>{weather[0].main}</Card.Header>
                        <Grid columns={2}>
                            <Grid.Row>
                                <Grid.Column>
                                    <Card.Meta>
                                        <span className='date'>Description:</span>
                                    </Card.Meta>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card.Description>
                                        {weather[0].description}
                                    </Card.Description>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Card.Meta>
                                        <span className='date'>Temperature:</span>
                                    </Card.Meta>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card.Description>
                                        {main.temp_min}°C ~ {main.temp_max}°C
                                    </Card.Description>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Card.Meta>
                                        <span className='date'>Humidity:</span>
                                    </Card.Meta>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card.Description>
                                        {main.humidity}%
                                    </Card.Description>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Card.Meta>
                                        <span className='date'>Time:</span>
                                    </Card.Meta>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card.Description>
                                        {(() => {
                                            var date = new Date(dt * 1000);
                                            return date.toGMTString();
                                        })()}
                                    </Card.Description>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Content>
                </Card>
            </React.Fragment>
        )
    }
}

export default WeatherCard
