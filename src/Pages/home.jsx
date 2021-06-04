import Api from "../Service/api";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import CardCenter from "../Components/Card/card";
import Hearder from "../Components/Header/header";
import Colunm from "../Components/Direction/column";
import Center from "../Components/Direction/center";
import SpaceForText from "../Components/Card/card_text";
import SpaceForTitle from "../Components/Card/card_title";

export default function Home() {
  const history = useHistory();
  const [disc, setDisc] = useState([]);

  useEffect(() => {
    Api.get("d").then((response) => {
      setDisc(response.data.data);
    });
  }, []);

  function NextPage(ev) {
    sessionStorage.setItem("fk_disc", ev.target.id);
    history.push("/assunto");
  }

  return (
    <>
      <Hearder title="EGPN" />
      <Center>
        <CardCenter>
          <SpaceForTitle title="Escolha uma disciplina" />
          <Colunm column={1}>
            {disc.map((d) => (
              <SpaceForText
                key={d.pk_id}
                href={d.pk_id}
                click={NextPage}
                content={d.disciplina}
              />
            ))}
          </Colunm>
        </CardCenter>
      </Center>
    </>
  );
}
