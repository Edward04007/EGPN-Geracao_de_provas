import Api from '../Service/api' 
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import CardCenter from '../Components/Card/card'
import Button from '../Components/Button/button'
import Hearder from '../Components/Header/header'
import Colunm from '../Components/Direction/column'
import Center from '../Components/Direction/center'
import SpaceForText from '../Components/Card/card_text'
import SpaceForTitle from '../Components/Card/card_title'

export default function Resultado(){

    const history = useHistory()
    const [gaba, setGaba] = useState([])
    const total = `${sessionStorage.getItem('at_certo')}/${sessionStorage.getItem('at_total')}`

     useEffect(() =>{
         Api.get(`g/${sessionStorage.getItem('fk_ass')}`).then(
             (response)=>{
 
                 setGaba(response.data.data)
             }
         )
     },[])

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
                        <SpaceForTitle 
                            title="Gabarito"/>
                    {gaba.map((g) => (
                        <SpaceForText 
                            content={g.gabarito}/>))}
                        <SpaceForTitle 
                            title="Nota"/>
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