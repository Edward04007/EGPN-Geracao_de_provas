import Api from "../Service/api";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import CardCenter from "../Components/Card/card";
import Button from "../Components/Button/button";
import Hearder from "../Components/Header/header";
import Colunm from "../Components/Direction/column";
import Center from "../Components/Direction/center";
import SpaceForText from "../Components/Card/card_text";
import SpaceForTitle from "../Components/Card/card_title";
import SpaceTextGabarito from "../Components/Card/card_textJustify";

export default function Resultado() {
  const history = useHistory();
  const [gaba, setGaba] = useState([]);
  const total = `${sessionStorage.getItem("at_certo")}/${sessionStorage.getItem(
    "at_total"
  )}`;

  useEffect(() => {
    Api.get(`g/${sessionStorage.getItem("fk_ass")}`).then((response) => {
      setGaba(response.data.data);
    });
  }, []);

  function Back() {
    history.push("/");
  }
  console.log(gaba)
  return (
    <>
      <Hearder title="EGPN" />
      <Center>
        <CardCenter>
          <SpaceForTitle title="Resultado da prova" />
          <Colunm>
            <SpaceForTitle title="Nota" />
            <SpaceForText content={total} />
            <SpaceForTitle title="Respostas" />
            {gaba.map((g) => (
              <SpaceTextGabarito key={g.pk_id} content={g.gabarito} />
            ))}
            <Button op={1} click2={Back} />
          </Colunm>
        </CardCenter>
      </Center>
    </>
  );
}
