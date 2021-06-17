import React, { useState } from 'react'
import JobPostingService from '../../services/jobPostingService';

export default function JobPostingDetail() {

    const [jobPostings, setJobPostings] = useState([]);

    useEffect(() => {
        let jobPostingService = new JobPostingService();
        jobPostingService
            .getByJobPostingId(jobPostingId)
            .then((result) => setJobPostings([result.data.data]));
    }, []);

    return (
        <div>
            <Header as="h2" icon textAlign="center">
                <Header.Content>İŞ İLANI DETAYI</Header.Content>
                <DetailsIcon></DetailsIcon>
            </Header>
            {jobPostings.map((jobPosting) => (
                <Table color="black" celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan="3">DETAYLAR</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell collapsing>
                                <BusinessIcon /> Şirket
                            </Table.Cell>
                            <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <WorkIcon /> Pozisyon
                            </Table.Cell>
                            <Table.Cell>{jobPosting.jobTitle.title}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <LocationCityIcon /> Şehir
                            </Table.Cell>
                            <Table.Cell>{jobPosting.city.name}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Son Başvuru Tarihi</Table.Cell>
                            <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Açık Pozisyon Sayısı</Table.Cell>
                            <Table.Cell>{jobPosting.vacantPositionNumber}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Minimum Maaş Skalası</Table.Cell>
                            <Table.Cell>{jobPosting.minSalary} TL</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Maksimum Maaş Skalası</Table.Cell>
                            <Table.Cell>{jobPosting.maxSalary} TL</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Açıklama</Table.Cell>
                            <Table.Cell>{jobPosting.jobDefinition}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            ))}
            <Button floated="right" inverted color="green">
                BAŞVUR
            </Button>
        </div>
    )
}
