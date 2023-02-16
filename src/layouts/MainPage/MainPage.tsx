import { useState } from 'react';
import { Container } from "./MainPage.theme";
import Button from '../../components/Button';
import Title from '../../components/Title';

const MainPage = () => {
  const [isLightMode, setIsLightMode] = useState<boolean>(false)
  const handleLightMode = () => {
    setIsLightMode(!isLightMode);
  }
  return (
    <Container isLightMode={isLightMode}>
        <Title isLightMode={isLightMode} />
        <Button click={handleLightMode} isLightMode={isLightMode} />
    </Container>
  )
}

export default MainPage