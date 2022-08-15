import Head from "next/head";
import { Card, Image, Text, Divider, Button, Group, Grid } from "@mantine/core";
import {cardData} from '../data/props';




export default function Home() {
  const cards = cardData[0] 
  const items = cards.cards.map((card) => (
    <Grid.Col md={6} lg={3}>
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={card.imagen}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500} size="xl">{card.titel}</Text>

      </Group>
      <Divider size="sm" />
      <Text size="lg" color="dark">
       {card.description}
      </Text>

      <Button
        
        color="blue"
        fullWidth
        mt="md"
        radius="md"
      >
        {card.bottom_name}
      </Button>
    </Card>
  </Grid.Col>
  ));

  return (
    <div>
      <Head>
        <title>VACUCAB</title>
        <meta name="description" content="Sistema de control de salud" />
        <link rel="icon" href="/heal.ico" />
      </Head>

      <main>
        <Grid justify="center" mt={100}>
        {items}
        </Grid>
      </main>
    </div>
  );
}
