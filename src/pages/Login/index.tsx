import { Text, VStack } from "@chakra-ui/react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AiOutlineMail } from "react-icons/ai";
import { MdPassword } from "react-icons/md";

import Background from "../../components/Background";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { LoginData } from "./login.interfaces";
import { useAuth } from "../../providers/Authentication";

const Login = () => {
  const { handleLogin } = useAuth();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Formato de e-mail inválido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(schema) });

  return (
    <Background>
      <VStack
        as={"form"}
        border={"2px"}
        borderColor={"blue.400"}
        p={3}
        borderRadius={"md"}
        onSubmit={handleSubmit(handleLogin)}
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Login
        </Text>
        <Input
          name={"email"}
          helperText={"Digite seu e-mail"}
          label={"E-mail"}
          error={errors.email}
          icon={AiOutlineMail}
          register={register}
        />
        <Input
          name={"password"}
          type={"password"}
          helperText={"Digite sua senha"}
          label={"Senha"}
          error={errors.password}
          icon={MdPassword}
          register={register}
        />
        <Button type={"submit"}>Enviar</Button>
      </VStack>
    </Background>
  );
};
export default Login;
