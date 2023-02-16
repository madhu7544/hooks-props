import {useState} from 'react'

import {
  Container,
  Head,
  SubHead,
  Image,
  Para,
  Button,
  MainContent,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const sliced = reactHooksDescription.slice(0, 170)
  const [desc, setDesc] = useState(false)

  const onClickDesc = () => {
    setDesc(prevState => !prevState)
  }
  const description = desc ? reactHooksDescription : sliced
  const btn = desc ? 'Read Less' : 'Read More'
  return (
    <Container>
      <Head>React Hooks</Head>
      <SubHead>Hooks are a new addition to React</SubHead>
      <MainContent>
        <Image
          alt="react hooks"
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        />
        <Para>{description}</Para>
      </MainContent>
      <Button type="button" onClick={onClickDesc}>
        {btn}
      </Button>
    </Container>
  )
}
export default ReadMore
