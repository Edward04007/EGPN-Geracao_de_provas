import CardCenter from '../Components/Card/card'
import Button from '../Components/Button/button'
import Hearder from '../Components/Header/header'
import Colunm from '../Components/Direction/column'
import Center from '../Components/Direction/center'
import SpaceForText from '../Components/Card/card_text'
import SpaceForTitle from '../Components/Card/card_title'
import { useHistory } from 'react-router'

export default function Resultado(){
    const history = useHistory()
    const total = `${sessionStorage.getItem('at_certo')}/${sessionStorage.getItem('at_total')}`
    function Back(){

        history.push("/")
    }
    return(
        <>    
            <Hearder 
                title="EGPN"/>
            <Center>
                <CardCenter>
                    <SpaceForTitle 
                        title="Resultado da prova"/>
                    <Colunm>
                        <SpaceForText 
                            content={total}/>
                        <Button
                            op={1}
                            click2={Back}/>
                    </Colunm>
                </CardCenter>
            </Center>
        </>
    )
}