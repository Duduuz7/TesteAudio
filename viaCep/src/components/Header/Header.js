import { ContainerHeader, Logo, MainTitle, SafeContainer } from "./StyleHeader";

export function Header() {
    return (
        <ContainerHeader>

            <Logo source={require("../../assets/LogoDojo.png")} />

        </ContainerHeader>
    )
}