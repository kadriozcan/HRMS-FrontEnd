import React from 'react'
import { Grid, GridColumn } from "semantic-ui-react";
import CandidateList from "../pages/Users/CandidateList"
import EmployerList from "../pages/Users/EmployerList"
import JobPostingList from "../pages/JobPosting/JobPostingList"

export default function Section() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn size={14}>
                        <CandidateList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={14}>
                        <EmployerList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={14}>
                        <JobPostingList />
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}
