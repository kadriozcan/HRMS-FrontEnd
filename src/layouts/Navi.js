import React, {useState} from 'react'
import { Button, Icon, Menu } from "semantic-ui-react"
import { Container } from "semantic-ui-react"
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {

    const [isAuthenticated, setisAuthenticated] = useState(true)

    function handleSignOut(params) {
        setisAuthenticated(false)
    }

    function handleSignIn(params) {
        setisAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top" size="large">
                <Container>
                    <Menu.Item name="chart bar">
                        <Icon name="favorite" size="large" />
            İŞBUL.COM
          </Menu.Item>
                    <Menu.Item>
                        <Button inverted>Home</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button inverted color='red'>İş İlanları</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button inverted color='blue'>Şirketler</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button inverted color='blue'>İş Arayanlar</Button>
                    </Menu.Item>
                    <Menu.Menu position="right">
                        {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
