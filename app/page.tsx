import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import TextInput from '@/components/common/Input'
import { Heading, Label, Paragraph } from '@/components/ui/Typography'

export default function HomePage() {
  return (
    <>
      <Button variant="primary">Primary Buttton</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button size="lg" loading={true}></Button>
      <TextInput />
      <Card></Card>
      <Heading level={1}>Heading</Heading>
      <Paragraph>Paragraph</Paragraph>
      <Label>Label</Label>
    </>
  )
}
