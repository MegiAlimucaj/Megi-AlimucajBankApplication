import { Container } from 'react-bootstrap'

const Home = () => {

    return (
        <Container className="center">
            <div className="card border-secondary text-center">
                <div className="card-header border-secondary">
                    <h5 className="card-title">WELCOME TO BAD BANK</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">ThIS IS A SIMPLE BANK APPLICATION CREATED FOR MIT XPRO</p>
                    <img src='bank.png' className='img-fluid' alt='Bad Bank' />
                </div>
            </div>
        </Container>
    )
}
export default Home