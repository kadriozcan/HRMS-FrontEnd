import React from 'react'
import Filter from './Filter'
import JobPostingList from "../pages/JobPosting/JobPostingList"
import {Grid} from 'semantic-ui-react'
import Section from './Section'

export default function MainDashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Filter />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Section />
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
}
