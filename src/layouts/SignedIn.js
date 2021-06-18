import React from 'react'
import { Image, Dropdown, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" />
                <Dropdown pointing="top left" text="Kadri">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={props.signOut} text="Cikis Yap" icon="sign-out"/>
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
