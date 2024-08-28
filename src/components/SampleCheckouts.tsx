import {Anchor, Container, Group, Text} from "@mantine/core";
import {sampleCheckouts} from "../data/checkouts";

export const SampleCheckouts = () => {
  return (
    <Container>
      <Group>
        <Text>Sample checkouts: </Text>
        {sampleCheckouts.map((checkout) => (
          <Anchor href={checkout.url} target="_blank" underline="always">
            {checkout.label}
          </Anchor>
        ))}
      </Group>
    </Container>
  )
}
