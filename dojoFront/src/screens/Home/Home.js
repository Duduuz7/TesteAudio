
import { ButtonAudio, ButtonConvert, ButtonText, ContainerButton, ContainerButtonPlay, Line, PlayButton } from "../../components/Buttons/StyleButtons";
import { Header } from "../../components/Header/Header";
import { InputHigh } from "../../components/Input/Input";
import { ContainerTitle, Title, UnderTitle } from "../../components/Titles/StyleTitle";
import { Container, ContainerForm, ScrollContainer } from "./StyleHome";

import { FontAwesome6 } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';


//Funções


export function Home() {
    return (
        <Container>

            <Header />

            <ContainerTitle>
                <Title>Converta texto para fala </Title>

                <UnderTitle>ou fala para texto !</UnderTitle>
            </ContainerTitle>

            <InputHigh
                fieldValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ante vel odio molestie, ut bibendum dolor feugiat. Fusce eget commodo nisi. Nunc tincidunt est id semper fermentum. Integer at ullamcorper dolor. Proin consequat libero nec ipsum efficitur, at congue nisi aliquam. Sed euismod risus id sapien posuere, non varius libero luctus. Nam sed lectus sit amet lacus dignissim bibendum. Vivamus lacinia, nisi et dapibus commodo, turpis ligula aliquet tortor, sit amet dapibus arcu dui id justo. Integer sit amet lorem purus. Etiam sit amet tortor id sem auctor dictum eu eget neque. Curabitur in mi in nisi consectetur consequat nec ut nisi. Sed vitae ex in magna fermentum ullamcorper. Suspendisse potenti. Vivamus vestibulum leo eget nunc aliquet sodales. Sed auctor nisl vel sem commodo, sed aliquet arcu vestibulum."}
                multiline={true}
            />

            <ContainerButton>

                <ButtonConvert><ButtonText>CONVERTER</ButtonText></ButtonConvert>

                <ButtonAudio><FontAwesome6 name="microphone" size={24} color="black" /></ButtonAudio>

            </ContainerButton>

            <ContainerButtonPlay>

                <PlayButton>

                    <AntDesign name="caretright" size={30} color="black" />

                </PlayButton>

                <Line/>

            </ContainerButtonPlay>


        </Container>
    )
}