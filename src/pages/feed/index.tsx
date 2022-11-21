import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

import { Container, Column, Title } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
            </Column>
        </Container>
    </>)
}

export { Feed }