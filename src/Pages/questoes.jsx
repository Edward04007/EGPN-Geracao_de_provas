import Api from '../Service/api' 
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import CardCenter from '../Components/Card/card'
import Button from '../Components/Button/button'
import Hearder from '../Components/Header/header'
import Colunm from '../Components/Direction/column'
import Center from '../Components/Direction/center'
import SpaceQuest from '../Components/Card/card_quest'
import SpaceForTitle from '../Components/Card/card_title'

export default function Home(){

   const [quest, setQuest] = useState([])
   const [nav, setNav] = useState([])
   const [page, setPage] = useState(1)
    
    useEffect(() =>{
        Api.get(`q/${sessionStorage.getItem('fk_ass')}?page=${page}`).then(
            (response)=>{

                setQuest(response.data.data)
                setNav(response.data)         
            }
        )
    },[page])

    const history = useHistory() 

    function QuestValidate(ev){

        if(quest[0].gabarito === ev.target.innerHTML){

            const At_cert = parseInt(sessionStorage.getItem('at_certo')) +1
            sessionStorage.setItem('at_certo', At_cert)
            Next()
        }else{
            const At_Error = parseInt(sessionStorage.getItem('at_error')) +1
            sessionStorage.setItem('at_error', At_Error) 
            Next()
        }
    }

    function Next(){
        if(nav.current_page !== nav.total){

            const page = nav.current_page +1
            setPage(page)
        }else{
            sessionStorage.setItem('at_total', nav.total)
            history.push("/resultado") 
        }
    }
   
    function Back(){
        if(nav.current_page !== 1){

            const page = nav.current_page -1
            setPage(page)
        }else{
            history.push("/assunto")
        }
    }
    return(
        <>    
            <Hearder 
                title="EGPN"/>
            <Center>
                <CardCenter>
                    <SpaceForTitle 
                        title="Questões"/>
                    <Colunm>
                    {quest.map((q) => (
                        <SpaceQuest 
                            key={q.pk_id}
                            href={q.pk_id}
                            q={q.questao}
                            a={q.alternativa_a}
                            b={q.alternativa_b}
                            c={q.alternativa_c}
                            d={q.alternativa_d}
                            e={q.alternativa_e}
                            click3={QuestValidate}/>))}
                        <Button
                            click1={Next}
                            click2={Back}/>
                    </Colunm>
                </CardCenter>
            </Center>
        </>
    )
}