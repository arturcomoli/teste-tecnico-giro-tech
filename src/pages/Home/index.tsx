import { HStack, Text, VStack } from "@chakra-ui/react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { MdOutlineAttachMoney, MdEditCalendar } from "react-icons/md";

import Background from "../../components/Background";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useAuth } from "../../providers/Authentication";
import { SimulationData } from "./home.interfaces";
import { useInvestment } from "../../providers/Investment";

const Home = () => {
  const { user } = useAuth();
  const { submitSimulation, selic } = useInvestment();

  const schema = yup.object().shape({
    period: yup
      .string()
      .min(1, "Por favor, escolha um periodo de no mínimo 1 (um) mês")
      .required("Campo obrigatório"),
    value: yup
      .string()
      .min(1, "Por favor, selecione um valor válido")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SimulationData>({ resolver: yupResolver(schema) });
  console.log(errors);
  return (
    <Background>
      <VStack spacing={10}>
        <Text fontSize={"3xl"} textAlign={"center"}>
          Seja bem vindo(a),{" "}
          <Text as={"span"} fontWeight={"bold"}>
            {user}
          </Text>
        </Text>
        <Text fontSize={"lg"} textAlign={"center"}>
          Para efetuar uma simulação de investimento, basta digitar o valor
          desejado e a quantidade de meses que deseja deixa o dinheiro
          investindo.
        </Text>
        <Text>A taxa SELIC, no momento, é de % a.a.</Text>
      </VStack>

      <VStack as={"form"} p={10} onSubmit={handleSubmit(submitSimulation)}>
        <HStack>
          <Input
            name="period"
            helperText="Meses para retirar"
            label="Período"
            error={errors.period}
            icon={MdEditCalendar}
            register={register}
            type={"number"}
            defaultValue={"1"}
          />
          <Input
            name="value"
            helperText="Valor a ser investido"
            label="Valor"
            error={errors.value}
            icon={MdOutlineAttachMoney}
            register={register}
            type={"number"}
            defaultValue={"100"}
          />
        </HStack>
        <Button type={"submit"}>Enviar</Button>
      </VStack>
    </Background>
  );
};
export default Home;
