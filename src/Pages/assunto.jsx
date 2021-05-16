import Api from '../Service/api' 
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import CardCenter from '../Components/Card/card'
import Button from '../Components/Button/button'
import Hearder from '../Components/Header/header'
import Colunm from '../Components/Direction/column'
import Center from '../Components/Direction/center'
import SpaceForText from '../Components/Card/card_text'
import SpaceForTitle from '../Components/Card/card_title'

export default function Home(){

    const history = useHistory() 
    const [ass, setAss] = useState([]);

    useEffect(() =>{
        Api.get(`a/${sessionStorage.getItem('fk_disc')}`).then(
            (response)=>{

                setAss(response.data.data)         
            }
        )
    },[])
    
    function NextPage(ev){

        sessionStorage.setItem('at_certo', 0)
        sessionStorage.setItem('at_error', 0)
        sessionStorage.setItem('fk_ass', ev.target.id)
        history.push("/questoes")
    }
    
    function Back(){

        history.push("/")
    }
    return(
        <>    
            <Hearder title="EGPN"/>
            <Center>
                <CardCenter>
                    <SpaceForTitle title="Conteúdo para a prova"/>
                    <Colunm>
                    {ass.map((a) => (
                        <SpaceForText 
                            key={a.pk_id}
                            href={a.pk_id}  
                            click={NextPage} 
                            content={a.assunto}/>
                    ))}
                        <Button
                            op={1}
                            click2={Back}/>
                    </Colunm>
                </CardCenter>
            </Center>
        </>
    )
}