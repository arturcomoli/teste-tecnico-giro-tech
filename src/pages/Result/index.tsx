import {
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";

import Background from "../../components/Background";
import { useInvestment } from "../../providers/Investment";
import Button from "../../components/Button";
import { useAuth } from "../../providers/Authentication";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { simulation, selic, normalizeStates } = useInvestment();
  const { handleLogout } = useAuth();

  const navigate = useNavigate();

  const logout = () => {
    handleLogout();
    normalizeStates();
  };

  return (
    <Background>
      <VStack spacing={10}>
        <Text>Resultado da sua simulação com:</Text>
        <List>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={"blue.300"} />
            Período de{" "}
            <Text as={"span"} fontWeight={"bold"}>
              {simulation && simulation.period} mes(es)
            </Text>
            ;
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={"blue.300"} />
            Valor de{" "}
            <Text as={"span"} fontWeight={"bold"}>
              R$ {simulation && simulation.value}
            </Text>
            ;
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={"blue.300"} />
            Investido a uma taxa de{" "}
            <Text as={"span"} fontWeight={"bold"}>
              {selic && selic.valor}% a.a.
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={FcMoneyTransfer} color={"blue.300"} />
            Total a resgatar{" "}
            <Text as={"span"} fontWeight={"bold"}>
              R$ {simulation && simulation.investment}
            </Text>
          </ListItem>
        </List>
        <HStack spacing={5}>
          <Button onClick={() => navigate("/home")}>Voltar</Button>
          <Button logout onClick={logout}>
            Deslogar
          </Button>
        </HStack>
      </VStack>
    </Background>
  );
};
export default Result;
