import React, {useState, useEffect} from 'react'
import { Table, Button, Header, Icon } from "semantic-ui-react"
import JobPostingService from '../../services/jobPostingService'

export default function JobPostingList() {

    const [jobPostings, setJobPostings] = useState([])


    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPostings().then(result=> setJobPostings(result.data.data))
      }, [] )

    return (
        <div>
            <Header as="h2">
                <Icon name="list" />
                <Header.Content>İş İlanları</Header.Content>
            </Header>
            <Table color="purple" key="purple">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Boş Pozisyon Sayısı</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobPostings.map((jobPosting) => (
                        <Table.Row key={jobPosting.id}>
                            <Table.Cell>{jobPosting.title}</Table.Cell>
                            <Table.Cell>{jobPosting.city}</Table.Cell>
                            <Table.Cell>{jobPosting.companyName}</Table.Cell>
                            <Table.Cell>{jobPosting.vacantPositionNumber}</Table.Cell>
                            <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell>
                                <Button>View</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
